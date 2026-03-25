export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800 mt-32">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 px-8 text-center">
        <p className="text-zinc-400">
          Fungi-powered health, performance, and biotechnology.
        </p>
        <p className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} FungMind. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
