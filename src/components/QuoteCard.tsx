import SectionReveal from "./SectionReveal";

interface QuoteCardProps {
  quote: string;
  author?: string;
  className?: string;
}

export default function QuoteCard({ quote, author, className = "" }: QuoteCardProps) {
  return (
    <SectionReveal>
      <div className={`glass-card rounded-2xl p-8 relative overflow-hidden ${className}`}>
        {/* Decorative quote mark */}
        <div className="absolute -top-2 -left-1 text-7xl font-heading text-pink-soft/10 select-none">
          &ldquo;
        </div>
        <p className="text-cream/60 text-lg italic font-light leading-relaxed relative z-10 pl-4">
          {quote}
        </p>
        {author && (
          <p className="text-pink-soft/40 text-sm mt-4 pl-4 tracking-wider">— {author}</p>
        )}
        {/* Decorative glow */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-pink-soft/5 blur-3xl" />
      </div>
    </SectionReveal>
  );
}
