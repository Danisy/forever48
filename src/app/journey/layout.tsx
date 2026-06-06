import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My 48 Journey | Forever 48",
  description:
    "A personal timeline of how the 48 Group, JKT48 and KLP48, became a part of my heart. A story of discovery, music, and belonging.",
};

export default function JourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
