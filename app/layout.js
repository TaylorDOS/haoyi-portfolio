import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', 
});

export const metadata = {
  metadataBase: new URL('https://taylordos-portfolio.vercel.app'),
  title: "Hao Yi's Portfolio Website",
  description: "Hao Yi's portfolio website is created in Next.js using Tailwind.CSS",
  openGraph: {
    title: "Hao Yi's Portfolio Website",
    description: "Hao Yi's portfolio website is created in Next.js using Tailwind.CSS", // Added OpenGraph description
    url: 'https://taylordos-portfolio.vercel.app',
    images: '/images/opengraph-image.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="9YqE7E_anQFzzFlDlZWg00R6asvYwKL0toFtZ1-U5o0" />
      </head>
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
