import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JKT48 Universe | Forever 48",
  description:
    "Explore the JKT48 Universe. Jakarta's shining stars. Discover members, songs, memories, and the magic of JKT48.",
};

export default function JKT48Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
