import { DarkTheme, DefaultTheme } from '@react-navigation/native';

const theme = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#242424',
      secondary: '#29434E',
      error: '#D32F2F',
      text: '#242424',
      textOnPrimary: '#FFFFFF',
      border: '#242424',
      active: '#1976D2',
      inactive: '#757575',
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#212121',
      secondary: '#29434E',
      error: '#D32F2F',
      text: '#FFFFFF',
      textOnPrimary: '#242424',
      border: '#FFFFFF',
      active: '#4FC3F7',
      inactive: '#FFFFFF',
    },
  },
};

export default theme;
