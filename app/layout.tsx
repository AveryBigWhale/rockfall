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
      <head>
          <title>落石黨 Rockfall Party</title> {/* 這裡是網頁標題 */}
          {/* <link rel="icon" href="/favicon.ico" /> 這是 favicon 路徑 */}
          {/* 可選：支援多尺寸 icon */}
          <link rel="icon" type="image/svg+xml" href="https://averybigwhale.github.io/rockfall/emblem.svg" />
          {/* <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
      </head>
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}