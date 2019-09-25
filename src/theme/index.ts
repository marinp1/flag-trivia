export const breakpoints = {
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
  borderRadius: React.CSSProperties['borderRadius'];
  boxShadow: React.CSSProperties['boxShadow'];
}

const lightTheme: ITheme = {
  colors: {
    background: '#f5f5f5',
    primary: '#333',
    border: '#e1e1e1',
    highlight: '#fff',
  },
  borderRadius: '1rem',
  boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.25)',
};

const darkTheme: ITheme = {
  colors: {
    background: '#2A2A2E',
    primary: '#eee',
    border: '#2E2E2A',
    highlight: '#333',
  },
  borderRadius: '1rem',
  boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.25)',
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
  name: APP_THEME
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
