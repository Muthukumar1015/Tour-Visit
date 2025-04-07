"use client"; // ✅ Must be a Client Component

import { SessionProvider } from "next-auth/react";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Make sure Bootstrap is imported

import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';


export default function RootLayout({ children }) {
  return (
    <SessionProvider> {/* ✅ Wrap everything inside SessionProvider */}
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
    </SessionProvider>
  );
}
