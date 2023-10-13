import Sidebar from '@/components/Sidebar';
export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Sidebar>
      <main >
      {children}
      </main>
      </Sidebar>
    </div>
  );
}