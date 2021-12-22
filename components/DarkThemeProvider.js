import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';

const DarkThemeProvider = ({ children }) => {

  const darkThemeEnabled = useSelector((state) => state.darkMode.value);
  const theme = createTheme({
    palette: {
      background: {
        default: darkThemeEnabled ? "linear-gradient(90deg, rgba(0,76,108,1) 0%, rgba(0,21,38,1) 100%)" : "linear-gradient(90deg, rgb(88, 192, 236) 0%, rgb(165, 237, 255) 100%);",
      },
      mode: darkThemeEnabled ? "dark" : "light",
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;