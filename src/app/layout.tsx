import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Kode_Mono } from 'next/font/google';
import './globals.css';

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const kodeMono = Kode_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Heather Scalia Portfolio',
  description: 'Technical Project Manager portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kodeMono.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
