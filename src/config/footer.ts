import type { NavLink } from "./navigation";

export type FooterLinkColumn = {
  title: string;
  links: NavLink[];
};

export const footerLogo = {
  src: "/images/cywarden-logo-white.png",
  alt: "Cywarden",
  href: "/",
  width: 180,
  height: 40,
} as const;

export const footerTagline =
  "Empowering modern enterprises to defend, innovate, and thrive — with intelligent, AI-native cybersecurity that safeguards digital ecosystems and enables fearless growth.";

export const footerAddresses: { title: string; lines: string[] }[] = [
  {
    title: "United States",
    lines: ["11501 Dublin Blvd, Suite 200B", "Dublin, CA 94568"],
  },
  {
    title: "India Delivery Center",
    lines: ["GR Tower, Industrial Area", "Sector 75, Mohali"],
  },
];

export const footerColumns: FooterLinkColumn[] = [
  {
    title: "Core Security",
    links: [
      { label: "Cloud Security", href: "/services/cloud-security" },
      { label: "Application Security", href: "/services/application-security" },
      { label: "Threat Modeling", href: "/services/threat-modeling" },
      { label: "Identity & Access", href: "/services/identity-access" },
      { label: "Governance & Risk", href: "/services/governance-risk" },
      { label: "Vulnerability Management", href: "/services/vulnerability-management" },
    ],
  },
  {
    title: "Managed Security",
    links: [
      { label: "Next-Gen SOC", href: "/services/nextgen-soc" },
      { label: "Identity Operations", href: "/services/identity-ops" },
      { label: "Network Operations", href: "/services/network-ops" },
      { label: "Vulnerability Operations", href: "/services/vulnerability-ops" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "How We Work", href: "/about#how-we-work" },
      { label: "Partners", href: "/partners" },
      { label: "Security Blogs", href: "/blog" },
    ],
  },
];

export const footerLegal: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

export const footerCopyright = {
  /** Display name; year is appended at render time */
  holder: "Cywarden Inc.",
} as const;
