import { LocalizedStringsMethods } from 'react-localization';

export interface IThemeNameTranslation {
  light: string;
  dark: string;
}

export interface ISettingsTranslation {
  title: string;
  'setting-theme-label': string;
  'setting-lang-label': string;
}

export interface IGameTranslation {
  'game-over-text': string;
  'question-title-label': string;
}

export interface IGeneralTranslation {
  'application-name': string;
  'loading-text': string;
}

interface ITranslation extends LocalizedStringsMethods {
  theme: IThemeNameTranslation;
  settings: ISettingsTranslation;
  game: IGameTranslation;
  general: IGeneralTranslation;
}

export default ITranslation;
