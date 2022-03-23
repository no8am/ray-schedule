// import App from 'next/app'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from 'react-redux'

import { store } from '/src/app/store'
import DarkThemeProvider from "../components/DarkThemeProvider";
import Header from '../components/Header';
import Head from 'next/head'

import '../styles.scss'
import '../dist/output.css'

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <DarkThemeProvider>
        <Head>
          <title>&apos;ray schedule - the student-made course scheduling solution</title>

          <link href="/dist/output.css" rel="stylesheet" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} /> */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,200;0,400;0,700;0,900;1,200;1,400;1,700;1,900&display=swap" rel="stylesheet" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <Header />
        <Component {...pageProps} />
      </DarkThemeProvider> 
    </Provider> 
  )
}

export default MyApp