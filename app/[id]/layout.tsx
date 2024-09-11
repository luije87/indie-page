export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">{children}</div>
  );
}
