import Link from 'next/link';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <nav>
          <Link href="/">Home</Link> | 
          <Link href="/about">About</Link> | 
          <Link href="/contact">Contact</Link> | 
          <Link href="/signin">Login</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
