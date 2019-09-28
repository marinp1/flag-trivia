export const breakpoints = {
  mobile: `@media (min-width: 480px)`,
  tablet: `@media (min-width: 768px)`,
  desktop: `@media (min-width: 1200px)`,
};

export interface ITheme {
  colors: {
    primary: React.CSSProperties['color'];
    border: React.CSSProperties['color'];
    background: React.CSSProperties['color'];
    highlight: React.CSSProperties['color'];
  };
  combobox: {
    color1: React.CSSProperties['color'];
    color2: React.CSSProperties['color'];
  };
  borderRadius: React.CSSProperties['borderRadius'];
  boxShadow: React.CSSProperties['boxShadow'];
  smallBoxShadow: React.CSSProperties['boxShadow'];
}

const lightTheme: ITheme = {
  colors: {
    background: '#f5f5f5',
    primary: '#333',
    border: '#e1e1e1',
    highlight: '#fff',
  },
  combobox: {
    color1: '#f9f9f9',
    color2: '#e9e9e9',
  },
  borderRadius: '0.5rem',
  boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.25)',
  smallBoxShadow: undefined,
};

const darkTheme: ITheme = {
  colors: {
    background: '#2A2A2E',
    primary: '#eee',
    border: '#2E2E2A',
    highlight: '#333',
  },
  combobox: {
    color1: '#4A4A4A',
    color2: '#575757',
  },
  borderRadius: '0.5rem',
  boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.25)',
  smallBoxShadow: '0px 1px 1px 0px rgba(0,0,0,0.05)',
};

export type APP_THEME = 'light' | 'dark';

const APP_THEMES: {
  [key in APP_THEME]: ITheme;
} = {
  light: lightTheme,
  dark: darkTheme,
};

export const APP_THEME_NAMES = Object.keys(APP_THEMES) as APP_THEME[];

export const getThemeByName = (
  name: APP_THEME,
): {
  name: APP_THEME;
  value: ITheme;
} => ({
  name,
  value: APP_THEMES[name],
});

export const currentTheme = (): {
  name: APP_THEME;
  value: ITheme;
} => {
  const currentThemeName = localStorage.getItem('app_theme');
  const theme = APP_THEMES[currentThemeName as APP_THEME];
  if (!currentThemeName || !theme) {
    return getThemeByName('light');
  }
  return getThemeByName(currentThemeName as APP_THEME);
};
