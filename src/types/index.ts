import countries from '../resources/countries.json';

export type FLAG_ISO_CODE = keyof typeof countries;

type TranslationName = 'de' | 'es' | 'fr' | 'it';

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
