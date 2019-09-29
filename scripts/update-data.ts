import fetch from 'node-fetch';
import path from 'path';
import fs from 'fs';

import { RestCountriesResult } from '../src/types';
const finnishNames: {
  countries: {
    [code: string]: {
      fi: string;
    };
  };
} = require('../resources/names/fi.json');

const flagDirectory = path.resolve(__dirname, '../resources/flags');
if (!fs.existsSync(flagDirectory)) {
  fs.mkdirSync(flagDirectory);
}

const countryNamePath = path.resolve(
  __dirname,
  '../src/resources/countries.json',
);

interface CountryOutput {
  region: string;
  name: {
    fi: string;
    en: string;
  };
}

fetch('https://restcountries.eu/rest/v2/all')
  .then(res => res.json())
  .then((countries: RestCountriesResult[]) => {
    const flagPromises = countries.map(async country =>
      fetch(country.flag).then(async res => ({
        code: country.alpha2Code,
        data: await res.text(),
      })),
    );
    Promise.all(flagPromises).then(flags => {
      for (const flag of flags) {
        fs.writeFileSync(flagDirectory + '/' + flag.code + '.svg', flag.data);
      }
    });
    let skipped = 0;
    const names = countries
      .map(country => ({
        [country.alpha2Code]: {
          region: country.region ? country.region.toLowerCase() : '',
          name: {
            fi: finnishNames.countries[country.alpha2Code]
              ? finnishNames.countries[country.alpha2Code].fi
              : country.name,
            en: country.name,
          },
        },
      }))
      .reduce((prev: any, cur: { [val: string]: CountryOutput }) => {
        const obj = Object.values(cur)[0];
        if (!obj.region || obj.region === 'polar') {
          console.log('Skipping', JSON.stringify(cur));
          skipped++;
          return prev;
        }
        return {
          ...prev,
          ...cur,
        };
      }, {});
    fs.writeFileSync(countryNamePath, JSON.stringify(names, null, 2));
    console.log('Index update successful!');
    console.log('Processed entries: ' + countries.length);
    console.log('Saved entries: ' + (countries.length - skipped));
    console.log('Skipped entries: ' + skipped);
  });
