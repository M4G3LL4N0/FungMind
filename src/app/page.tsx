import { WaitlistForm } from "@/components/WaitlistForm";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-black">
      <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between py-32 px-8">
        {/* Hero Section */}
        <section className="w-full max-w-4xl text-center space-y-8 mb-32">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
            The Fungal Revolution Starts Here
          </h1>
          <p className="text-xl text-zinc-400">
            Join the founding circle for exclusive first access to our groundbreaking fungal innovations.
          </p>
          <div className="space-y-4">
            <p className="text-sm text-zinc-500">Limited to 100 founding members</p>
            <WaitlistForm />
          </div>
        </section>

        {/* Platform Thesis */}
        <section className="w-full max-w-4xl space-y-12 mb-32">
          <h2 className="text-4xl font-bold text-zinc-100">Our Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-zinc-100">Bioengineering</h3>
              <p className="text-zinc-400">
                Advanced fungal strain development for targeted therapeutic applications
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-zinc-100">AI-Driven Discovery</h3>
              <p className="text-zinc-400">
                Machine learning models accelerating fungal compound identification
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-zinc-100">Sustainable Production</h3>
              <p className="text-zinc-400">
                Closed-loop systems for eco-friendly fungal cultivation
              </p>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="w-full max-w-4xl space-y-12 mb-32">
          <h2 className="text-4xl font-bold text-zinc-100">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-zinc-800 rounded-lg hover:border-teal-500 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] relative">
              <div className="absolute top-4 right-4 bg-teal-500 text-black px-3 py-1 rounded-full text-xs font-medium">
                Featured
              </div>
              <div className="h-40 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-md mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-5xl">🍄</span>
              </div>
              <h3 className="text-2xl font-semibold text-zinc-100 mb-2">NeuroMycelium</h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-teal-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-sm text-zinc-500">(4.8/5)</span>
              </div>
              <p className="text-zinc-400 mb-4">
                Advanced Lion's Mane extract enhanced with nootropics for improved memory, focus, and neuroplasticity. Clinically studied for cognitive enhancement.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-zinc-800 text-teal-400 text-xs rounded-full">Memory</span>
                <span className="px-2 py-1 bg-zinc-800 text-teal-400 text-xs rounded-full">Focus</span>
                <span className="px-2 py-1 bg-zinc-800 text-teal-400 text-xs rounded-full">Neuroprotection</span>
              </div>
              <div className="text-xl font-semibold text-teal-400">
                $49.99 <span className="text-sm text-zinc-500">/ month</span>
              </div>
            </div>

            <div className="p-8 border border-zinc-800 rounded-lg hover:border-teal-500 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
              <div className="h-40 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-md mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-5xl">🌿</span>
              </div>
              <h3 className="text-2xl font-semibold text-zinc-100 mb-2">AdaptoFungi</h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-teal-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-sm text-zinc-500">(4.7/5)</span>
              </div>
              <p className="text-zinc-400 mb-4">
                Potent Cordyceps and Reishi formulation designed to boost energy, reduce fatigue, and enhance physical performance. Ideal for athletes and high-performers.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-zinc-800 text-teal-400 text-xs rounded-full">Energy</span>
                <span className="px-2 py-1 bg-zinc-800 text-teal-400 text-xs rounded-full">Recovery</span>
                <span className="px-2 py-1 bg-zinc-800 text-teal-400 text-xs rounded-full">Adaptogen</span>
              </div>
              <div className="text-xl font-semibold text-teal-400">
                $39.99 <span className="text-sm text-zinc-500">/ month</span>
              </div>
            </div>

            <div className="p-8 border border-zinc-800 rounded-lg hover:border-teal-500 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
              <div className="h-40 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-md mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-5xl">🧠</span>
              </div>
              <h3 className="text-2xl font-semibold text-zinc-100 mb-2">MycoGut</h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-teal-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-sm text-zinc-500">(4.9/5)</span>
              </div>
              <p className="text-zinc-400 mb-4">
                Advanced fungal microbiome formula supporting gut health, immune function, and mental well-being through the gut-brain axis. Backed by clinical research.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-zinc-800 text-teal-400 text-xs rounded-full">Digestion</span>
                <span className="px-2 py-1 bg-zinc-800 text-teal-400 text-xs rounded-full">Immunity</span>
                <span className="px-2 py-1 bg-zinc-800 text-teal-400 text-xs rounded-full">Mood</span>
              </div>
              <div className="text-xl font-semibold text-teal-400">
                $59.99 <span className="text-sm text-zinc-500">/ month</span>
              </div>
            </div>
          </div>
          <div className="text-center pt-8">
            <a href="/products" className="inline-flex items-center justify-center px-6 py-3 border border-teal-500 text-teal-500 rounded-lg hover:bg-teal-500 hover:text-black transition-colors duration-300">
              Explore All Products
            </a>
          </div>
        </section>

        {/* Why Now */}
        <section className="w-full max-w-4xl space-y-12 mb-32">
          <h2 className="text-4xl font-bold text-zinc-100">Why Now?</h2>
          <div className="space-y-4">
            <p className="text-zinc-400">
              With advancements in biotechnology and AI, we're at an inflection point where fungal-based solutions can address critical challenges in healthcare, sustainability, and human performance.
            </p>
            <p className="text-zinc-400">
              FungMind is positioned at the forefront of this revolution, leveraging cutting-edge science to unlock fungi's full potential.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full max-w-4xl text-center space-y-8">
          <h2 className="text-4xl font-bold text-zinc-100">
            Be Among the First
          </h2>
          <p className="text-xl text-zinc-400">
            Secure your spot as a founding member before we open to the public.
          </p>
          <div className="space-y-4">
            <p className="text-sm text-zinc-500">Only 100 spots available</p>
            <WaitlistForm />
          </div>
        </section>
      </main>
    </div>
  );
}
