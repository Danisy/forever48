import SectionReveal from "./SectionReveal";

interface TimelineItemProps {
  year?: string;
  title: string;
  description: string;
  icon?: string;
  isLeft?: boolean;
  accentColor?: string;
}

export default function TimelineItem({
  year,
  title,
  description,
  icon = "*",
  isLeft = true,
  accentColor = "pink-soft",
}: TimelineItemProps) {
  return (
    <SectionReveal direction={isLeft ? "left" : "right"}>
      <div className={`flex items-start gap-6 ${!isLeft ? "flex-row-reverse text-right" : ""}`}>
        {/* Content */}
        <div className="flex-1 glass-timeline rounded-2xl p-6 relative">
          {year && (
            <span className={`text-${accentColor}/50 text-xs tracking-widest uppercase mb-2 block`}>
              {year}
            </span>
          )}
          <h4 className="font-heading text-xl font-bold text-cream mb-2">{title}</h4>
          <p className="text-cream/50 font-light leading-relaxed text-sm">{description}</p>
          {/* Arrow */}
          <div
            className={`absolute top-6 ${
              isLeft ? "-right-2" : "-left-2"
            } w-4 h-4 glass-timeline rotate-45 border-r-0 border-b-0`}
          />
        </div>

        {/* Center Line Node */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div className={`w-12 h-12 rounded-full bg-[#1A1118] flex items-center justify-center text-lg border border-${accentColor}/30`}>
            {icon}
          </div>
          <div className={`w-px h-16 bg-gradient-to-b from-${accentColor}/30 to-transparent`} />
        </div>

        {/* Spacer for alternating layout */}
        <div className="flex-1 hidden md:block" />
      </div>
    </SectionReveal>
  );
}
