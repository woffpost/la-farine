"use client";

import { useState } from "react";
import Image from "next/image";
import { Clock, Phone, ArrowRight, Menu, X, ShoppingBag, Wheat } from "lucide-react";

const WHEAT = "#C8922A";
const IVORY = "#FBF6ED";
const DARK = "#2A1F0E";
const WARM = "#7C4E1E";

const products = [
  {
    category: "Breads",
    items: [
      { name: "Country Sourdough", desc: "72h fermentation, crispy crust, open crumb", price: "€6.50", badge: "Bestseller" },
      { name: "Rye & Caraway", desc: "Dense, earthy, perfect with butter", price: "€5.80", badge: null },
      { name: "Seeded Bâtard", desc: "Pumpkin, sunflower, sesame, flax", price: "€6.20", badge: null },
      { name: "Spelt Loaf", desc: "Ancient grain, mild nutty flavour", price: "€7.00", badge: "Organic" },
    ],
  },
  {
    category: "Viennoiserie",
    items: [
      { name: "Butter Croissant", desc: "48h laminated dough, pure AOP butter", price: "€3.80", badge: "Daily" },
      { name: "Pain au Chocolat", desc: "Double Valrhona 66% chocolate batons", price: "€4.20", badge: null },
      { name: "Morning Bun", desc: "Orange zest, cinnamon sugar, flaky layers", price: "€4.50", badge: null },
      { name: "Kouign-Amann", desc: "Caramelised, salty-sweet Breton classic", price: "€5.00", badge: "Weekend" },
    ],
  },
  {
    category: "Pastries",
    items: [
      { name: "Fruit Danish", desc: "Seasonal compote, cream cheese, almond cream", price: "€4.80", badge: null },
      { name: "Canelé Bordelais", desc: "Rum & vanilla, beeswax crust", price: "€3.50", badge: null },
      { name: "Lemon Tart", desc: "Tangy curd, Swiss meringue, shortcrust", price: "€5.20", badge: null },
      { name: "Opera Cake", desc: "Coffee & chocolate, 7 thin layers", price: "€6.50", badge: "Fri & Sat" },
    ],
  },
];

const process = [
  { n: "01", title: "Sourdough starter fed daily", desc: "Our starter, named \"Henri\", has been alive since 2017. We feed it twice daily." },
  { n: "02", title: "Slow cold fermentation", desc: "All doughs ferment 12–72 hours. No shortcuts. No additives. Just time." },
  { n: "03", title: "Baked from 4am", desc: "So that the first croissant hits the shelf still warm at opening time — 7:30 sharp." },
];

export default function BakeryDemo() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCat, setActiveCat] = useState(0);

  return (
    <div className="min-h-screen" style={{ backgroundColor: IVORY, fontFamily: "'Georgia', serif", color: DARK }}>

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b" style={{ backgroundColor: `${IVORY}F0`, borderColor: `${DARK}12`, backdropFilter: "blur(12px)" }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: WHEAT }}>
              <Wheat className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-base font-bold leading-tight" style={{ color: DARK }}>La Farine</div>
              <div className="font-sans text-xs tracking-widest uppercase" style={{ color: WARM }}>Artisan Bakery</div>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium" style={{ color: `${DARK}70` }}>
            {["Breads", "Custom Orders", "Our Craft", "Find Us"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="hover:opacity-100 transition-opacity" style={{ color: DARK }}>{l}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="#custom-orders" className="hidden md:inline-flex items-center gap-2 font-sans text-sm font-semibold h-10 px-5 rounded-xl text-white" style={{ backgroundColor: WHEAT }}>
              <ShoppingBag className="w-4 h-4" /> Order Custom
            </a>
            <button className="md:hidden p-2" onClick={() => setMobileOpen(true)} style={{ color: DARK }}>
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col" style={{ backgroundColor: DARK }}>
          <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
            <span className="font-bold text-white text-lg">La Farine</span>
            <button onClick={() => setMobileOpen(false)} className="text-white"><X className="w-5 h-5" /></button>
          </div>
          <div className="flex flex-col px-6 pt-6">
            {["Breads", "Custom Orders", "Our Craft", "Find Us"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} onClick={() => setMobileOpen(false)}
                className="text-2xl text-white py-4 border-b border-white/10 hover:opacity-70 transition-opacity">{l}</a>
            ))}
          </div>
          <div className="mt-auto px-6 pb-8">
            <a href="#custom-orders" className="flex items-center justify-center h-12 rounded-xl text-white font-sans font-semibold text-sm w-full" style={{ backgroundColor: WHEAT }}>
              Order Custom
            </a>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-24 pt-16">
        <Image
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&q=90"
          alt="La Farine Bakery"
          fill className="object-cover" priority
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${DARK}EE 0%, ${DARK}44 55%, transparent 100%)` }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <p className="font-sans text-xs tracking-[0.4em] uppercase mb-5" style={{ color: WHEAT }}>Vienna · Est. 2011</p>
            <h1 className="text-5xl lg:text-7xl text-white leading-[1.0] mb-6">
              Bread the way<br />
              <em style={{ color: WHEAT }}>it used to be.</em>
            </h1>
            <p className="font-sans text-white/70 text-base leading-relaxed mb-10 max-w-md">
              No additives. No shortcuts. Just flour, water, salt, and time — baked fresh every morning since 2011.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#breads" className="inline-flex items-center gap-2 font-sans font-semibold h-12 px-8 rounded-xl text-sm text-white" style={{ backgroundColor: WHEAT }}>
                Today's Bake <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#custom-orders" className="inline-flex items-center gap-2 font-sans font-semibold h-12 px-8 rounded-xl text-sm text-white border border-white/20 hover:bg-white/10 transition-colors">
                Custom Order
              </a>
            </div>
          </div>
        </div>
        {/* Opening hours */}
        <div className="absolute top-24 right-6 rounded-2xl px-5 py-4 hidden lg:block" style={{ backgroundColor: "rgba(255,255,255,0.12)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.15)" }}>
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-4 h-4 text-white/60" />
            <span className="font-sans text-xs font-bold tracking-widest uppercase text-white/60">Hours</span>
          </div>
          {[["Tue–Fri", "7:30 – 18:00"], ["Sat–Sun", "7:30 – 14:00"], ["Monday", "Closed"]].map(([day, hrs]) => (
            <div key={day} className="flex justify-between gap-8 font-sans text-sm text-white/80 py-0.5">
              <span className="text-white/50">{day}</span>
              <span className={hrs === "Closed" ? "text-white/30" : "font-semibold"}>{hrs}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="our-craft" className="py-20 px-6" style={{ backgroundColor: DARK }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((s, i) => (
              <div key={i} className="flex gap-5">
                <span className="text-3xl font-black font-mono shrink-0 w-10" style={{ color: `${WHEAT}50` }}>{s.n}</span>
                <div>
                  <h3 className="text-white font-bold mb-2 text-sm">{s.title}</h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="breads" className="py-24 px-6" style={{ backgroundColor: IVORY }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-[0.4em] uppercase mb-3" style={{ color: WHEAT }}>Fresh daily</p>
            <h2 className="text-4xl" style={{ color: DARK }}>What's in the oven</h2>
          </div>
          <div className="flex gap-2 mb-10 justify-center flex-wrap">
            {products.map((cat, i) => (
              <button key={i} onClick={() => setActiveCat(i)}
                className="font-sans text-sm font-semibold h-10 px-6 rounded-xl transition-colors"
                style={{
                  backgroundColor: activeCat === i ? DARK : "transparent",
                  color: activeCat === i ? "white" : `${DARK}60`,
                  border: `1px solid ${activeCat === i ? DARK : `${DARK}20`}`,
                }}>
                {cat.category}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {products[activeCat].items.map((item, i) => (
              <div key={i} className="rounded-2xl p-5 flex flex-col" style={{ backgroundColor: "white", border: `1px solid ${DARK}08` }}>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="font-bold text-base" style={{ color: DARK }}>{item.name}</div>
                  <div className="flex items-center gap-2 shrink-0">
                    {item.badge && (
                      <span className="font-sans text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: WHEAT }}>
                        {item.badge}
                      </span>
                    )}
                    <span className="font-sans font-bold text-sm" style={{ color: WHEAT }}>{item.price}</span>
                  </div>
                </div>
                <p className="font-sans text-sm" style={{ color: `${DARK}60` }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders */}
      <section id="custom-orders" className="py-24 px-6" style={{ backgroundColor: WHEAT }}>
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-sans text-xs tracking-[0.4em] uppercase mb-4 text-white/70">For your event</p>
            <h2 className="text-4xl text-white mb-5 leading-tight">
              Custom cakes &<br />
              <em>celebration breads.</em>
            </h2>
            <p className="font-sans text-sm text-white/75 leading-relaxed mb-6">
              Wedding cakes, birthday loaves, corporate hampers. We bake to order with a 72-hour notice. Everything made from the same ingredients as our daily breads — no exceptions for "special occasions".
            </p>
            <div className="space-y-3 mb-8">
              {["Minimum order: 6+ people", "72h advance notice required", "Delivery available within 10km"].map((t) => (
                <div key={t} className="flex items-center gap-2 font-sans text-sm text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  {t}
                </div>
              ))}
            </div>
            <a href="tel:+43199876543" className="inline-flex items-center gap-2 font-sans font-semibold h-12 px-8 rounded-xl text-sm bg-white" style={{ color: DARK }}>
              <Phone className="w-4 h-4" /> Call to Order
            </a>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85" alt="Custom cake" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Find Us */}
      <section id="find-us" className="py-24 px-6" style={{ backgroundColor: IVORY }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-[0.4em] uppercase mb-3" style={{ color: WHEAT }}>Come visit</p>
            <h2 className="text-4xl" style={{ color: DARK }}>Find us in Vienna</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-8 border" style={{ backgroundColor: "white", borderColor: `${DARK}08` }}>
              <h3 className="font-bold text-lg mb-5" style={{ color: DARK }}>La Farine · Naschmarkt</h3>
              <div className="space-y-3 font-sans text-sm" style={{ color: `${DARK}65` }}>
                <p className="flex items-start gap-3">
                  <span className="font-bold mt-0.5" style={{ color: WHEAT }}>Adr.</span>
                  Linke Wienzeile 14, 1060 Wien
                </p>
                <p className="flex items-start gap-3">
                  <span className="font-bold mt-0.5" style={{ color: WHEAT }}>Tél.</span>
                  +43 1 998 76 543
                </p>
                <p className="flex items-start gap-3">
                  <span className="font-bold mt-0.5" style={{ color: WHEAT }}>Mail</span>
                  hello@lafarine.at
                </p>
              </div>
            </div>
            <div className="rounded-2xl p-8 border" style={{ backgroundColor: "white", borderColor: `${DARK}08` }}>
              <h3 className="font-bold text-lg mb-5" style={{ color: DARK }}>Opening hours</h3>
              <div className="space-y-2 font-sans text-sm">
                {[
                  ["Tuesday – Friday", "7:30 – 18:00"],
                  ["Saturday – Sunday", "7:30 – 14:00"],
                  ["Monday", "Closed"],
                ].map(([day, hrs]) => (
                  <div key={day} className="flex justify-between gap-4 py-1.5 border-b" style={{ borderColor: `${DARK}08` }}>
                    <span style={{ color: `${DARK}60` }}>{day}</span>
                    <span className={`font-semibold ${hrs === "Closed" ? "opacity-30" : ""}`} style={{ color: DARK }}>{hrs}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 font-sans text-xs" style={{ color: WARM }}>
                <div className="w-2 h-2 rounded-full bg-green-500" />
                First bake ready at 7:30 sharp — come early for the best croissants.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t font-sans" style={{ backgroundColor: DARK, borderColor: "rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          <div className="flex items-center gap-2">
            <Wheat className="w-4 h-4" style={{ color: WHEAT }} />
            <span className="font-bold text-sm text-white">La Farine</span>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>· Artisan Bakery Vienna</span>
          </div>
          <span>Demo site — <a href="/" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>built by Vladimir Rusacov</a></span>
          <span>© 2026 La Farine e.U.</span>
        </div>
      </footer>
    </div>
  );
}
