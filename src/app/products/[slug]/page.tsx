import Link from "next/link";

const products = [
  {
    slug: "cognitive-performance",
    title: "Cognitive Performance",
    subtitle: "Lion's Mane neurotrophic stacks",
    description: "Targeted nootropic formulations supporting neurogenesis and cognitive function",
    heroText: "Unlock Your Cognitive Potential",
    positioning: "Our Cognitive Performance line leverages cutting-edge fungal adaptogens to optimize brain function, enhance memory, and support long-term neurological health.",
    benefits: [
      "Supports neurogenesis and synaptic plasticity",
      "Enhances focus and mental clarity",
      "Promotes long-term brain health",
      "Reduces cognitive fatigue",
      "Supports mood balance"
    ],
    formulations: [
      "NeuroGenesis Capsules",
      "Focus+ Liquid Extract",
      "MemoryStack Powder",
      "BrainWave Sublingual Strips"
    ],
    cta: {
      title: "Elevate Your Mind",
      text: "Join the cognitive revolution with our premium fungal formulations",
      link: "/waitlist"
    }
  },
  {
    slug: "energy-endurance",
    title: "Energy + Endurance",
    subtitle: "Cordyceps militaris extracts",
    description: "Bioavailable ATP optimizers for sustained physical performance",
    heroText: "Redefine Your Limits",
    positioning: "Our Energy & Endurance formulations harness the power of Cordyceps to optimize cellular energy production and enhance physical performance.",
    benefits: [
      "Boosts ATP production",
      "Enhances oxygen utilization",
      "Supports recovery",
      "Increases stamina",
      "Reduces exercise-induced fatigue"
    ],
    formulations: [
      "Energy+ Capsules",
      "EnduranceElixir Liquid",
      "PerformancePowder",
      "RecoveryBoost Gel"
    ],
    cta: {
      title: "Fuel Your Performance",
      text: "Experience sustained energy like never before",
      link: "/waitlist"
    }
  },
  {
    slug: "recovery-stress",
    title: "Recovery + Stress",
    subtitle: "Reishi & adaptogenic blends",
    description: "HPA axis modulation and oxidative stress reduction complexes",
    heroText: "Find Your Balance",
    positioning: "Our Recovery & Stress line combines powerful adaptogens to support your body's natural stress response and promote optimal recovery.",
    benefits: [
      "Modulates HPA axis function",
      "Reduces oxidative stress",
      "Supports adrenal health",
      "Promotes relaxation",
      "Enhances sleep quality"
    ],
    formulations: [
      "AdaptoZen Capsules",
      "StressShield Liquid",
      "RecoveryComplex Powder",
      "NightRest Capsules"
    ],
    cta: {
      title: "Restore Your Vitality",
      text: "Experience true balance with our premium formulations",
      link: "/waitlist"
    }
  },
  {
    slug: "immunity-longevity",
    title: "Immunity + Longevity",
    subtitle: "Beta-glucan rich formulations",
    description: "Immune-priming fungal polysaccharides with telomeric support",
    heroText: "Invest in Your Future",
    positioning: "Our Immunity & Longevity line utilizes powerful fungal polysaccharides to support immune function and promote cellular longevity.",
    benefits: [
      "Enhances immune response",
      "Supports cellular repair",
      "Promotes healthy aging",
      "Reduces inflammation",
      "Supports gut health"
    ],
    formulations: [
      "ImmuneShield Capsules",
      "LongevityElixir Liquid",
      "VitalityComplex Powder",
      "GutHealth Capsules"
    ],
    cta: {
      title: "Protect Your Future",
      text: "Start your longevity journey today",
      link: "/waitlist"
    }
  },
  {
    slug: "future-materials",
    title: "Future Material Systems",
    subtitle: "Mycelium biopolymers",
    description: "Structural and therapeutic biomaterials from fungal networks",
    heroText: "Shape Tomorrow's Materials",
    positioning: "Our Future Materials division is pioneering the development of sustainable, high-performance biomaterials derived from fungal networks.",
    benefits: [
      "100% biodegradable",
      "High strength-to-weight ratio",
      "Thermal insulation properties",
      "Natural antimicrobial properties",
      "Customizable material properties"
    ],
    formulations: [
      "MycoFoam Insulation",
      "MycoLeather",
      "MycoComposite Panels",
      "MycoFiber Textiles"
    ],
    cta: {
      title: "Join the Material Revolution",
      text: "Be part of the sustainable materials transformation",
      link: "/waitlist"
    }
  }
];

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);
  
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-black">
      <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between py-32 px-8">
        {/* Hero Section */}
        <section className="w-full max-w-4xl text-center space-y-8 mb-32">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
            {product.heroText}
          </h1>
          <p className="text-xl text-zinc-400">
            {product.subtitle}
          </p>
        </section>

        {/* Positioning */}
        <section className="w-full max-w-4xl space-y-8 mb-32">
          <h2 className="text-3xl font-bold text-zinc-100 mb-4">Positioning</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            {product.positioning}
          </p>
        </section>

        {/* Benefits */}
        <section className="w-full max-w-4xl space-y-8 mb-32">
          <h2 className="text-3xl font-bold text-zinc-100 mb-4">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.benefits.map((benefit, index) => (
              <div key={index} className="p-6 border border-zinc-800 rounded-lg">
                <p className="text-zinc-100">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Formulations */}
        <section className="w-full max-w-4xl space-y-8 mb-32">
          <h2 className="text-3xl font-bold text-zinc-100 mb-4">Formulations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.formulations.map((formulation, index) => (
              <div key={index} className="p-6 border border-zinc-800 rounded-lg">
                <p className="text-zinc-100">{formulation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="w-full max-w-4xl text-center space-y-8">
          <h2 className="text-3xl font-bold text-zinc-100">{product.cta.title}</h2>
          <p className="text-zinc-400 text-lg mb-8">{product.cta.text}</p>
          <Link
            href={product.cta.link}
            className="inline-block px-8 py-3 bg-gradient-to-r from-green-400 to-teal-500 text-black font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Join the Waitlist
          </Link>
        </section>
      </main>
    </div>
  );
}
