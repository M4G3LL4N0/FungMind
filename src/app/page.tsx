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
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center justify-center gap-2">
                <div className="text-sm text-zinc-500">
                  Limited to 100 founding members - <span className="countdown text-teal-400">23:59:59</span> remaining
                </div>
                <div className="text-xs px-2 py-0.5 bg-teal-900/50 text-teal-400 rounded-full">
                  Early Access
                </div>
              </div>
              <div className="w-full max-w-md">
                <div className="flex justify-between text-xs text-zinc-500 mb-1">
                  <span>0</span>
                  <span>50</span>
                  <span>100</span>
                </div>
                <div className="bg-zinc-800 rounded-full h-2 overflow-hidden">
                  <div 
                    className="progress-bar h-full" 
                    style={{ width: `${Math.min(100, (75 / 100) * 100)}%` }}
                  ></div>
                </div>
                <div className="text-xs text-zinc-500 mt-1 text-right">
                  <span className="text-teal-400">75</span>/100 spots claimed
                </div>
              </div>
            </div>
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
        <section className="w-full max-w-6xl space-y-12 mb-32">
          <div className="flex items-end justify-between">
            <h2 className="text-4xl font-bold text-zinc-100">Featured Products</h2>
            <div className="text-sm text-zinc-500 flex items-center gap-2">
              <span>Latest Batch:</span>
              <span className="text-teal-400">FM-2024-04</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 border border-zinc-800 rounded-lg hover:border-teal-500 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] relative opacity-100 hover:opacity-100 product-card">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-black px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                <span>⭐</span> Featured
                <span className="ml-1">v2.1</span>
              </div>
              <div className="absolute top-4 left-4 bg-red-500/90 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                <span>⏳</span> Waitlist Only
              </div>
              <div className="absolute bottom-4 right-4 text-xs text-zinc-500">
                Batch #FM-2024-03
              </div>
              <div className="h-40 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-md mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                <span className="text-5xl">🍄</span>
                <div className="absolute bottom-2 left-2 text-xs bg-black/50 px-2 py-1 rounded text-zinc-300">
                  Neurotropic Formula v2.1
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-zinc-100 mb-2">NeuroMycelium</h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-teal-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-sm text-zinc-500">(4.8/5)</span>
                <span className="text-xs bg-zinc-800 text-teal-400 px-2 py-0.5 rounded-full">
                  42 reviews
                </span>
              </div>
              <p className="text-zinc-400 mb-4">
                Advanced Lion's Mane extract enhanced with nootropics for improved memory, focus, and neuroplasticity. Clinically studied for cognitive enhancement.
              </p>
              <div className="product-details">
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-zinc-300 mb-2">Key Benefits:</h4>
                  <ul className="text-xs text-zinc-400 space-y-1">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                      <span>+27% memory recall in clinical trials</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                      <span>Supports neurogenesis and BDNF production</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                      <span>Delayed release formula for 12-hour efficacy</span>
                    </li>
                  </ul>
                </div>
                <div className="text-xs text-zinc-500">
                  <p>Batch tested for purity and potency. Vegan, non-GMO, gluten-free.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-zinc-800 text-teal-400 text-xs rounded-full">Memory</span>
                <span className="px-2 py-1 bg-zinc-800 text-teal-400 text-xs rounded-full">Focus</span>
                <span className="px-2 py-1 bg-zinc-800 text-teal-400 text-xs rounded-full">Neuroprotection</span>
              </div>
              <div className="flex items-baseline gap-2">
                <div className="text-xl font-semibold text-teal-400">
                  $49.99 <span className="text-sm text-zinc-500">/ month</span>
                </div>
                <div className="text-xs text-zinc-500 line-through">$59.99</div>
                <div className="ml-2 text-xs bg-teal-900/30 text-teal-400 px-2 py-0.5 rounded-full">
                  Save 17%
                </div>
              </div>
              <div className="mt-2 text-xs text-teal-400 flex items-center gap-1">
                <span>⏳</span>
                <span>Founder's Price - Limited Time</span>
              </div>
            </div>

            <div className="p-8 border border-zinc-800 rounded-lg opacity-50 cursor-not-allowed relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="shimmer w-full h-full"></div>
              </div>
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

            <div className="p-8 border border-zinc-800 rounded-lg opacity-50 cursor-not-allowed">
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
          <div className="text-center pt-8 space-y-4">
            <a href="/products" className="inline-flex items-center justify-center px-6 py-3 border border-teal-500 text-teal-500 rounded-lg hover:bg-teal-500 hover:text-black transition-colors duration-300 font-semibold">
              Explore All Products →
            </a>
            <p className="text-sm text-zinc-500">Discover our full range of fungal-powered solutions</p>
          </div>
        </section>

        {/* Featured Research */}
        <section className="w-full max-w-4xl space-y-12 mb-32">
          <h2 className="text-4xl font-bold text-zinc-100">Featured Research</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-zinc-800 rounded-lg hover:border-teal-500 transition-all duration-300 group">
              <h3 className="text-2xl font-semibold text-zinc-100 mb-3 group-hover:text-teal-400 transition-colors">Lion's Mane & Neurogenesis</h3>
              <p className="text-zinc-400 mb-4">
                Recent study in the Journal of Neurochemistry shows Hericium erinaceus (Lion's Mane) stimulates NGF production and promotes neurogenesis in the hippocampus.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-teal-400">
                  <span className="mr-2">PMID: 32812264</span>
                  <span>2021 Meta-Analysis</span>
                </div>
                <button className="text-xs px-3 py-1 border border-teal-500 rounded-full hover:bg-teal-500 hover:text-black transition-colors">
                  Read Study
                </button>
              </div>
            </div>
            <div className="p-6 border border-zinc-800 rounded-lg hover:border-teal-500 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-zinc-100 mb-3">Cordyceps & VO2 Max</h3>
              <p className="text-zinc-400 mb-4">
                Clinical trial demonstrates Cordyceps militaris supplementation increases VO2 max by 11% and reduces fatigue in endurance athletes.
              </p>
              <div className="flex items-center text-sm text-teal-400">
                <span className="mr-2">PMID: 33533395</span>
                <span>2022 RCT</span>
              </div>
            </div>
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
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-center gap-2">
              <div className="h-2 w-2 rounded-full bg-teal-500 animate-pulse"></div>
              <p className="text-sm text-zinc-500">
                <span className="font-medium text-teal-400">42</span> spots remaining of 100
              </p>
            </div>
            <WaitlistForm />
            <p className="text-xs text-zinc-600">
              By joining, you'll get early access and exclusive founder pricing
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
