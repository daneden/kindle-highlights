import Document, { Head, Html, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.xz.style/serve/ibm-plex-serif.css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.xz.style/serve/ibm-plex-sans.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
