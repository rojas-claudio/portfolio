/*
  Use Google Fonts to import IBM Plex Sans
*/
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" data-theme="retro" className="min-h-screen">
      <Head/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
