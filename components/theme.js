import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    // mode: 'dark',
  },
  typography: {
    fontFamily: [
      'Prompt',
      'Helvitica Neue',
      'Helvitica',
      'Arial',
      'sans-serif',
      ].join(','),
    fontSize: 12,
    h4: {
      fontWeight: 900,
    }
  },
});

export default theme;