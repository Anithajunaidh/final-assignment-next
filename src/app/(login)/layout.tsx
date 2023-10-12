import Sidebar from '@/components/Sidebar';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
      <Sidebar/>
      {children}
      </body>
    </html>
  );
}
