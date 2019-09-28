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
    landing: {
      'start-new-game-label': 'Start new game',
      'select-region-label': 'Region',
      'select-mode-label': 'Mode',
      region: {
        world: 'World',
        africa: 'Africa',
        asia: 'Asia',
        europe: 'Europe',
        'north-america': 'North America',
        'south-america': 'South America',
        oceania: 'Oceania',
      },
      mode: {
        random: 'Random',
        similar: 'Similar',
        region: 'Region',
      },
      'select-mode-info-label': {
        random: 'Choices are selected randomly among possible flags.',
        similar: 'Choices are selected to be visually similar.',
        region: 'Choices are selected from same region.',
      },
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
    landing: {
      'start-new-game-label': 'Aloita uusi peli',
      'select-region-label': 'Alue',
      'select-mode-label': 'Pelimuoto',
      region: {
        world: 'Maailma',
        africa: 'Afrikka',
        asia: 'Aasia',
        europe: 'Eurooppa',
        'north-america': 'Pohjois-Amerikka',
        'south-america': 'Etelä-Amerikka',
        oceania: 'Oseania',
      },
      mode: {
        random: 'Satunnainen',
        similar: 'Samankaltaiset',
        region: 'Alue',
      },
      'select-mode-info-label': {
        random: 'Vaihtoehdot ovat valittu kaikkien lippujen joukosta.',
        similar: 'Vaihtoehdot ovat samankaltaisia.',
        region: 'Vaihtoehdot ovat samalta alueelta.',
      },
    },
  },
});

export default translations;
