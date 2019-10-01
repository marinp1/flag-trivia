import { LocalizedStringsMethods } from 'react-localization';
import { APP_THEME } from '../theme';
import { Region, GameMode } from '../types';

type IThemeNameTranslation = { [key in APP_THEME]: string };

export interface ILanguageNameTranslation {
  en: string;
  fi: string;
}

interface ISettingsTranslation {
  title: string;
  'setting-theme-label': string;
  'setting-lang-label': string;
}

interface IGameTranslation {
  'game-over-text': string;
  'question-title-label': string;
  'status-label': string;
  'prev-answer-correct-label': string;
  'prev-answer-incorrect-label': string;
}

interface IGeneralTranslation {
  'application-name': string;
  'application-tagline': string;
  'loading-text': string;
}

type RegionTranslation = { [key in Region]: string };
type ModeTranslation = { [key in GameMode]: string };

interface ILandingTranslation {
  'start-new-game-label': string;
  'select-region-label': string;
  'select-mode-label': string;
  region: RegionTranslation;
  mode: ModeTranslation;
  'select-mode-info-label': ModeTranslation;
}

export interface ITranslation extends LocalizedStringsMethods {
  theme: IThemeNameTranslation;
  lang: ILanguageNameTranslation;
  settings: ISettingsTranslation;
  game: IGameTranslation;
  general: IGeneralTranslation;
  landing: ILandingTranslation;
}
