import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Cywarden",
  description:
    "How Cywarden collects, uses, discloses, and safeguards your information when you use cywarden.com and our services.",
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
