import { ReactNode} from 'react';
import UserDashboard from '@/components/dashboard/UserDashboard';


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className='reset'>
        <UserDashboard>
          {children}
        </UserDashboard>
      </body>
    </html>

  );

}