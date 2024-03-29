import React from 'react';
import { APP_THEME, APP_THEME_NAMES } from '../../theme';
import Styled from './Styled';

import Translations, { LANGUAGES } from '../../translations';

import { ComboBox } from '../Utils';

import { LANG_FLAG } from '../../utils';

import './hamburgers.css';

interface Props {
  setSettingsStatus: (val: boolean) => void;
  settingsOpen: boolean;
  translations: typeof Translations;
  selectLanguage: (language: string) => void;
  selectedTheme: APP_THEME;
  selectTheme: (themeName: APP_THEME) => void;
}

const HamburgerMenu = ({
  toggle,
  open,
}: {
  toggle: () => void;
  open: boolean;
}) => {
  const extraClassName = open ? ['is-active'] : [];
  return (
    <button
      onClick={() => toggle()}
      className={['hamburger', 'hamburger--collapse']
        .concat(extraClassName)
        .join(' ')}
      type="button"
      aria-label="Menu"
      aria-controls="navigation"
      aria-expanded={open}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

const Settings = (props: Props) => {
  const {
    settings: __settings__,
    theme: __theme__,
    lang: __lang__,
  } = props.translations;
  const swipe = React.useRef<Partial<{ swiping: boolean; x: number }>>({});

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    swipe.current = { x: touch.clientX };
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.changedTouches && e.changedTouches.length) {
      swipe.current.swiping = true;
    }
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!swipe.current.x) {
      return;
    }
    const touch = e.changedTouches[0];
    const xDiff = touch.clientX - swipe.current.x;
    if (xDiff > 50) {
      props.setSettingsStatus(true);
    }
    if (xDiff < -50) {
      props.setSettingsStatus(false);
    }
    swipe.current = {};
  };

  return (
    <Styled.Container
      open={props.settingsOpen}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onClick={() => (!props.settingsOpen ? props.setSettingsStatus(true) : {})}
    >
      <Styled.HeaderBar>
        {props.settingsOpen && <h1>{__settings__.title}</h1>}
        <HamburgerMenu
          toggle={() => props.setSettingsStatus(!props.settingsOpen)}
          open={props.settingsOpen}
        />
      </Styled.HeaderBar>
      {props.settingsOpen && (
        <React.Fragment>
          <Styled.Module>
            <ComboBox<APP_THEME>
              title={__settings__['setting-theme-label']}
              choices={APP_THEME_NAMES.map(themeName => ({
                key: themeName,
                value: __theme__[themeName],
              }))}
              setSelection={props.selectTheme}
              selection={props.selectedTheme}
            />
          </Styled.Module>
          <Styled.Module>
            <ComboBox<LANGUAGES>
              title={__settings__['setting-lang-label']}
              choices={props.translations
                .getAvailableLanguages()
                .map(language => ({
                  key: language as LANGUAGES,
                  value: __lang__[language as LANGUAGES],
                  extra: LANG_FLAG[language as LANGUAGES],
                }))}
              setSelection={props.selectLanguage}
              selection={props.translations.getLanguage() as LANGUAGES}
            />
          </Styled.Module>
        </React.Fragment>
      )}
    </Styled.Container>
  );
};

export default Settings;
