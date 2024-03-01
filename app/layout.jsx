'use client';
import React from 'react';
import TopNav from '../components/sitelayout_Component/TopNav';

import { Inter } from 'next/font/google';
import './globals.css';
import NextNProgress from 'nextjs-progressbar';
const inter = Inter({ subsets: ['latin'] });
// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };
function RootLayout({ children }) {
  return (
    <div>
      <div class="w-full h-[auto] m-0 p-0 box-border">{children}</div>
    </div>
  );
}

export default RootLayout;
