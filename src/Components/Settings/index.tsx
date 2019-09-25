import React from 'react';
import { APP_THEME, APP_THEME_NAMES } from '../../theme';
import Styled from './Styled';

interface Props {
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
  const [open, setOpen] = React.useState(false);
  return (
    <Styled.Container open={open}>
      <Styled.HeaderBar>
        {open && <h1>Settings</h1>}
        <HamburgerMenu toggle={() => setOpen(!open)} open={open} />
      </Styled.HeaderBar>
      {open && (
        <React.Fragment>
          <h3>Select theme</h3>
          {APP_THEME_NAMES.map(themeName => (
            <button
              key={themeName}
              onClick={() => props.selectTheme(themeName)}
            >
              {themeName}
            </button>
          ))}
        </React.Fragment>
      )}
    </Styled.Container>
  );
};

export default Settings;
