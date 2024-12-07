import "./globals.css";
import localFont from 'next/font/local';

const sfpro = localFont({
  src: './fonts/SF-Pro-Display-Regular.otf',
  variable: '--font-sfpro',
})
const sfprobold = localFont({
  src: './fonts/SF-Pro-Display-Bold.otf',
  variable: '--font-sfprobold',
})

export const metadata = {
  metadataBase: new URL('https://https://haoyi-portfolio.vercel.app'),
  title: "Hao Yi's Portfolio Website",
  description: "Hao Yi's portfolio website is created in Next.js using Tailwind.CSS",
  openGraph: {
    images: '/images/opengraph.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sfprobold.variable}`}>
      <head>
        <meta name="google-site-verification" content="BBCa1f79QKD5a21-W-nAEe_WS4rr-kbWpZajXGMEnAE" />
      </head>
      <body className={`${sfpro.className}`}>
        {children}
      </body>
    </html>
  );
}
