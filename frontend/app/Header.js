import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div
        aria-hidden="true"
        className="p-3 text-xl font-bold uppercase drop-shadow-xl border border-yellow-400 bg-gradient-to-tl from-black to-black via-yellow-700 via-60% rounded-md shadow-sm"
        >
       <span className="bg-clip-text text-transparent bg-gradient-to-tl from-yellow-500 to-yellow-400 via-yellow-300">
        Bank of Chas
        </span>
      </div>

      <nav>
        <menu className="nav-menu">
          <Link href="/" className="link">
            Hem
          </Link>
          <Link href="/create-user" className="link">
            Skapa användare
          </Link>

          <Link href="/login" className="link">
            Logga in
          </Link>
          <Link href="/account" className="link">
            Konto
          </Link>
        </menu>
      </nav>
    </header>
  );
}