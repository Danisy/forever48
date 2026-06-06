"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import SectionReveal from "@/components/SectionReveal";
import MemberCard from "@/components/MemberCard";
import TimelineItem from "@/components/TimelineItem";
import { jkt48Members } from "@/data/members";
import { cultureTerms } from "@/data/culture";

const SakuraPetals = dynamic(() => import("@/components/SakuraPetals"), { ssr: false });
const FloatingParticles = dynamic(() => import("@/components/FloatingParticles"), { ssr: false });

const songs = [
  { title: "Heavy Rotation", description: "The anthem that started it all. A song about love so strong it plays on repeat in your heart, forever and always." },
  { title: "Ingin Bertemu", description: "A longing so deep it becomes melody. The ache of wanting to see someone who means the world to you." },
  { title: "Arah Sang Cinta Dan Balasannya", description: "The direction of love and its answer. A beautiful exploration of feelings that travel both ways, finding meaning in the space between hearts." },
  { title: "Ada Aku", description: "\"I am here.\" A gentle promise wrapped in warmth. A reminder that you're never alone, because someone will always be there." },
  { title: "Andai 'Ku Bukan Idola", description: "What if I wasn't an idol? A bittersweet reflection on the distance between stage and heart, dreams and reality." },
  { title: "Bersepeda Berdua", description: "Cycling together. A carefree melody that captures the simplicity of happiness shared between two people." },
  { title: "#KuSangatSuka", description: "I really like you. An irresistible confession bursting with energy, joy, and the courage to say what the heart feels." },
  { title: "Percik Kecil", description: "A small spark. Sometimes the tiniest flicker of light is all it takes to illuminate an entire universe of emotions." },
];

const jkt48Timeline = [
  {
    year: "2011",
    title: "The Formation & Debut",
    description: "The 48 Group expanded overseas with the announcement of JKT48 at Makuhari Messe. By December, the 1st Generation made their vibrant television debut with 'Heavy Rotation', igniting a new idol culture in Indonesia.",
    icon: "01",
  },
  {
    year: "2012",
    title: "The Permanent Home",
    description: "Staying true to the 'idols you can meet' philosophy, the JKT48 Theater officially opened its doors in fX Sudirman mall, becoming the beating heart of the group.",
    icon: "02",
  },
  {
    year: "2014",
    title: "The First Election",
    description: "The inaugural Senbatsu Sousenkyo (General Election) gave fans the unprecedented power to vote for the 6th single lineup, creating a legendary tradition of competitive spirit.",
    icon: "03",
  },
  {
    year: "2016",
    title: "The GBK Dream",
    description: "'The Untold Story of JKT48' concert was held at the massive Gelora Bung Karno Main Stadium, a bold and historic milestone showcasing the scale of their ambition.",
    icon: "04",
  },
  {
    year: "2021",
    title: "The New Era Begins",
    description: "Following a necessary restructuring due to the pandemic, JKT48 emerged stronger, dissolving separate teams to operate as a single, unified force under the New Era.",
    icon: "05",
  },
  {
    year: "2024",
    title: "Wonderland at Indonesia Arena",
    description: "A colossal 13th Anniversary Concert at the Gelora Bung Karno complex, alongside the triumphant return of the Senbatsu Sousenkyo.",
    icon: "06",
  },
  {
    year: "2026",
    title: "Love, Dream, Passion",
    description: "The dawn of a new team system era. The group was divided into Team Love, Team Dream, and Team Passion under the electrifying tagline 'JKT48 FIGHT!'.",
    icon: "07",
  },
];

export default function JKT48Page() {
  return (
    <div className="relative bg-gradient-jkt">
      <SakuraPetals density={20} />
      <FloatingParticles
        count={30}
        colors={["rgba(248,200,220,0.4)", "rgba(245,222,179,0.3)", "rgba(232,160,191,0.3)"]}
      />

      {/* ═══════════════════════════════════════ */}
      {/* HERO */}
      {/* ═══════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 pt-24">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full bg-pink-soft/10 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-gold-light/8 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center relative z-20"
        >
          <p className="text-pink-soft/40 text-sm tracking-[0.4em] uppercase mb-4">
            Welcome to the
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold gradient-text-warm text-glow mb-4">
            JKT48 Universe
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent via-pink-soft/40 to-transparent max-w-md mx-auto mb-6"
          />
          <p className="text-cream/35 font-light max-w-lg mx-auto leading-relaxed">
            Jakarta&apos;s brightest constellation. A world where music becomes memories and stages become home.
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
              <p className="text-pink-soft/30 text-xs tracking-[0.4em] uppercase mb-3">About</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-cream mb-6">
                The Heart of Jakarta
              </h2>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <p className="text-cream/50 font-light leading-[1.9] text-center max-w-3xl mx-auto">
                JKT48 is the first international sister group of AKB48, established in Jakarta, Indonesia.
                Since its formation, it has grown into one of Southeast Asia&apos;s most beloved idol groups,
                creating a legacy of unforgettable performances, heartfelt music, and deep connections
                with fans around the world. More than an idol group, JKT48 is a family, a home, and a
                stage where dreams come alive.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════════════════════════ */}
      {/* OSHI COLLECTION */}
      {/* ═══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6" id="oshi-jkt48">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <p className="text-gold-light/30 text-xs tracking-[0.4em] uppercase mb-3">
                My Stars
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-cream mb-4">
                My Oshi Collection
              </h2>
              <p className="text-cream/30 font-light max-w-lg mx-auto">
                The members who captured my heart and became the reason for every smile.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jkt48Members.map((member, index) => (
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-96 bg-pink-soft/5 blur-3xl rounded-[100%] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <SectionReveal>
            <div className="text-center mb-20">
              <p className="text-gold-light/30 text-xs tracking-[0.4em] uppercase mb-3">Reflection</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold gradient-text-warm text-glow mb-6">
                What They Mean To Me
              </h2>
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-pink-soft/30 to-transparent mx-auto" />
            </div>
          </SectionReveal>

          <div className="space-y-12">
            <SectionReveal delay={0.1}>
              <p className="text-cream/90 font-heading text-2xl md:text-3xl leading-relaxed italic text-center mb-8">
                &ldquo;JKT48 is more than an idol group to me.&rdquo;
              </p>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="glass-timeline rounded-3xl p-8 md:p-10 border-l-2 border-l-pink-soft/30 hover:border-l-pink-soft/60 transition-colors duration-500">
                <p className="text-cream/50 font-light leading-[2] text-lg mb-6">
                  When most people see JKT48, they see performances, songs, members, and entertainment. While all of those things are true, what I see is something much more personal.
                </p>
                <p className="text-cream/50 font-light leading-[2] text-lg mb-6">
                  JKT48 became part of my daily life. Their songs accompanied my days, their content made me smile when I needed it, and their members brought a kind of happiness that is difficult to explain to someone who has never experienced being a fan.
                </p>
                <p className="text-cream/50 font-light leading-[2] text-lg">
                  One of the things I love most about JKT48 is the members themselves. Every member has a different personality, charm, and story. Some made me laugh, some inspired me, and some simply made ordinary days feel brighter.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="space-y-8 px-4 md:px-10 mt-12">
                <p className="text-cream/50 font-light leading-[2] text-lg">
                  <span className="text-pink-soft font-medium">Lily</span> was the first JKT48 member who truly caught my attention. She became the door that introduced me to the world of JKT48. Without realizing it, that first impression slowly grew into genuine appreciation for the group.
                </p>
                
                <p className="text-cream/50 font-light leading-[2] text-lg">
                  <span className="text-pink-soft font-medium">Gracie</span> is someone very special to me. Her cheerful, silly, and warm personality perfectly matches the kind of person I naturally admire. Looking at her content often brightens my day. More importantly, she helped me realize what kind of personality I genuinely love in a person.
                </p>

                <p className="text-cream/50 font-light leading-[2] text-lg">
                  <span className="text-pink-soft font-medium">Fiony</span> is different. Even today, I struggle to explain exactly why I feel so attached to her. There is simply an unexplainable feeling whenever I see her. Not every feeling needs a reason, and perhaps she is one of those people.
                </p>

                <p className="text-cream/50 font-light leading-[2] text-lg">
                  <span className="text-pink-soft font-medium">Freya</span>, <span className="text-pink-soft font-medium">Christy</span> and many other members each added their own colors to my journey. Together, they transformed JKT48 from a group I followed into a place where I found joy, comfort, and memories.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.4}>
              <div className="mt-16 text-center">
                <p className="text-cream/40 font-light leading-[2] text-lg mb-4">
                  This page is not about documenting every fact about JKT48.
                </p>
                <p className="text-cream/90 font-heading text-xl md:text-2xl leading-relaxed italic text-glow-gold">
                  It is about remembering why JKT48 became important to me.
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
              <p className="text-pink-soft/30 text-xs tracking-[0.4em] uppercase mb-3">Melodies</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-cream mb-4">
                Songs & Memories
              </h2>
              <p className="text-cream/30 font-light max-w-lg mx-auto">
                Every song holds a universe of emotions. These are the melodies that became part of my story.
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-5">
            {songs.map((song, index) => (
              <SectionReveal key={song.title} delay={index * 0.08}>
                <div className="glass-card rounded-2xl p-6 group">
                  <div className="flex items-start gap-4">
                    <span className="text-lg flex-shrink-0 text-pink-soft/40 font-heading font-bold group-hover:text-pink-soft transition-colors duration-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-cream mb-1 group-hover:text-pink-soft transition-colors duration-300">
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
              <p className="text-pink-soft/30 text-xs tracking-[0.4em] uppercase mb-3">History</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-cream mb-4">
                The JKT48 Journey
              </h2>
              <p className="text-cream/30 font-light max-w-lg mx-auto">
                A timeline of dreams, tears, and triumphs. From the very first stage to the grandeur of the New Era.
              </p>
            </div>
          </SectionReveal>

          <div className="space-y-2">
            {jkt48Timeline.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                title={item.title}
                description={item.description}
                icon={item.icon}
                isLeft={index % 2 === 0}
                accentColor="pink-soft"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
