import countries from '../resources/countries.json';
import { FLAG_ISO_CODE } from '../types';

export const FLAG_ISO_CODES = Object.keys(countries) as FLAG_ISO_CODE[];

export const GAME_MODES = <const>['random', 'similar', 'region'];
export const REGIONS = <const>[
  'world',
  'africa',
  'asia',
  'europe',
  'north-america',
  'south-america',
  'oceania',
];

export const COUNTRIES: {
  [code in FLAG_ISO_CODE]: {
    fi: string;
    en: string;
  };
} = countries;
