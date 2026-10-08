import { Anton, Inter, JetBrains_Mono, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const anton = Anton({ weight: '400', subsets: ['latin'], variable: '--font-anton', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' });
const jp = Noto_Sans_JP({ weight: '900', subsets: ['latin'], variable: '--font-jp', display: 'swap', preload: false });

export const metadata = {
  title: 'Public Safety Studio',
  description:
    'A fan-made Chainsaw Man tribute — an animation studio for devils, hunters and everything that bleeds in between.',
  icons: { icon: '/icon.svg' },
};

export const viewport = {
  themeColor: '#0b0b0b',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} ${mono.variable} ${jp.variable}`}>
      <body className="is-loading">{children}</body>
    </html>
  );
}
