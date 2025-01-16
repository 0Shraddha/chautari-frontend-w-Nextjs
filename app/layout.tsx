
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

import Footer from "./layout/footer/page";
import Header from "./layout/header/page";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
