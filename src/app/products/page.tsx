
import Link from 'next/link';

export default function Products() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-black">
      <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between py-32 px-8">
        <section className="w-full max-w-4xl text-center space-y-8 mb-32">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
            Fungi-Powered Performance Systems
          </h1>
          <p className="text-xl text-zinc-400">
            Engineered formulations leveraging fungal adaptogens for targeted performance enhancement
          </p>
        </section>

        <section className="w-full max-w-4xl space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Cognitive Performance",
                subtitle: "Lion's Mane neurotrophic stacks",
                description: "Targeted nootropic formulations supporting neurogenesis and cognitive function"
              },
              {
                title: "Energy + Endurance",
                subtitle: "Cordyceps militaris extracts",
                description: "Bioavailable ATP optimizers for sustained physical performance"
              },
              {
                title: "Recovery + Stress",
                subtitle: "Reishi & adaptogenic blends",
                description: "HPA axis modulation and oxidative stress reduction complexes"
              },
              {
                title: "Immunity + Longevity",
                subtitle: "Beta-glucan rich formulations",
                description: "Immune-priming fungal polysaccharides with telomeric support"
              },
              {
                title: "Future Material Systems",
                subtitle: "Mycelium biopolymers",
                description: "Structural and therapeutic biomaterials from fungal networks"
              }
            ].map((product, index) => (
              <Link
                key={index}
                href={`/products/${product.title.toLowerCase().replace(/ /g, '-').replace(/\+/g, '-')}`}
                className="p-8 border border-zinc-800 rounded-lg hover:border-teal-500 transition-colors"
              >
                <h3 className="text-2xl font-semibold text-zinc-100 mb-2">{product.title}</h3>
                <p className="text-teal-400 mb-4">{product.subtitle}</p>
                <p className="text-zinc-400">{product.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
