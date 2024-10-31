import { Analytics } from '@vercel/analytics/next'

import localFont from "next/font/local";
import "./globals.css";

const lineSeedSansTH = localFont({
  src: [
    {
      path: './assets/fonts/LINESeedSansTH/LINESeedSansTH_W_Th.woff',
      weight: '100',
      style: 'normal',
    },
    {
      path: './assets/fonts/LINESeedSansTH/LINESeedSansTH_W_Rg.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './assets/fonts/LINESeedSansTH/LINESeedSansTH_W_Bd.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './assets/fonts/LINESeedSansTH/LINESeedSansTH_W_XBd.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: './assets/fonts/LINESeedSansTH/LINESeedSansTH_W_He.woff',
      weight: '900',
      style: 'normal',
    }
  ]
});

export const metadata = {
  title: "techdev. SKE Companion",
  description: "Dream Corporation!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lineSeedSansTH.className}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
