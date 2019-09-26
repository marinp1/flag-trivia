import countries from './countries.json';
export type FLAG_ISO_CODE = keyof typeof countries;
export const FLAG_ISO_CODES = Object.keys(countries) as FLAG_ISO_CODE[];
export const COUNTRIES: {
  [code in FLAG_ISO_CODE]: {
    fi: string;
    en: string;
  };
} = countries;
