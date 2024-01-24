import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: '#000000',
    },
    mode: 'light',
    primary: {
      light: '#FFFFFF',
      main: '#00253E',
    },
    secondary: {
      light: '#E0C68E',
      main: '#C29B40',
      dark: '#A68940',
    },
    error: {
      light: '#F7C9C6',
      main: '#DD2415',
      dark: '#A81E13',
    },
    success: {
      light: '#D3E7D4',
      main: '#4F9E53',
      dark: '#3B763E',
    },
    warning: {
      light: '#F7C9C6',
      main: '#DD2415',
      dark: '#E95500',
    },
  },
});

export default theme;
