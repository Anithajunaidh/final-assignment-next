// import HomeLayout from '@/components/HomeLayout';
// import { ReactNode } from 'react';

import HomeLayout from "@/components/HomeLayout";

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//       <HomeLayout>
//       {children}
//       </HomeLayout>
//       </body>
//     </html>
//   );
// }

export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <HomeLayout>
      <main className='flex items-center justify-center min-h-screen'>
      {children}
      </main>
      </HomeLayout>
    </div>
  );
}