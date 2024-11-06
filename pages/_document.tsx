import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html prefix="og: http://ogp.me/ns#">
        <Head>
          {/*Favicons*/}

          {/*web fonts*/}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Press+Start+2P&display=swap"
            rel="stylesheet"
          />

          {/*font awesome icons*/}
          <script
            src="https://kit.fontawesome.com/aeb9fcb31a.js"
            crossOrigin="anonymous"
          />

          {/*metadata*/}
          <meta
            property="og:title"
            content="CSCI1951L: Blockchains and Cryptocurrencies"
          />
          <meta
            name="image"
            property="og:image"
            content="/anim_placeholder.jpeg"
          />
          <meta name="author" content="Brown University" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
