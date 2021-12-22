// import App from 'next/app'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from 'react-redux'

import { store } from '/src/app/store'
import theme from "../components/theme";
import Header from '../components/Header';
import Head from 'next/head'

import '../styles.scss'
import '../dist/output.css'

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>'ray schedule - the student-made course scheduling solution</title>

        <link href="/dist/output.css" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
        <link href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,200;0,400;0,700;0,900;1,200;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>  
  )
}

export default MyApp