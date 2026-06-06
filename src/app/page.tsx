"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import SectionReveal from "@/components/SectionReveal";

const SakuraPetals = dynamic(() => import("@/components/SakuraPetals"), { ssr: false });
const FloatingParticles = dynamic(() => import("@/components/FloatingParticles"), { ssr: false });

export default function HomePage() {
  return (
    <div className="relative">
      <SakuraPetals density={25} />
      <FloatingParticles count={40} />

      {/* ═══════════════════════════════════════ */}
      {/* HERO SECTION */}
      {/* ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-pink-soft/8 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-gentle/8 blur-3xl animate-float [animation-delay:3s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gold-light/5 blur-2xl" />

        {/* Main Title — Pure CSS animations, no JS dependency */}
        <div className="text-center relative z-20 hero-fade-up">
          {/* Decorative element */}
          <div className="text-pink-soft text-4xl mb-4 font-heading italic opacity-20 hero-fade-in-d3">
            *
          </div>

          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold gradient-text text-glow mb-4 tracking-tight">
            Forever 48
          </h1>

          <div className="h-px bg-gradient-to-r from-transparent via-pink-soft/30 to-transparent max-w-xs mx-auto mb-6 hero-line-grow" />

          <p className="text-cream/50 text-lg sm:text-xl md:text-2xl font-light tracking-[0.3em] uppercase hero-fade-in-d8">
            Every fan has a story.
          </p>

          <p className="text-cream/40 text-md sm:text-lg mt-2 font-light tracking-[0.2em] uppercase hero-fade-in-d10">
            This one is mine.
          </p>

          <p className="text-cream/30 text-sm mt-6 font-light tracking-wider max-w-md mx-auto leading-relaxed hero-fade-in-d12">
            A journey through the music, memories, and members that turned ordinary moments into beautiful ones.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hero-fade-in-d20">
          <span className="text-cream/20 text-[10px] tracking-[0.4em] uppercase">
            Explore
          </span>
          <div className="w-5 h-8 rounded-full border border-cream/15 flex items-start justify-center p-1 hero-bounce">
            <div className="w-1 h-2 rounded-full bg-pink-soft/40" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* UNIVERSE SELECTOR */}
      {/* ═══════════════════════════════════════ */}
      <section className="relative py-32 px-6">
        <SectionReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-cream mb-4">
              Choose Your Universe
            </h2>
            <p className="text-cream/30 font-light max-w-lg mx-auto">
              Two groups, two stories, one shared passion. Where will your heart take you?
            </p>
          </div>
        </SectionReveal>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* JKT48 Universe Card */}
          <SectionReveal delay={0.1} direction="left">
            <Link href="/jkt48" className="block group">
              <div
                className="relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-2 active:scale-[0.98]"
              >
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-deep/20 via-pink-soft/10 to-gold-light/10" />
                <div className="absolute inset-0 glass-card rounded-3xl" />

                {/* Glow effect */}
                <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-pink-soft/10 blur-3xl group-hover:bg-pink-soft/20 transition-all duration-700" />
                <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gold-light/8 blur-2xl group-hover:bg-gold-light/15 transition-all duration-700" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                  <h3 className="font-heading text-3xl sm:text-4xl font-bold gradient-text-warm mb-4">
                    JKT48
                  </h3>
                  <p className="text-cream/40 font-light mb-8 max-w-xs">
                    Jakarta&apos;s shining stars. A world of warmth, passion, and unforgettable melodies.
                  </p>
                  <div className="glass rounded-full px-6 py-3 text-sm text-cream/60 group-hover:text-pink-soft transition-colors duration-300 flex items-center gap-2">
                    <span className="tracking-wider uppercase text-xs">Enter Universe</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-3xl border border-pink-soft/0 group-hover:border-pink-soft/20 transition-colors duration-500" />
              </div>
            </Link>
          </SectionReveal>

          {/* KLP48 Universe Card */}
          <SectionReveal delay={0.2} direction="right">
            <Link href="/klp48" className="block group">
              <div
                className="relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-2 active:scale-[0.98]"
              >
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-deep/20 via-purple-gentle/10 to-pink-soft/10" />
                <div className="absolute inset-0 glass-card rounded-3xl" />

                {/* Glow effect */}
                <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-purple-gentle/10 blur-3xl group-hover:bg-purple-gentle/20 transition-all duration-700" />
                <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-pink-soft/8 blur-2xl group-hover:bg-pink-soft/15 transition-all duration-700" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                  <h3 className="font-heading text-3xl sm:text-4xl font-bold gradient-text-cool mb-4">
                    KLP48
                  </h3>
                  <p className="text-cream/40 font-light mb-8 max-w-xs">
                    Kuala Lumpur&apos;s rising light. A world of dreams, softness, and new beginnings.
                  </p>
                  <div className="glass rounded-full px-6 py-3 text-sm text-cream/60 group-hover:text-purple-gentle transition-colors duration-300 flex items-center gap-2">
                    <span className="tracking-wider uppercase text-xs">Enter Universe</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-3xl border border-purple-gentle/0 group-hover:border-purple-gentle/20 transition-colors duration-500" />
              </div>
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* JOURNEY TEASER */}
      {/* ═══════════════════════════════════════ */}
      <section className="relative py-32 px-6">
        <div className="section-divider mb-20" />
        <SectionReveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-pink-soft/30 text-sm tracking-[0.3em] uppercase mb-4">
              Personal Story
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-cream mb-6">
              My 48 Journey
            </h2>
            <p className="text-cream/30 font-light leading-relaxed mb-10">
              Every fan has a story. A moment when a song changed everything. A smile that became your reason to smile. This is a personal timeline of how the 48 world became a part of my heart.
            </p>
            <Link href="/journey">
              <div
                className="inline-flex items-center gap-3 glass rounded-full px-8 py-4 text-cream/50 hover:text-gold-light hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span className="text-sm tracking-wider uppercase">Read My Story</span>
              </div>
            </Link>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
}
