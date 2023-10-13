import LoginLayout from '@/components/LoginLayout';
export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <LoginLayout>
      <main >
      {children}
      </main>
      </LoginLayout>
    </div>
  );
}