import Head from 'next/head'
import App from './app'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>'ray schedule</title>
      </Head>

      <main>
        <App />
      </main>
    </div>
  )}
