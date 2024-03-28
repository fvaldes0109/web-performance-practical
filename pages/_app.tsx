import React from 'react'

import type { AppProps } from 'next/app'
import Head from 'next/head'
 
export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="description" content="" />
        <meta name="author" content="" />

        <title>Crispy Kitchen - Bootstrap 5 HTML Template</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}