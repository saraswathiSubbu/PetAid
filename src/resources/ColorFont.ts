import { createTheme } from '@mui/material/styles';

export const colorFontTheme = createTheme({
  palette: {
    primary: {
      main: '#6930c3',
    }
  },
  typography: {
    subtitle1: {
      fontSize: 15,
    },
    body1: {
      fontWeight: 500,
    }
  }
});