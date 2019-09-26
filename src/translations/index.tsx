import LocalizedStrings from 'react-localization';
import ITranslation from './translationKeys';

const translations: ITranslation = new LocalizedStrings({
  en: {
    general: {
      'application-name': 'Flag Trivia',
      'loading-text': 'Loading...',
    },
    theme: {
      light: 'Light',
      dark: 'Dark',
    },
    settings: {
      title: 'Settings',
      'setting-theme-label': 'Colour theme',
      'setting-lang-label': 'Language',
    },
    game: {
      'game-over-text': 'Game over',
      'question-title-label': 'Question {0}',
    },
  },
  fi: {
    general: {
      'application-name': 'Lipputrivia',
      'loading-text': 'Ladataan...',
    },
    theme: {
      light: 'Valoisa',
      dark: 'Tumma',
    },
    settings: {
      title: 'Asetukset',
      'setting-theme-label': 'Väriteema',
      'setting-lang-label': 'Kieli',
    },
    game: {
      'game-over-text': 'Peli ohi',
      'question-title-label': 'Kysymys {0}',
    },
  },
});

export default translations;
