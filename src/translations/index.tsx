import LocalizedStrings from 'react-localization';
import ITranslation from './translationKeys';

export type LANGUAGES = keyof typeof translations.lang;

const translations: ITranslation = new LocalizedStrings({
  en: {
    general: {
      'application-name': 'Flag Trivia',
      'loading-text': 'Loading...',
    },
    lang: {
      en: 'English',
      fi: 'Finnish',
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
      'question-title-label': 'Question {0} / {1}',
    },
  },
  fi: {
    general: {
      'application-name': 'Lipputrivia',
      'loading-text': 'Ladataan...',
    },
    lang: {
      en: 'englanti',
      fi: 'suomi',
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
      'question-title-label': 'Kysymys {0} / {1}',
    },
  },
});

export default translations;
