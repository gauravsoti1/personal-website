import ManageNav from './ManageNav';

export const metadata = {
  robots: { index: false, follow: false },
};

export default function ManageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <ManageNav />
      {children}
    </div>
  );
}
