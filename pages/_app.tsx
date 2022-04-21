import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const data = ' '
  return <Component {...pageProps} />
}

export default MyApp
