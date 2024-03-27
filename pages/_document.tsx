import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="description" content="" />
        <meta name="author" content="" />

        <title>Crispy Kitchen - Bootstrap 5 HTML Template</title>

        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" as="style" />
        <link rel="preload" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" as="style" />
        <link rel="preload" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" as="style" />
        <link rel="preload" href="custom.css" as="style" />
        <link rel="preload" href="custom.js" as="script" />

        <link href="https://fonts.googleapis.com" />

        <link href="https://fonts.gstatic.com" />

        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />

        <link href="css/tooplate-crispy-kitchen.css" rel="stylesheet" />

      <body>
        <Main />
        <NextScript />

        <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
        <script type="module" src="js/custom.js"></script>
      </body>
    </Html>
  )
}