import countries from '../resources/countries.json';

import { GAME_MODES, REGIONS } from './../utils/index';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ValuesOf<T extends readonly any[]> = T[number];

/*
type Full<T> = {
  [P in keyof T]-?: T[P];
};
*/

export type FLAG_ISO_CODE = keyof typeof countries;
export type FLAG_ISO_CODE_BY_REGION = {
  [region in Region]: FLAG_ISO_CODE[];
};

type TranslationName = 'de' | 'es' | 'fr' | 'it';

export type GameMode = ValuesOf<typeof GAME_MODES>;
export type Region = ValuesOf<typeof REGIONS>;

export interface RestCountriesResult {
  name: string;
  alpha2Code: string;
  alpha3Code: string;
  capital: string;
  region: string;
  population: number;
  borders: string[];
  nativeName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  currencies: any[];
  flag: string;
  translations: {
    [name in TranslationName]: string;
  };
}
