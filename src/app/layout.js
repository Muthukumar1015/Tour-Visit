import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Make sure Bootstrap is imported

import CustomNavbar from "@/app/components/CustomNavbar";
import Footer from "@/app/components/Footer"; // ✅ Import Footer component

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Travel Website</title>
        <meta name="description" content="Best travel experience and tour packages" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <CustomNavbar /> {/* ✅ Navbar is here */}
        {children}
        <Footer /> {/* ✅ Footer is added here */}
      </body>
    </html>
  );
}
