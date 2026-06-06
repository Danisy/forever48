import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KLP48 Universe | Forever 48",
  description:
    "Explore the KLP48 Universe. Kuala Lumpur's rising light. Discover members, memories, and the beauty of KLP48.",
};

export default function KLP48Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
