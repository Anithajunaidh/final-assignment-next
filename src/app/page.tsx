import LandingPage from '@/pages/landing-page';

import { ReactNode } from 'react';

 

export default function RootLayout({ children }: { children: ReactNode }) {

  return (

    <html lang="en">

      <body className='reset'><LandingPage/>{children}</body>

    </html>

  );

}