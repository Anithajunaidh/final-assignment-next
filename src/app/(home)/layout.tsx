import HomeLayout from "@/components/HomeLayout";
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