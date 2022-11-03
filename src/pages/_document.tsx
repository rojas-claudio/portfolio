/*
  Use Google Fonts to import IBM Plex Sans
*/
import { Html, Head, Main, NextScript } from "next/document";
import { themeChange } from "theme-change"

export default function Document() {
  // useEffect(() => {
  //   themeChange(false);
  // });
  
  
  return (
    <Html lang="en" data-theme="light" className="min-h-screen">
      <Head/>
      <body>
        <Main />
        <NextScript/>
      </body>
    </Html>
  );
}
