
export default function Investors() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-black">
      <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between py-32 px-8">
        <section className="w-full max-w-4xl text-center space-y-8 mb-32">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
            Investing in the Fungal Future
          </h1>
          <p className="text-xl text-zinc-400">
            Building the foundational platform for mycological innovation
          </p>
        </section>

        <section className="w-full max-w-4xl space-y-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-100">The Problem</h2>
            <p className="text-zinc-400">
              Modern populations face epidemic levels of cognitive decline, metabolic dysfunction, and neurodegenerative conditions compounded by environmental stressors and nutritional deficiencies.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-100">Our Solution</h2>
            <p className="text-zinc-400">
              FungMind develops precision fungal formulations that target multiple biological systems simultaneously, offering a scalable platform for human optimization and therapeutic applications.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-100">Market Opportunity</h2>
            <p className="text-zinc-400">
              $1.5T addressable market spanning nutraceuticals ($400B), biotechnology ($1T), and biomaterials ($100B), with 25% CAGR in functional mushrooms and fungal therapeutics.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-100">Technology Moat</h2>
            <p className="text-zinc-400">
              Proprietary fungal strains, extraction methodologies, and clinical datasets create defensible IP while our brand establishes premium positioning in the emerging fungal biotech space.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-100">Long-Term Vision</h2>
            <p className="text-zinc-400">
              Transitioning from direct-to-consumer formulations to platform technology licensing and therapeutic development partnerships with biopharma leaders.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
