import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        color: 'primary',
        variant: 'contained',
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: 'rgba(0, 0, 0)',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          marginLeft: '4px',
          color: 'rgba(0, 0, 0)',
        },
        asterisk: {
          color: 'red',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '12px 8px',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
        },
      },
    },
  },
  spacing: 4,
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

export { theme, ThemeProvider };
