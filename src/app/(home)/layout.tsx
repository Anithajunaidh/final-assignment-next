import HomeLayout from '@/components/HomeLayout';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
      <HomeLayout/>
      {children}
      </body>
    </html>
  );
}
