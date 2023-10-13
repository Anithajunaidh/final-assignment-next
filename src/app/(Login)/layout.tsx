import { ReactNode} from 'react';
import LoginPageNgo from '@/components/NGOLogin/LoginPageNgo';


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className='reset'>
        <LoginPageNgo>
          {children}
        </LoginPageNgo>
      </body>
    </html>

  );

}