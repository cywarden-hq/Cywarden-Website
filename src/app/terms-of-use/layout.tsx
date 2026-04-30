import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Cywarden",
  description:
    "Terms governing your access to and use of cywarden.com and resources available through the Site.",
};

export default function TermsOfUseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
