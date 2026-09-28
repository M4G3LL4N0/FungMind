import { WaitlistForm } from "@/components/WaitlistForm";
import Link from "next/link";
import { products } from "@/lib/products";

const platformTracks = [
  {
    title: "Bioengineering",
    body: "Strain and extract work for later nutrition products. Formulations stay labeled as research until a batch is actually released.",
  },
  {
    title: "Discovery notes",
    body: "Literature and compound notes that help pick the next experiment. This is a research aid, not a clinical pipeline scoreboard.",
  },
  {
    title: "Materials track",
    body: "Later mycelium composites for packaging and textiles. Prototypes only — no commercial material SKU is claimed here.",
  },
];

export default function Home(): JSX.Element {
  const featured = products.slice(0, 3);

  return (
    <div className="flex flex-col flex-1 items-center font-sans bg-black text-zinc-100">
      <main className="flex w-full max-w-6xl flex-1 flex-col px-6 py-16 sm:py-24">
        <section className="mb-24 w-full max-w-4xl space-y-8 text-center sm:mb-32">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-300/80">
            Research-stage fungal platform
          </p>
          <h1 className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl">
            Performance nutrition grown from fungal biology.
          </h1>
          <p className="text-lg text-zinc-400 sm:text-xl">
            FungMind is a research-stage platform for mushroom-based recovery products
            and later mycelium materials. Nothing on this page is a clinical claim,
            a live inventory count, or a published sales figure.
          </p>
          <div className="flex flex-col items-center space-y-5">
            <WaitlistForm />
            <Link
              href="/products"
              className="text-sm font-medium text-teal-300 underline-offset-4 hover:underline"
            >
              Explore the product tracks
            </Link>
          </div>
        </section>

        <section className="mb-24 w-full max-w-4xl space-y-10 sm:mb-32">
          <h2 className="text-3xl font-bold text-zinc-100 sm:text-4xl">Our Platform</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {platformTracks.map((track) => (
              <article key={track.title} className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
                <h3 className="text-2xl font-semibold text-zinc-100">{track.title}</h3>
                <p className="text-zinc-400">{track.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-24 w-full space-y-10 sm:mb-32">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold text-zinc-100 sm:text-4xl">Featured Products</h2>
            <p className="text-sm text-zinc-500">Formulation tracks · not a storefront with live stock</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featured.map((product) => (
              <article
                key={product.slug}
                className="relative rounded-lg border border-zinc-800 p-8 transition hover:border-teal-500/60"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-teal-400/80">{product.category}</p>
                <h3 className="mt-3 text-2xl font-semibold text-zinc-100">{product.title}</h3>
                <p className="mt-1 italic text-emerald-100/70">{product.species}</p>
                <p className="mt-4 text-sm text-zinc-400">{product.promise}</p>
                <p className="mt-3 text-xs text-zinc-500">Stage: {product.stage}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.actives.slice(0, 2).map((active) => (
                    <span key={active} className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-teal-400">
                      {active}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/products/${product.slug}`}
                  className="mt-6 inline-block text-sm text-teal-300 underline-offset-4 hover:underline"
                >
                  Open this track
                </Link>
              </article>
            ))}
          </div>
          <div className="space-y-3 pt-4 text-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-lg border border-teal-500 px-6 py-3 font-semibold text-teal-500 transition-colors duration-300 hover:bg-teal-500 hover:text-black"
            >
              Explore All Products →
            </Link>
            <p className="text-sm text-zinc-500">
              Tracks describe intended formulations. Benefits are design goals, not trial outcomes.
            </p>
          </div>
        </section>

        <section className="mb-24 w-full max-w-4xl space-y-10 sm:mb-32">
          <h2 className="text-3xl font-bold text-zinc-100 sm:text-4xl">Featured Research</h2>
          <p className="text-zinc-400">
            Public papers we watch while designing extracts. Citing a paper is not the
            same as claiming FungMind ran the study or that a product is proven.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <article className="rounded-lg border border-zinc-800 p-6">
              <h3 className="mb-3 text-2xl font-semibold text-zinc-100">Lion&apos;s Mane literature</h3>
              <p className="mb-4 text-zinc-400">
                Hericium erinaceus appears in published work on nerve-growth-factor
                pathways. We use that literature to choose markers to measure later —
                not as a product efficacy claim.
              </p>
              <p className="text-sm text-teal-400">Watchlist note · not a FungMind trial</p>
            </article>
            <article className="rounded-lg border border-zinc-800 p-6">
              <h3 className="mb-3 text-2xl font-semibold text-zinc-100">Cordyceps literature</h3>
              <p className="mb-4 text-zinc-400">
                Cordyceps militaris is discussed in endurance and fatigue papers.
                Those studies are external. This site does not publish a VO2 or
                fatigue percentage for a FungMind SKU.
              </p>
              <p className="text-sm text-teal-400">Watchlist note · not a FungMind trial</p>
            </article>
          </div>
        </section>

        <section className="mb-24 w-full max-w-4xl space-y-8 sm:mb-32">
          <h2 className="text-3xl font-bold text-zinc-100 sm:text-4xl">Why Now?</h2>
          <div className="space-y-4 text-zinc-400">
            <p>
              Better extraction, cheaper sequencing, and clearer marker assays make
              fungal nutrition easier to specify than a decade ago. That is a
              research opening, not a market-share claim.
            </p>
            <p>
              FungMind is building the product tracks and the later materials lane
              in public so the science story stays attached to the actual stage of
              the work.
            </p>
          </div>
        </section>

        <section className="mb-24 w-full max-w-4xl space-y-8 sm:mb-32">
          <h2 className="text-3xl font-bold text-zinc-100 sm:text-4xl">Founder Dashboard</h2>
          <p className="text-sm text-zinc-500">
            Concept preview of what a member workspace could show. Figures below are
            labels for empty states, not live sales, NPS, or shipment data.
          </p>
          <div className="rounded-lg border border-zinc-800 p-6">
            <h3 className="mb-4 text-xl font-semibold text-zinc-100">Access you would see later</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                { k: "Founder status", v: "Waitlist", d: "Join from the form above" },
                { k: "Priority access", v: "Not assigned", d: "Tiers ship when batches exist" },
                { k: "Next shipment", v: "None scheduled", d: "No tracking number to show" },
                { k: "Product insights", v: "Tracks only", d: "Open /products for the catalog" },
              ].map((cell) => (
                <div key={cell.k} className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                  <div className="text-sm text-zinc-400">{cell.k}</div>
                  <div className="mt-1 font-medium text-teal-400">{cell.v}</div>
                  <div className="mt-2 text-xs text-zinc-500">{cell.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full max-w-4xl space-y-8 text-center">
          <h2 className="text-3xl font-bold text-zinc-100 sm:text-4xl">Be Among the First</h2>
          <p className="text-lg text-zinc-400 sm:text-xl">
            Request access if you want research updates. We do not publish remaining
            seats, countdown clocks, or conversion rates.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <WaitlistForm />
            <p className="text-xs text-zinc-600">
              The form posts to the waitlist route. If that route is offline, you will see an error instead of a fake confirmation.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
