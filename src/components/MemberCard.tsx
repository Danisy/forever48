"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MemberModal from "./MemberModal";

export interface MemberData {
  name: string;
  fullName: string;
  nickname: string;
  generation: string;
  birthday: string;
  birthplace?: string;
  team?: string;
  height?: string;
  description: string;
  quote?: string;
  imageUrl?: string;
  accentColor?: string;
  socialMedia?: {
    instagram?: string;
    twitter?: string;
    tiktok?: string;
  };
}

export default function MemberCard({ member }: { member: MemberData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const accent = member.accentColor || "rgba(248, 200, 220, 0.3)";

  return (
    <>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={() => setIsModalOpen(true)}
        className="group cursor-pointer relative rounded-3xl overflow-hidden glass-card"
        style={{
          boxShadow: `0 4px 30px ${accent}`,
        }}
      >
        {/* Image container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-pink-soft/10 to-purple-gentle/10">
          {member.imageUrl ? (
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-3 opacity-20 font-heading">*</div>
                <p className="text-cream/30 text-xs tracking-widest uppercase">
                  Photo coming soon
                </p>
              </div>
            </div>
          )}

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-darker/90 via-bg-darker/20 to-transparent" />

          {/* Hover glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at 50% 80%, ${accent}, transparent 70%)`,
            }}
          />
        </div>

        {/* Info */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-heading text-xl font-bold text-cream mb-1 text-glow">
            {member.name}
          </h3>
          <p className="text-cream/50 text-xs tracking-wider uppercase mb-2">
            {member.generation}
          </p>
          <p className="text-cream/40 text-sm font-light line-clamp-2 leading-relaxed">
            {member.description}
          </p>

          {/* Click indicator */}
          <div className="mt-3 flex items-center gap-1.5 text-pink-soft/50 group-hover:text-pink-soft transition-colors duration-300">
            <span className="text-[10px] uppercase tracking-widest">
              Learn more
            </span>
            <svg
              className="w-3 h-3 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </motion.div>

      <MemberModal
        member={member}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
