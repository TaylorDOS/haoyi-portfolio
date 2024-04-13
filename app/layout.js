//import {  } from "next/font/google";
import "./globals.css";

//const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Hao Yi, Tan",
  description: "Hao Yi's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
