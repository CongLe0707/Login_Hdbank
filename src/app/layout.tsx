'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from './components/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const noHeader = pathname === '/login';

  const headerTotalHeight = 136;

  return (
    <html lang="en">
      <body>
        {!noHeader && <Header />}

        <main
          style={{
            paddingTop: noHeader ? 0 : `${headerTotalHeight}px`,
            minHeight: '100vh',
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
