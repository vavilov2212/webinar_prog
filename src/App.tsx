/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Science, 
  Visibility, 
  Layers, 
  AutoAwesome, 
  Terminal, 
  DataObject 
} from "@mui/icons-material"; // Wait, I should use lucide-react as per guidelines
import { 
  Beaker, 
  Eye, 
  Layers as LayersIcon, 
  Sparkles, 
  Terminal as TerminalIcon, 
  Code2,
  ChevronRight
} from "lucide-react";

const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiTVrA8Xdvfg5JAEkYlOgOyGneIrs-dH1ClAzMtMbzUwsBpBeS8RFa1pfXatuzYcNo3Kh1yVtdbduUuk0yX_4q1nGBdOkAFQHYIDtZZmrEDsyTl9fcA0chtxHmh1SYf4uVfOeeHqtdLNKoXDFf7Il8-S0_mooLXav4cWqlp8B5ZvOLoAufy2WkRtcVpt8Bh0Tem8xh0tMns6W7ndLSdUnrIXHxjrSbep9sEWWtSpsBiSZl6_ugubL9hwSlObH2z5X-ZPvJeuJ5ovg",
  specimen1: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKux8HsQSamo8p_ZZgH3PneVDSvxWWnpPvDw9vYXEo5Kg3V9IGPXYsqVPEcLvKy0AvMz3c2KkYjrXMmmIQ5ny0hza1Fv27klq2xOdk-bIh5TFAcylhCE7Opo1iW9BJzorS41tfegUwPWJsZu9dqPSE-bQmqoc_sREmYlT16Retc2cZXy_l1F928sgjw-hPii8G6akhAjYxwQo2UrCsrIFKrKIrC_XRi0Ys7mYKBdHEJF8gwNRlnA0It_66N_GAMsi4h4Cwyk-FKlc",
  specimen2: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyUCztcXOJj56_3S8fUbKyFb7vpBvr8h7lXw-YfLpjWSHVVyESBtkMBHQvrU8_3CBIB7_OvG152tgFjo5EdaPI1ciZVkJIPjEC0xI1dk67VqvBtjo1OXmXhd8-iGlunsoE4vJqcN2bX0jtHQKLlFX0G1HzEuZ-2yWH2zenZKS4GE6H39Afd_f6cht_Wwgf-E_vcEbw2sMXhBqOiaGlyDFy4DRosd5MVZSye56-gIJ7eTcNEx8GKAGXJDonD8GVE3CSWL4z_7mwh6M",
  specimen3: "https://lh3.googleusercontent.com/aida-public/AB6AXuDI5arTHEyXSe3_ASGdHgiP0INYeJSZanr3DGqwuJdtzOeJ1Oki6FjJE8Pb_hGLWQ1nO58Rn4L_5U3W2UPMtQdFZ3Cd_Oc09Ak3CdmQstM18U2oWPTLik5IiVJpl0sQ30EmO9HdCa_i3LwYZ7G7IJC9-ZH7xq6XCEsSLKFOMq0IJ7--mwor8BYNZMm8slgxDru7ZYP4zRruYBR5rigVdIfX4Khd_8AbuHYUkj-uffnDPEzhS3dLYKm8WlfhufKz69NwYqrvKyNWFwM",
  specimen4: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzsumUA4MkX0lgQq14zfDZEQdazwqgNVhsai_h39G76syowBvPB2-6OsH031tI93c6b2Mf27zj9ng5PGa3l5YoDYD6UTOlyIOvodAM3CMoRGwy-JLrBnrSO3NrmVXKFfH_YunOkYsVsidqeyzNqQUxyqBoNpa4LIrZaXEziUtUpAO3dfiACgK8ZLI7mOCLW2EVlQy4xj1i0wlEMDtju0drMrHiQncGQCX1dMUgdWFZAttr820N9yjnp8euOB4mzc-ykUJdGiOJQNc"
};

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 w-full z-50 bg-surface-container/60 backdrop-blur-xl border-b border-primary/15 shadow-[0_0_20px_rgba(157,123,255,0.08)]">
        <nav className="flex justify-between items-center px-6 md:px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="text-xl md:text-2xl font-black text-on-surface tracking-tighter font-headline">The Lab.js</div>
          <div className="hidden md:flex items-center gap-8">
            <a className="font-headline tracking-tight text-sm uppercase text-primary border-b-2 border-primary pb-1" href="#">The Syllabus</a>
            <a className="font-headline tracking-tight text-sm uppercase text-on-surface/70 hover:text-on-surface nav-link-effect" href="#">Lab Notes</a>
            <a className="font-headline tracking-tight text-sm uppercase text-on-surface/70 hover:text-on-surface nav-link-effect" href="#">Specimens</a>
            <a className="font-headline tracking-tight text-sm uppercase text-on-surface/70 hover:text-on-surface nav-link-effect" href="#">Join the Cohort</a>
          </div>
          <button className="bg-primary-container text-on-primary-container px-4 md:px-6 py-2 rounded-lg font-headline font-bold text-xs md:text-sm uppercase tracking-wider shadow-[0_0_15px_rgba(183,159,255,0.3)] active:scale-95 transition-all duration-200 hover:brightness-110">
            Start Experiment
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 md:pt-32 pb-32 md:pb-48 px-6 md:px-8 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16"
          >
            <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-primary/20">
                <Beaker className="text-primary w-4 h-4" />
                <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-primary">Cohort Alpha v2.0</span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-headline font-black tracking-tighter leading-[0.9] text-on-surface glow-text">
                Code Your First <br/><span className="text-primary-dim">Masterpiece.</span>
              </h1>
              <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mx-auto md:mx-0 font-light leading-relaxed">
                Step into the digital sanctum where logic meets alchemy. Transmute raw syntax into living, breathing web experiences through our high-intensity JavaScript immersion.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                <button className="w-full sm:w-auto px-8 py-4 bg-primary-container text-on-primary-container rounded-xl font-headline font-bold uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(183,159,255,0.4)] hover:shadow-[0_0_50px_rgba(183,159,255,0.5)] transition-all glow-pulse active:scale-95">
                  Start Experiment
                </button>
                <button className="w-full sm:w-auto px-8 py-4 border border-primary/30 text-primary rounded-xl font-headline font-bold uppercase tracking-widest text-sm hover:bg-primary/5 transition-all active:scale-95">
                  View Syllabus
                </button>
              </div>
            </div>
            <div className="flex-1 relative w-full max-w-md md:max-w-none">
              <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full"></div>
              <motion.div 
                initial={{ rotate: 5, scale: 0.9, opacity: 0 }}
                whileInView={{ rotate: 3, scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative glass-card p-3 md:p-4 rounded-2xl shadow-2xl"
              >
                <img 
                  alt="The Lab Interface" 
                  className="rounded-xl w-full aspect-square object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
                  src={IMAGES.hero}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 glass-card p-4 md:p-6 rounded-xl border-primary/20">
                  <div className="font-mono text-[8px] md:text-[10px] text-primary uppercase mb-1 md:mb-2">Process Node</div>
                  <div className="text-xl md:text-2xl font-headline font-bold text-on-surface">Alchemy v4.2</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Foundations Section */}
        <section className="py-24 md:py-32 px-6 md:px-8 bg-surface-container-low/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6 text-center lg:text-left sm:col-span-2 lg:col-span-1 mb-8 lg:mb-0"
              >
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface">The Alchemist's<br/>Foundation</h2>
                <p className="text-on-surface-variant font-light max-w-2xl mx-auto lg:mx-0">We don't teach frameworks. We teach the elemental forces that govern the digital realm.</p>
                <div className="h-1 w-24 bg-primary/30 mx-auto lg:mx-0"></div>
              </motion.div>

              {/* Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 md:p-10 rounded-2xl space-y-6 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  <Eye className="w-12 md:w-16 h-12 md:h-16 text-primary" />
                </div>
                <div className="text-primary font-mono text-xs md:text-sm tracking-widest uppercase">01. Logic Lens</div>
                <h3 className="text-xl md:text-2xl font-headline font-bold">Seeing the Invisible</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Develop the cognitive ability to decompose complex problems into atomic, logical operations before a single line is written.</p>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-8 md:p-10 rounded-2xl space-y-6 relative group overflow-hidden lg:mt-12"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  <LayersIcon className="w-12 md:w-16 h-12 md:h-16 text-primary" />
                </div>
                <div className="text-primary font-mono text-xs md:text-sm tracking-widest uppercase">02. Syntax as Soil</div>
                <h3 className="text-xl md:text-2xl font-headline font-bold">Deep Rooted Code</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Master the primitive architecture of JavaScript. Learn how memory, execution contexts, and closures create the fertile ground for apps.</p>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="glass-card p-8 md:p-10 rounded-2xl space-y-6 relative group overflow-hidden lg:-mt-12 sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none lg:mx-0"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  <Sparkles className="w-12 md:w-16 h-12 md:h-16 text-primary" />
                </div>
                <div className="text-primary font-mono text-xs md:text-sm tracking-widest uppercase">03. Digital Bloom</div>
                <h3 className="text-xl md:text-2xl font-headline font-bold">Organic Emergence</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Orchestrate the final synthesis. Watch your logic blossom into high-fidelity user interfaces that feel alive and responsive.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Specimen Gallery */}
        <section className="py-24 md:py-48 px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-primary font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4">// Laboratory Results</div>
                <h2 className="text-4xl md:text-5xl font-headline font-black text-on-surface tracking-tighter">Specimen Gallery</h2>
              </motion.div>
              <div className="text-on-surface-variant font-mono text-[10px] md:text-xs uppercase tracking-widest max-w-xs md:text-right">
                Live observations from previous experiments in digital architecture.
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {[
                { img: IMAGES.specimen1, rotate: "-rotate-2", subject: "Fluid Dynamics v1", name: "Obsidian_Mist.js" },
                { img: IMAGES.specimen2, rotate: "rotate-3", subject: "Neural Topology", name: "Synapse_Tree.css", mt: "lg:mt-20" },
                { img: IMAGES.specimen3, rotate: "-rotate-1", subject: "Reactive Core", name: "Plasma_Engine.io" },
                { img: IMAGES.specimen4, rotate: "rotate-6", subject: "Logic Gate Beta", name: "Alchemist_Shell.exe", mt: "lg:mt-12" }
              ].map((specimen, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`polaroid-frame transform ${specimen.rotate} hover:rotate-0 hover:-translate-y-4 transition-all duration-500 animate-float ${specimen.mt || ""}`}
                >
                  <div className="aspect-[4/5] overflow-hidden bg-surface-container-low mb-4 border border-outline-variant/30">
                    <img 
                      alt={specimen.name} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                      src={specimen.img}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="font-mono text-[10px] text-outline tracking-tighter uppercase">Subject: {specimen.subject}</div>
                  <div className="text-on-surface text-sm font-bold mt-1">{specimen.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enrollment Form */}
        <section className="py-24 md:py-32 px-6 md:px-8 mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative glass-card p-6 sm:p-12 rounded-3xl border-primary/30 shadow-[0_0_100px_rgba(157,123,255,0.1)]">
              <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 px-4 md:px-6 py-1 md:py-2 bg-primary text-on-primary-container font-mono text-[10px] md:text-sm font-bold rounded-lg shadow-lg rotate-12">
                LIMITED SLOTS
              </div>
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-black text-on-surface uppercase tracking-widest mb-4 italic">The Lab Pass</h2>
                <div className="font-mono text-[10px] md:text-xs text-primary-dim uppercase tracking-widest border-y border-primary/20 py-2 inline-block">
                  Application for Alchemy Cohort Alpha
                </div>
              </div>
              <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase text-outline ml-1 tracking-widest">Alchemist Name</label>
                    <input 
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-surface font-mono placeholder:text-outline-variant/50 transition-all text-sm md:text-base" 
                      placeholder="EX: ARIC_VOLLMER" 
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase text-outline ml-1 tracking-widest">Signal Channel (Email)</label>
                    <input 
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-surface font-mono placeholder:text-outline-variant/50 transition-all text-sm md:text-base" 
                      placeholder="CODE@THELAB.JS" 
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase text-outline ml-1 tracking-widest">Experience Index</label>
                  <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-hide">
                    {["Novice", "Initiate", "Artisan", "Expert"].map((level) => (
                      <button 
                        key={level}
                        className={`flex-shrink-0 px-4 py-2 border text-[10px] md:text-xs font-mono uppercase transition-all ${level === "Initiate" ? "bg-primary-container/20 border-primary text-primary" : "bg-surface-container-high border-outline-variant text-on-surface-variant hover:border-primary/50"}`} 
                        type="button"
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase text-outline ml-1 tracking-widest">Manifesto / Intent</label>
                  <textarea 
                    className="w-full bg-transparent border border-outline-variant focus:border-primary focus:ring-0 text-on-surface font-mono placeholder:text-outline-variant/50 transition-all p-4 text-sm md:text-base" 
                    placeholder="DESCRIBE YOUR DIGITAL AMBITIONS..." 
                    rows={3}
                  ></textarea>
                </div>
                <div className="pt-4 md:pt-8 text-center">
                  <button className="w-full sm:w-auto group relative inline-flex items-center justify-center px-12 py-6 overflow-hidden font-headline font-black text-on-primary-container uppercase tracking-widest transition-all bg-primary-container rounded-xl shadow-[0_0_40px_rgba(183,159,255,0.3)] hover:scale-105 active:scale-95">
                    <span className="relative">Secure Passage</span>
                  </button>
                  <p className="mt-4 font-mono text-[10px] text-outline italic">By submitting, you agree to the laws of digital alchemy.</p>
                </div>
              </form>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface w-full py-12 px-8 border-t border-surface-container-high">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-lg font-bold text-on-surface font-headline">The Lab.js</div>
            <div className="font-headline text-xs tracking-widest uppercase text-on-surface/40">© 2024 The Lab.js. Alchemy in Code.</div>
          </div>
          <div className="flex gap-8">
            {["Syllabus", "Privacy", "Terms", "Changelog"].map((link) => (
              <a key={link} className="font-headline text-xs tracking-widest uppercase text-on-surface/40 hover:text-primary transition-colors nav-link-effect" href="#">{link}</a>
            ))}
          </div>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface/40 hover:text-primary hover:bg-surface-container-high transition-all" href="#">
              <TerminalIcon className="w-5 h-5" />
            </a>
            <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface/40 hover:text-primary hover:bg-surface-container-high transition-all" href="#">
              <Code2 className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
