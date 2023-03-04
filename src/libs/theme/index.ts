import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  spacing: 4,
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

export { theme, ThemeProvider };
