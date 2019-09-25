import React from 'react';
import { APP_THEME, APP_THEME_NAMES } from '../../theme';
import Styled from './Styled';

interface Props {
  selectedTheme: APP_THEME;
  selectTheme: (themeName: APP_THEME) => void;
}

const Settings = (props: Props) => {
  return (
    <Styled.Container>
      <h1>Settings</h1>
      <h2>Select theme</h2>
      {APP_THEME_NAMES.map(themeName => (
        <button key={themeName} onClick={() => props.selectTheme(themeName)}>
          {themeName}
        </button>
      ))}
    </Styled.Container>
  );
};

export default Settings;
