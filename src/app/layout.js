import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Make sure Bootstrap is imported

import CustomNavbar from "@/app/components/CustomNavbar";

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
      </body>
    </html>
  );
}
