'use client';
import React from 'react';
import TopNav from '../components/sitelayout_Component/TopNav';

import { Inter } from 'next/font/google';
import './globals.css';
import NextNProgress from 'nextjs-progressbar';
const inter = Inter({ subsets: ['latin'] });

function RootLayout({ children }) {
  return (
  <div>
    <div class="w-full h-full m-0 p-0 box-border">{children}</div>
  </div>);
}

export default RootLayout;
