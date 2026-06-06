"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import SectionReveal from "@/components/SectionReveal";

const SakuraPetals = dynamic(() => import("@/components/SakuraPetals"), { ssr: false });
const FloatingParticles = dynamic(() => import("@/components/FloatingParticles"), { ssr: false });

const journeyMilestones = [
  {
    numberLabel: "✦",
    title: "It Started With A Malaysian Dream",
    period: "The First Spark",
    description: [
      "I still remember the day it happened.",
      "I was scrolling through Instagram like any ordinary day when something unexpected appeared on my Explore page.",
      "AKB48 had announced a brand new sister group.",
      "Kuala Lumpur.",
      "KLP48.",
      "At that time, I wasn't an idol fan. In fact, I had never been interested in idol groups before.",
      "But something about the announcement caught my attention.",
      "Maybe it was curiosity. Maybe it was because it was happening in Malaysia. Maybe it was because it felt like something new and exciting.",
      "Whatever the reason was, I decided to follow their journey and show my support.",
      "At first, it wasn't love. It was simply curiosity.",
      "I wanted to see how this new group would grow. I wanted to see where their story would go.",
      "What I didn't realize was that while I was watching KLP48's journey unfold, my own journey was quietly beginning too."
    ],
    gradient: "from-gold-light/20 to-transparent",
  },
  {
    numberLabel: "01",
    title: "The Beginning of Everything",
    period: "Meeting Salwa",
    description: [
      "As I followed KLP48, one member slowly began to stand out.",
      "Salwa.",
      "The first 48 Group member who truly caught my attention.",
      "At first, I didn't think much about it. But over time, she became the reason I kept coming back.",
      "She became the person who transformed simple curiosity into genuine interest.",
      "Looking back now, I realize how important that moment was.",
      "Without Salwa, there is a very real chance I would never have explored the wider world of the 48 Group.",
      "Without Salwa, there would be no JKT48 journey.",
      "Without Salwa, there would be no Forever 48.",
      "She wasn't just my first oshi.",
      "She was the beginning of everything."
    ],
    gradient: "from-purple-gentle/20 to-transparent",
  },
  {
    numberLabel: "02",
    title: "A World Beyond Borders",
    period: "Discovering JKT48",
    description: [
      "If KLP48 opened the door, JKT48 invited me inside.",
      "Suddenly there were countless performances, songs, members, and stories waiting to be discovered.",
      "JKT48 felt different.",
      "The theater culture. The energy. The music. The members.",
      "Everything felt alive.",
      "Even though Jakarta was far away, the group somehow felt close.",
      "The more I discovered, the more I realized I wasn't simply following a group anymore.",
      "I was becoming part of a world that millions of fans had fallen in love with before me."
    ],
    gradient: "from-pink-soft/20 to-transparent",
  },
  {
    numberLabel: "03",
    title: "When the Heart Decides",
    period: "Finding My Oshis",
    description: [
      "People often ask why someone becomes an oshi.",
      "The truth is that I don't think we choose.",
      "The feeling chooses us.",
      "Lily was the first JKT48 member who truly caught my attention.",
      "Gracie later became someone very special to me because her cheerful and genuine personality reflected many qualities I naturally admire.",
      "Fiony became one of those people I could never fully explain. I simply liked her presence.",
      "Freya and Christy added their own colors to my journey.",
      "Then there was Alice.",
      "Just like Fiony, I struggle to explain exactly why she became important to me. Sometimes a smile, a personality, or a simple interaction is enough.",
      "Each of them became part of my story in different ways.",
      "Not because they knew me.",
      "But because they unknowingly made my days brighter."
    ],
    gradient: "from-pink-deep/20 to-transparent",
  },
  {
    numberLabel: "04",
    title: "The Soundtrack of My Journey",
    period: "The Songs That Stayed",
    description: [
      "I love music.",
      "Not casually. Not as background noise.",
      "I experience it.",
      "The songs of the 48 Group became attached to memories, emotions, and moments of my life.",
      "Some songs made me smile.",
      "Some made me emotional.",
      "Some reminded me why I became a fan in the first place.",
      "Years from now, I might forget where I was when I first heard a song.",
      "But I know I will never forget how it made me feel."
    ],
    gradient: "from-gold-accent/15 to-transparent",
  },
  {
    numberLabel: "05",
    title: "Moments Worth Keeping",
    period: "Favorite Memories",
    description: [
      "Not every important memory happens at a concert.",
      "Not every meaningful moment requires meeting an idol.",
      "Some memories are much smaller.",
      "Watching a livestream.",
      "Discovering a new member.",
      "Seeing an Instagram story.",
      "Listening to a song late at night.",
      "Laughing at a funny clip.",
      "Reading comments from other fans.",
      "Building this very website.",
      "These moments may seem ordinary.",
      "Yet together, they became the memories I never want to lose."
    ],
    gradient: "from-purple-deep/15 to-transparent",
  },
  {
    numberLabel: "06",
    title: "More Than Entertainment",
    period: "Why 48 Became Important",
    description: [
      "The 48 Group gave me more than songs and performances.",
      "It gave me inspiration.",
      "It gave me comfort.",
      "It gave me something to look forward to.",
      "It taught me that dreams deserve to be chased, even when they seem impossible.",
      "It showed me the beauty of hard work, perseverance, and growth.",
      "Most importantly, it reminded me that even the smallest moments can leave the deepest impact.",
      "The 48 Group became part of my life.",
      "And in many ways, part of who I am."
    ],
    gradient: "from-pink-soft/20 to-transparent",
  },
  {
    numberLabel: "07",
    title: "The Journey Continues",
    period: "The Present",
    description: [
      "Today, I am still here.",
      "Still listening.",
      "Still supporting.",
      "Still creating.",
      "This website exists because one ordinary day, I opened Instagram and saw an announcement about a new group called KLP48.",
      "At the time, I thought I was simply supporting a new Malaysian idol group.",
      "I never imagined it would lead me here.",
      "Maybe one day I will finally attend a theater performance.",
      "Maybe one day I will meet the people who unknowingly inspired this project.",
      "Maybe not.",
      "But regardless of what happens next, one thing will never change:",
      "I will always be grateful for the memories this journey has given me.",
      "Forever 48."
    ],
    gradient: "from-gold-light/20 to-transparent",
  }
];

export default function JourneyPage() {
  return (
    <div className="relative bg-gradient-main">
      <SakuraPetals density={18} />
      <FloatingParticles count={35} />

      {/* ═══════════════════════════════════════ */}
      {/* HERO */}
      {/* ═══════════════════════════════════════ */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 pt-24">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-pink-soft/8 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center relative z-20"
        >
          <p className="text-gold-light/30 text-sm tracking-[0.4em] uppercase mb-4">
            A Personal Story
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold gradient-text text-glow mb-4">
            My 48 Journey
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent via-gold-light/30 to-transparent max-w-md mx-auto mb-6"
          />
          <p className="text-cream/30 font-light max-w-lg mx-auto leading-relaxed">
            Every fan has a beginning. This is the story of how two worlds became one heart.
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* TIMELINE */}
      {/* ═══════════════════════════════════════ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto relative">
          {/* Center line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-pink-soft/20 via-purple-gentle/20 to-gold-light/20" />

          <div className="space-y-16">
            {journeyMilestones.map((milestone, index) => (
              <SectionReveal
                key={index}
                delay={0.1}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div className={`relative flex items-start gap-6 md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                  {/* Content Card */}
                  <div className="flex-1 ml-12 md:ml-0">
                    <div className={`glass-timeline rounded-3xl p-6 md:p-8 relative overflow-hidden`}>
                      {/* Accent gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${milestone.gradient} pointer-events-none`} />

                      <div className="relative z-10">
                        <span className="text-cream/20 text-xs tracking-[0.3em] uppercase block mb-2">
                          {milestone.period}
                        </span>
                        <h3 className="font-heading text-2xl font-bold text-cream mb-4 text-glow">
                          {milestone.title}
                        </h3>
                        <div className="space-y-4">
                          {milestone.description.map((paragraph, pIndex) => (
                            <p key={pIndex} className="text-cream/60 font-light leading-relaxed text-[15px]">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex-shrink-0">
                    <motion.div
                      whileInView={{ scale: [0.5, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1A1118] flex items-center justify-center text-xs md:text-sm font-heading font-bold text-pink-soft/50 border border-pink-soft/20 shadow-lg shadow-pink-soft/10"
                    >
                      {milestone.numberLabel || String(index + 1).padStart(2, "0")}
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* End marker */}
          <SectionReveal>
            <div className="flex justify-center mt-16">
              <div className="glass rounded-full px-8 py-4 text-center">
                <p className="text-cream/30 text-sm font-light italic">
                  The journey continues...
                </p>
                <p className="text-pink-soft/20 text-xs mt-1">Forever 48</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* FINAL REFLECTION (SCRAPBOOK CLOSING) */}
      {/* ═══════════════════════════════════════ */}
      <section className="relative pt-20 pb-12 md:pt-40 md:pb-24 px-6 flex flex-col justify-center items-center overflow-hidden">
        {/* Soft dreamy background effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[120%] bg-pink-soft/5 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gold-light/5 blur-3xl pointer-events-none" />
        
        {/* Divider / Intro element */}
        <SectionReveal>
          <div className="flex flex-col items-center mb-32">
            <div className="text-pink-soft/40 text-3xl mb-6 font-heading italic">*</div>
            <div className="h-32 w-px bg-gradient-to-b from-transparent via-cream/10 to-transparent" />
          </div>
        </SectionReveal>

        <div className="max-w-2xl mx-auto text-center relative z-10 space-y-16 md:space-y-20">
          <SectionReveal delay={0.1}>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold gradient-text text-glow tracking-wide pb-4">
              Thank You
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <p className="text-cream/70 font-heading leading-relaxed text-xl sm:text-2xl">
              To the members who unknowingly made my days brighter.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <p className="text-cream/70 font-heading leading-relaxed text-xl sm:text-2xl">
              To the songs that stayed with me through different chapters of life.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.4}>
            <p className="text-cream/70 font-heading leading-relaxed text-xl sm:text-2xl">
              To the memories that still make me smile whenever I look back.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.5}>
            <p className="text-cream/70 font-heading leading-relaxed text-xl sm:text-2xl">
              To the moments that turned ordinary days into beautiful ones.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.6}>
            <p className="text-cream/70 font-heading leading-relaxed text-xl sm:text-2xl">
              To Salwa, who started this journey.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.7}>
            <p className="text-cream/70 font-heading leading-relaxed text-xl sm:text-2xl">
              To Lily, who opened the door to JKT48.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.8}>
            <p className="text-cream/70 font-heading leading-relaxed text-xl sm:text-2xl">
              To Gracie, who showed me the kind of personality I truly admire.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.9}>
            <p className="text-cream/70 font-heading leading-relaxed text-xl sm:text-2xl">
              To Alice and Fiony, whose presence brought feelings that words can never fully explain.
            </p>
          </SectionReveal>

          <SectionReveal delay={1.0}>
            <p className="text-cream/70 font-heading leading-relaxed text-xl sm:text-2xl">
              To every member who became part of this story, even for a brief moment.
            </p>
          </SectionReveal>

          <SectionReveal delay={1.2}>
            <div className="pt-12 pb-4">
              <p className="text-cream/40 font-heading leading-relaxed text-lg italic">
                And finally...
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={1.4}>
            <p className="text-cream/70 font-heading leading-relaxed text-xl sm:text-2xl">
              To the version of myself who experienced all of this.
            </p>
          </SectionReveal>

          <SectionReveal delay={1.6}>
            <p className="text-cream/90 font-heading text-3xl sm:text-4xl italic pt-12 pb-2 text-glow-gold">
              Thank you.
            </p>
          </SectionReveal>

          <SectionReveal delay={1.8}>
            <p className="text-cream/60 font-heading text-base sm:text-lg italic pt-6 pb-0 text-glow-gold">
              - Danisy Ahnaf
            </p>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
