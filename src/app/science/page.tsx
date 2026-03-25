import Link from "next/link";

export default function Science() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-black">
      <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between py-32 px-8">
        <section className="w-full max-w-4xl text-center space-y-8 mb-32">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
            The Science of Fungal Intelligence
          </h1>
          <p className="text-xl text-zinc-400">
            Harnessing mycological biochemistry for human optimization
          </p>
        </section>

        <section className="w-full max-w-4xl space-y-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-100">Why Fungi?</h2>
            <p className="text-zinc-400">
              Fungal kingdoms produce unique bioactive compounds - terpenoids, beta-glucans, and ergothioneine - that exhibit profound adaptogenic, neuroprotective, and immunomodulatory properties unmatched by other biological sources.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-100">Extraction Methodology</h2>
            <p className="text-zinc-400">
              Our dual-extraction process isolates both water-soluble polysaccharides and alcohol-soluble triterpenes, preserving the full spectrum of bioactive compounds while optimizing bioavailability through nanoemulsion encapsulation.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-100">Systems Biology Approach</h2>
            <p className="text-zinc-400">
              Fungal compounds interact with multiple biological pathways simultaneously - modulating the gut-brain axis, mitochondrial function, and innate immune responses to create systemic resilience.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-100">Clinical Validation</h2>
            <p className="text-zinc-400">
              Current research initiatives include double-blind studies on cognitive enhancement protocols and proprietary fungal strain development for targeted therapeutic applications.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
