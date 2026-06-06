"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import SectionReveal from "@/components/SectionReveal";
import MemberCard from "@/components/MemberCard";
import TimelineItem from "@/components/TimelineItem";
import { klp48Members } from "@/data/members";
import { cultureTerms } from "@/data/culture";

const SakuraPetals = dynamic(() => import("@/components/SakuraPetals"), { ssr: false });
const FloatingParticles = dynamic(() => import("@/components/FloatingParticles"), { ssr: false });

const songs = [
  { title: "Heavy Rotation", description: "The timeless anthem that transcends borders. Even in KLP48's hands, its magic feels brand new yet eternally familiar." },
  { title: "Alasanku Maybe", description: "Maybe is the most honest answer the heart can give. A song that embraces uncertainty as part of falling in love." },
  { title: "Flying Get", description: "Soaring ambition meets infectious energy. KLP48 takes flight with a celebration of reaching for dreams without looking back." },
  { title: "Kerana Ku Suka", description: "Because I like you. Simple, honest, and beautifully Malaysian. A confession that needs no translation." },
  { title: "Oh My Pumpkin (KLP48 Version)", description: "A playful and sweet melody given new life through KLP48's unique charm. Adorable, fun, and impossible not to love." },
  { title: "Green Flash", description: "The fleeting green flash at sunset. A rare and beautiful moment, just like the feelings this song captures." },
];

const klp48Timeline = [
  {
    year: "Jan 2024",
    title: "The Announcement",
    description: "The 48 Group expands its universe once again with the official revelation of KLP48 as the 10th international sister group, bringing a new light to Malaysia.",
    icon: "01",
  },
  {
    year: "Aug 2024",
    title: "The Debut Stage",
    description: "KLP48 officially debuted with the 'First Cry' concert at Zepp Kuala Lumpur. A momentous night where they performed 'Heavy Rotation' and established their presence.",
    icon: "02",
  },
  {
    year: "Apr 2025",
    title: "Finding Their Voice",
    description: "The release of 'Alasanku Maybe' and the 'First Cry' EP showcased their vocal growth and cemented their uniquely soft and bright Malaysian identity.",
    icon: "03",
  },
  {
    year: "Aug 2025",
    title: "BLOOM Anniversary",
    description: "A beautiful celebration of their first year. The 'BLOOM' Anniversary Concert at Zepp KL featured special guest performances by their sister group, JKT48.",
    icon: "04",
  },
  {
    year: "2026",
    title: "The Global Stage",
    description: "KLP48's confirmed participation in the Tokyo Idol Festival (TIF) and their first dedicated fan-voted Senbatsu campaign, proving their rising international appeal.",
    icon: "05",
  },
];

export default function KLP48Page() {
  return (
    <div className="relative bg-gradient-klp">
      <SakuraPetals density={15} />
      <FloatingParticles
        count={35}
        colors={["rgba(200,162,200,0.4)", "rgba(248,200,220,0.3)", "rgba(155,125,184,0.3)"]}
      />

      {/* ═══════════════════════════════════════ */}
      {/* HERO */}
      {/* ═══════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 pt-24">
        <div className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-purple-gentle/12 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-pink-soft/8 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center relative z-20"
        >
          <p className="text-purple-gentle/40 text-sm tracking-[0.4em] uppercase mb-4">
            Welcome to the
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold gradient-text-cool text-glow mb-4">
            KLP48 Universe
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent via-purple-gentle/40 to-transparent max-w-md mx-auto mb-6"
          />
          <p className="text-cream/35 font-light max-w-lg mx-auto leading-relaxed">
            Kuala Lumpur&apos;s rising constellation. A world of tender beginnings, quiet strength, and infinite potential.
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* ABOUT */}
      {/* ═══════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-8">
              <p className="text-purple-gentle/30 text-xs tracking-[0.4em] uppercase mb-3">About</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-cream mb-6">
                The Soul of Kuala Lumpur
              </h2>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <p className="text-cream/50 font-light leading-[1.9] text-center max-w-3xl mx-auto">
                KLP48 is the Malaysian sister group of AKB48, born in the vibrant heart of Kuala Lumpur.
                As one of the newest additions to the 48 Group family, KLP48 represents a fresh chapter,
                a blend of Malaysian cultural richness with the beloved 48 tradition. With each performance
                and each smile, they are writing the beginning of what will become a beautiful legacy.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════════════════════════ */}
      {/* OSHI COLLECTION */}
      {/* ═══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6" id="oshi-klp48">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <p className="text-purple-gentle/30 text-xs tracking-[0.4em] uppercase mb-3">
                My Stars
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-cream mb-4">
                My Oshi Collection
              </h2>
              <p className="text-cream/30 font-light max-w-lg mx-auto">
                The members whose light reached across borders and found a home in my heart.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {klp48Members.map((member, index) => (
              <SectionReveal key={member.name} delay={index * 0.1}>
                <MemberCard member={member} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════════════════════════ */}
      {/* WHAT THEY MEAN TO ME */}
      {/* ═══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-96 bg-purple-gentle/5 blur-3xl rounded-[100%] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <SectionReveal>
            <div className="text-center mb-20">
              <p className="text-pink-soft/30 text-xs tracking-[0.4em] uppercase mb-3">Reflection</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold gradient-text-cool text-glow mb-6">
                What They Mean To Me
              </h2>
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-purple-gentle/30 to-transparent mx-auto" />
            </div>
          </SectionReveal>

          <div className="space-y-12">
            <SectionReveal delay={0.1}>
              <p className="text-cream/90 font-heading text-2xl md:text-3xl leading-relaxed italic text-center mb-8">
                &ldquo;If JKT48 became a world that I eventually fell in love with, KLP48 was where everything began.&rdquo;
              </p>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="glass-timeline rounded-3xl p-8 md:p-10 border-l-2 border-l-purple-gentle/30 hover:border-l-purple-gentle/60 transition-colors duration-500">
                <p className="text-cream/50 font-light leading-[2] text-lg mb-6">
                  KLP48 holds a special place in my heart because it was the group that introduced me to the 48 universe. Without KLP48, I might never have discovered so many wonderful members, songs, and memories that later became part of my life.
                </p>
                <p className="text-cream/50 font-light leading-[2] text-lg mb-6">
                  The person who started that journey was <span className="text-purple-gentle font-medium">Salwa</span>.
                </p>
                <p className="text-cream/50 font-light leading-[2] text-lg mb-6">
                  To me, Salwa is not just another member. She represents the beginning of everything. She was the spark that made me curious about KLP48 and eventually the entire 48 Group. Because of that, she will always have a special place in my heart.
                </p>
                <p className="text-cream/50 font-light leading-[2] text-lg">
                  As a Malaysian fan, KLP48 also feels close to home. There is a unique feeling when supporting a group that represents your own country while sharing the same spirit as the larger 48 family.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="glass-timeline rounded-3xl p-8 md:p-10 border-l-2 border-l-pink-soft/30 hover:border-l-pink-soft/60 transition-colors duration-500 mt-12 text-left">
                <p className="text-cream/50 font-light leading-[2] text-lg mb-6">
                  Another member who became very important to me is <span className="text-purple-gentle font-medium">Alice</span>.
                </p>
                
                <p className="text-cream/50 font-light leading-[2] text-lg mb-6">
                  Just like some feelings in life, my admiration for Alice is difficult to explain completely. What first caught my attention was her personality and the expressions she naturally shows. There is something genuine, warm, and comforting about her presence that always makes me happy to see her.
                </p>

                <p className="text-cream/50 font-light leading-[2] text-lg mb-6">
                  One thing I especially appreciate about Alice is how close she feels to her fans. The simple act of taking time to read messages from supporters may seem small, but it creates a connection that many fans deeply cherish. It reflects a kindness and appreciation that I truly admire.
                </p>

                <p className="text-cream/50 font-light leading-[2] text-lg">
                  What I admire most about KLP48 is not only the performances or songs. It is the passion of the members who continue working hard to build something meaningful. Watching them grow, improve, and chase their dreams is inspiring.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.4}>
              <div className="mt-16 text-center">
                <p className="text-cream/40 font-light leading-[2] text-lg mb-4">
                  KLP48 reminds me that great journeys often begin with a single moment.
                </p>
                <p className="text-cream/40 font-light leading-[2] text-lg mb-4">
                  For me, that moment was discovering Salwa.
                </p>
                <p className="text-cream/90 font-heading text-xl md:text-2xl leading-relaxed italic text-glow-gold">
                  And because of that moment, an entirely new chapter of my life began.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════════════════════════ */}
      {/* SONGS & MEMORIES */}
      {/* ═══════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <p className="text-purple-gentle/30 text-xs tracking-[0.4em] uppercase mb-3">Melodies</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-cream mb-4">
                Songs & Memories
              </h2>
              <p className="text-cream/30 font-light max-w-lg mx-auto">
                Every song holds a universe of emotions. These are the melodies that became part of the KLP48 story.
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-5">
            {songs.map((song, index) => (
              <SectionReveal key={song.title} delay={index * 0.08}>
                <div className="glass-card rounded-2xl p-6 group">
                  <div className="flex items-start gap-4">
                    <span className="text-lg flex-shrink-0 text-purple-gentle/40 font-heading font-bold group-hover:text-purple-gentle transition-colors duration-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-cream mb-1 group-hover:text-purple-gentle transition-colors duration-300">
                        {song.title}
                      </h3>
                      <p className="text-cream/40 text-sm font-light leading-relaxed">
                        {song.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════════════════════════ */}
      {/* HISTORY TIMELINE */}
      {/* ═══════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <p className="text-purple-gentle/30 text-xs tracking-[0.4em] uppercase mb-3">History</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-cream mb-4">
                The KLP48 Journey
              </h2>
              <p className="text-cream/30 font-light max-w-lg mx-auto">
                A timeline of tender beginnings and rapid growth. Watching a new constellation form in real time.
              </p>
            </div>
          </SectionReveal>

          <div className="space-y-2">
            {klp48Timeline.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                title={item.title}
                description={item.description}
                icon={item.icon}
                isLeft={index % 2 === 0}
                accentColor="purple-gentle"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
