import countries from '../resources/countries.json';

import { GAME_MODES, REGIONS } from './../utils/index';
type ValuesOf<T extends readonly any[]> = T[number];

export type FLAG_ISO_CODE = keyof typeof countries;

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
  currencies: any[];
  flag: string;
  translations: {
    [name in TranslationName]: string;
  };
}
