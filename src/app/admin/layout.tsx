import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin — Billiekia Concept",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // Layout isolé — pas de navbar ni footer du site public
  return <>{children}</>;
}
