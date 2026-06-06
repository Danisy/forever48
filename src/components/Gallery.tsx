"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export default function Gallery({ images, title }: { images: GalleryImage[]; title?: string }) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div>
      {title && (
        <SectionReveal>
          <h3 className="font-heading text-3xl font-bold text-cream mb-8 text-center text-glow">
            {title}
          </h3>
        </SectionReveal>
      )}

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((image, index) => (
          <SectionReveal key={index} delay={index * 0.1}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="break-inside-avoid cursor-pointer group relative rounded-2xl overflow-hidden glass-card"
              onClick={() => setSelectedImage(image)}
            >
              {image.src ? (
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-pink-soft/5 to-purple-gentle/5">
                  <div className="text-center">
                    <div className="text-2xl opacity-15 font-heading mb-2">*</div>
                    <p className="text-cream/20 text-xs">{image.alt}</p>
                  </div>
                </div>
              )}
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-bg-darker/0 group-hover:bg-bg-darker/30 transition-colors duration-300 flex items-end">
                {image.caption && (
                  <p className="p-4 text-cream/0 group-hover:text-cream/70 transition-colors duration-300 text-sm font-light">
                    {image.caption}
                  </p>
                )}
              </div>
            </motion.div>
          </SectionReveal>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="absolute inset-0 bg-bg-darker/90 backdrop-blur-lg" />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[85vh] z-10"
            >
              {selectedImage.src ? (
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[85vh] object-contain rounded-2xl"
                />
              ) : (
                <div className="w-96 h-64 flex items-center justify-center glass rounded-2xl">
                  <p className="text-cream/40">{selectedImage.alt}</p>
                </div>
              )}
              {selectedImage.caption && (
                <p className="text-cream/50 text-sm mt-4 text-center font-light">
                  {selectedImage.caption}
                </p>
              )}
            </motion.div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 glass rounded-full flex items-center justify-center text-cream/60 hover:text-pink-soft transition-colors z-20"
              aria-label="Close lightbox"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
