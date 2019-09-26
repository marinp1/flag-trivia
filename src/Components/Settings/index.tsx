import React from 'react';
import { APP_THEME, APP_THEME_NAMES } from '../../theme';
import Styled from './Styled';

import {
  IThemeNameTranslation,
  ISettingsTranslation,
  IGeneralTranslation,
} from '../../translations/translationKeys';

type Translations = IThemeNameTranslation &
  ISettingsTranslation &
  IGeneralTranslation;

interface Props {
  translations: Translations;
  languages: string[];
  selectedLanguage: string;
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
  const { translations } = props;
  const [open, setOpen] = React.useState(false);

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
      setOpen(true);
    }
    if (xDiff < -50) {
      setOpen(false);
    }
    swipe.current = {};
  };

  return (
    <Styled.Container
      open={open}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onClick={() => (!open ? setOpen(true) : {})}
    >
      <Styled.HeaderBar>
        {open && <h1>{translations.title}</h1>}
        <HamburgerMenu toggle={() => setOpen(!open)} open={open} />
      </Styled.HeaderBar>
      {open && (
        <React.Fragment>
          <h3>{translations['setting-theme-label']}</h3>
          <Styled.Module>
            {APP_THEME_NAMES.map(themeName => (
              <button
                key={themeName}
                onClick={() => props.selectTheme(themeName)}
              >
                {themeName}
              </button>
            ))}
          </Styled.Module>
          <Styled.Module>
            <h3>{translations['setting-lang-label']}</h3>
            {props.languages.map(language => (
              <button
                key={language}
                onClick={() => props.selectLanguage(language)}
              >
                {language}
              </button>
            ))}
          </Styled.Module>
        </React.Fragment>
      )}
    </Styled.Container>
  );
};

export default Settings;
