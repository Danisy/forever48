"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MemberData } from "./MemberCard";

interface MemberModalProps {
  member: MemberData;
  isOpen: boolean;
  onClose: () => void;
}

export default function MemberModal({ member, isOpen, onClose }: MemberModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-bg-darker/80 backdrop-blur-md" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass rounded-3xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-cream/60 hover:text-pink-soft transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl bg-gradient-to-b from-pink-soft/10 to-purple-gentle/10">
              {member.imageUrl ? (
                <Image 
                  src={member.imageUrl} 
                  alt={member.name} 
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover" 
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-6xl opacity-15 font-heading">*</div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-darker via-transparent to-transparent" />
              
              {/* Social Media Links Over Image */}
              {member.socialMedia && (
                <div className="absolute bottom-16 left-5 sm:left-8 flex gap-3 z-10">
                  {member.socialMedia.instagram && (
                    <a href={member.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full glass flex items-center justify-center text-cream/70 hover:text-pink-soft hover:scale-110 transition-all" aria-label="Instagram">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                  )}
                  {member.socialMedia.twitter && (
                    <a href={member.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full glass flex items-center justify-center text-cream/70 hover:text-pink-soft hover:scale-110 transition-all" aria-label="X (Twitter)">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.73 16h5L9 4H4z"></path></svg>
                    </a>
                  )}
                  {member.socialMedia.tiktok && (
                    <a href={member.socialMedia.tiktok} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full glass flex items-center justify-center text-cream/70 hover:text-pink-soft hover:scale-110 transition-all" aria-label="TikTok">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="p-5 sm:p-8 -mt-8 sm:-mt-12 relative">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-cream mb-1 text-glow">{member.name}</h2>
              <p className="text-cream/40 text-xs sm:text-sm mb-6">{member.fullName}</p>

              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
                <div className="glass-card rounded-2xl p-4">
                  <p className="text-[10px] uppercase tracking-widest text-pink-soft/60 mb-1">Generation</p>
                  <p className="text-cream/80 text-sm font-light">{member.generation}</p>
                </div>
                <div className="glass-card rounded-2xl p-4">
                  <p className="text-[10px] uppercase tracking-widest text-pink-soft/60 mb-1">Birthday</p>
                  <p className="text-cream/80 text-sm font-light">{member.birthday}</p>
                </div>
                {member.birthplace && (
                  <div className="glass-card rounded-2xl p-4">
                    <p className="text-[10px] uppercase tracking-widest text-pink-soft/60 mb-1">Birthplace</p>
                    <p className="text-cream/80 text-sm font-light">{member.birthplace}</p>
                  </div>
                )}
                {member.team && (
                  <div className="glass-card rounded-2xl p-4">
                    <p className="text-[10px] uppercase tracking-widest text-pink-soft/60 mb-1">Team</p>
                    <p className="text-cream/80 text-sm font-light">{member.team}</p>
                  </div>
                )}
              </div>

              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-widest text-gold-light/60 mb-3">About</h3>
                <p className="text-cream/60 leading-relaxed font-light">{member.description}</p>
              </div>

              {member.quote && (
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-[10px] uppercase tracking-widest text-pink-soft/60 mb-2">Jikoshoukai</h3>
                  <div className="text-3xl text-pink-soft/30 leading-none mb-1">&ldquo;</div>
                  <p className="text-cream/50 italic font-light leading-relaxed">{member.quote}</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
