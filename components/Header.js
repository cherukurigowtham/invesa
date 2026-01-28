import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ padding: '1rem', borderBottom: '1px solid #eaeaea', display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ fontWeight: 'bold' }}>Invesa</div>
      <nav>
        <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link href="/login" style={{ marginRight: '1rem' }}>Login</Link>
        <Link href="/signup">Signup</Link>
      </nav>
    </header>
  );
}
