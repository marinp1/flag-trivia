import _ from 'lodash';
import countries from '../resources/countries.json';
import { FLAG_ISO_CODE, FLAG_ISO_CODE_BY_REGION, Region } from '../types';

export const FLAG_ISO_CODES_ALL = Object.keys(countries) as FLAG_ISO_CODE[];

export const GAME_MODES = <const>['random', 'similar', 'region'];
export const REGIONS = <const>[
  'world',
  'africa',
  'asia',
  'europe',
  'americas',
  'oceania',
];

export const COUNTRIES = countries as {
  [code in FLAG_ISO_CODE]: {
    region: Region;
    name: {
      fi: string;
      en: string;
    };
  };
};

export const LANG_FLAG: {
  en: string;
  fi: string;
} = {
  fi: '🇫🇮',
  en: '🇬🇧',
};

export const FLAG_ISO_CODES_BY_REGION = REGIONS.filter(
  region => region !== 'world',
).reduce(
  (prev, cur) => ({
    ...prev,
    [cur]: Object.keys(_.pickBy(COUNTRIES, country => country.region === cur)),
  }),
  {
    world: FLAG_ISO_CODES_ALL,
  },
) as FLAG_ISO_CODE_BY_REGION;
