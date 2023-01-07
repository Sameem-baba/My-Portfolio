import "../styles/globals.css";
import Footer from "./Footer";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <link
        href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <meta name="description" content="16 y/o. Full-stack Developer" />
      <body className="max-w-7xl mx-auto scrollbar-thin scrollbar-thumb-primary scrollbar-thumb-rounded-xl">
        <Header />
        {children}
        <Footer />
        <div className="color-layout layout-purple position-right-top" />
        <div className="color-layout layout-blue position-left-bottom" />
      </body>
    </html>
  );
}
