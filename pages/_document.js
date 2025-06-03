import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, shrink-to-fit=no" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" type="image/png" href="/logo/isda-round.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/logo/isda-round.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/logo/isda-round.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}