// app/layout.tsx

import './globals.css'; // 若有全域樣式可在此引入
import NavBar from '../components/navbar';
import { ReactNode } from 'react';

export const metadata = {
  title: '落石黨',
  description: '落石黨官方網站'
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}