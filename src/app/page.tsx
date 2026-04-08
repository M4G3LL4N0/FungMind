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
            <div className="p-8 border border-zinc-800 rounded-lg hover:border-teal-500 transition-all duration-300 group">
              <div className="h-40 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-md mb-4 flex items-center justify-center">
                <span className="text-5xl">🍄</span>
              </div>
              <h3 className="text-2xl font-semibold text-zinc-100 mb-2">NeuroMycelium</h3>
              <p className="text-zinc-400 mb-4">
                Lion's Mane extract optimized for neurogenesis and cognitive function
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-zinc-800 text-teal-400 text-xs rounded-full">Memory</span>
                <span className="px-2 py-1 bg-zinc-800 text-teal-400 text-xs rounded-full">Focus</span>
                <span className="px-2 py-1 bg-zinc-800 text-teal-400 text-xs rounded-full">Neuroprotection</span>
              </div>
            </div>

            <div className="p-8 border border-zinc-800 rounded-lg hover:border-teal-500 transition-all duration-300 group">
              <div className="h-40 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-md mb-4 flex items-center justify-center">
                <span className="text-5xl">🌿</span>
              </div>
              <h3 className="text-2xl font-semibold text-zinc-100 mb-2">AdaptoFungi</h3>
              <p className="text-zinc-400 mb-4">
                Cordyceps and Reishi blend for stress resilience and endurance
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-zinc-800 text-teal-400 text-xs rounded-full">Energy</span>
                <span className="px-2 py-1 bg-zinc-800 text-teal-400 text-xs rounded-full">Recovery</span>
                <span className="px-2 py-1 bg-zinc-800 text-teal-400 text-xs rounded-full">Adaptogen</span>
              </div>
            </div>

            <div className="p-8 border border-zinc-800 rounded-lg hover:border-teal-500 transition-all duration-300 group">
              <div className="h-40 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-md mb-4 flex items-center justify-center">
                <span className="text-5xl">🧠</span>
              </div>
              <h3 className="text-2xl font-semibold text-zinc-100 mb-2">MycoGut</h3>
              <p className="text-zinc-400 mb-4">
                Proprietary fungal microbiome blend for gut-brain axis optimization
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-zinc-800 text-teal-400 text-xs rounded-full">Digestion</span>
                <span className="px-2 py-1 bg-zinc-800 text-teal-400 text-xs rounded-full">Immunity</span>
                <span className="px-2 py-1 bg-zinc-800 text-teal-400 text-xs rounded-full">Mood</span>
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
