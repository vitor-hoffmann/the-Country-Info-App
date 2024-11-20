/* eslint-disable @next/next/no-page-custom-font */
import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
