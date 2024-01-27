import { createTheme } from "@mui/material/styles";
import bass_image from "../public/bass_image.jpg"

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
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `url(${bass_image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          margin: 0,
          padding: 0,
          minHeight: '100vh', // Ensure full height
        },
      },
    },
  },
});

export default theme;
