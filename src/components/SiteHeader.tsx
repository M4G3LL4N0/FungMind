import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/80 border-b border-zinc-800">
      <div className="container flex h-16 items-center justify-between px-8">
        <Link href="/" className="font-bold text-xl bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent hover:opacity-90 transition-opacity">
          FungMind
        </Link>
        <nav className="flex items-center gap-8">
          <Link href="/products" className="text-zinc-400 hover:text-teal-400 transition-colors">
            Products
          </Link>
          <Link href="/science" className="text-zinc-400 hover:text-teal-400 transition-colors">
            Science
          </Link>
          <Link href="/investors" className="text-zinc-400 hover:text-teal-400 transition-colors">
            Investors
          </Link>
          <Link href="/about" className="text-zinc-400 hover:text-teal-400 transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
