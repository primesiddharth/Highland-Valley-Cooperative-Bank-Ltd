import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Highland Valley Cooperative Bank Ltd. | Banking Rooted in Community Trust',
  description:
    'Highland Valley Cooperative Bank Ltd., Kohima, Nagaland. Trusted cooperative banking for the Northeast since 1994. Savings, FD, RD, loans, and Government Schemes support.',
  keywords: [
    'cooperative bank Nagaland',
    'Highland Valley Cooperative Bank',
    'Kohima bank',
    'Northeast India banking',
    'cooperative bank India',
    'NABARD',
    'RBI regulated bank',
  ],
  openGraph: {
    title: 'Highland Valley Cooperative Bank Ltd.',
    description: 'Banking Rooted in Community Trust — Kohima, Nagaland',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
