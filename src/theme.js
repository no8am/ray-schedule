import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    // mode: 'dark',
  },
  typography: {
    fontFamily: [
      'Century Schoolbook',
      ].join(','),
    h3: {
      fontSize: '1.2rem',
      fontFamily: '"Courier New", "Helvetica", "Arial", sans-serif',
    },
  },
});

export default theme;