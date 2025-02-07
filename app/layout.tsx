
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

import Footer from "./layout/footer/page";
import Header from "./layout/header/page";
import Sidebar from "./layout/sidebar/page";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-100">
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-2 d-flex flex-column bg-secondary h-100">
              <Sidebar />
            </div>
            <div className="col d-flex flex-column h-100" style={{ background : '#f3f3f2'}}>
              <Header />
              <div className="flex-grow-1 mx-5 mt-2">{children}</div>
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
