import "./globals.css";
import { Inter, Playfair_Display } from 'next/font/google';
import Navbar from "./components/Navbar";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata = {
  metadataBase: new URL('https://haoyi-portfolio.com'),
  title: "Hao Yi's Portfolio",
  description: "Based in Singapore, Hao Yi is a web developer passionate about crafting interactive web experiences through the power of visual storytelling.",
  openGraph: {
    title: "Hao Yi's Portfolio",
    description: "Based in Singapore, Hao Yi is a web developer passionate about crafting interactive web experiences through the power of visual storytelling.",
    url: 'https://haoyi-portfolio.com',
    images: '/images/opengraph-image.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="9YqE7E_anQFzzFlDlZWg00R6asvYwKL0toFtZ1-U5o0" />
      </head>
      <body className={`${playfair.variable} ${inter.className}`}>
        <Navbar />
        {children}
        <div className="bg-blue-50">
          <div className="container mx-auto px-8 max-w-6xl">
            <section id="contact" className="scroll-mt-24">
              <EmailSection />
            </section>
            <Footer />
          </div>
        </div>
        <SpeedInsights />
        <Analytics />

      </body>
    </html>
  );
}
