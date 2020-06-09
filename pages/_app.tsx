import { AppProps } from "next/app"
import "../styles.css"

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
