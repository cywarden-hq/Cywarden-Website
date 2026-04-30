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
  "Empowering modern enterprises to defend, innovate, and thrive - with intelligent, AI-native cybersecurity that safeguards digital ecosystems and enables fearless growth.";

export const footerAddresses: { title: string; lines: string[] }[] = [
  {
    title: "United States",
    lines: ["11501 Dublin Blvd, Suite 200B", "Dublin, CA 94568"],
  },
  {
    title: "Cywarden Global Services Private Limited",
    lines: ["GR Square (D-254), Industrial Area", "Sector 75, Chandigarh, India"],
  },
];

export const footerLinkedIn = {
  href: "https://www.linkedin.com/company/cywarden/",
  label: "Follow us on LinkedIn",
  ariaLabel: "Cywarden on LinkedIn",
  iconSrc: "/images/linkedin-logo.svg",
} as const;

export const footerColumns: FooterLinkColumn[] = [
  {
    title: "Core Security",
    links: [
      { label: "Cloud Security", href: "/services/cloud-security" },
      { label: "Application Security", href: "/services/application-security" },
      { label: "Threat Modeling", href: "/services/threat-modeling" },
      { label: "Identity & Access", href: "/services/identity-and-access-management" },
      { label: "Governance, Risk & Compliance", href: "/services/governance-risk-and-compliance" },
      { label: "Vulnerability Management", href: "/services/vulnerability-management" },
    ],
  },
  {
    title: "Managed Security",
    links: [
      { label: "Next-Gen SOC", href: "/services/next-generation-soc" },
      { label: "Identity Operations", href: "/services/identity-operations" },
      { label: "Network Operations", href: "/services/network-operations" },
      { label: "Vulnerability Operations", href: "/services/vulnerability-operations" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "How We Work", href: "/about" },
      { label: "Partners", href: "/partners" },
      { label: "Security Blogs", href: "/blogs" },
    ],
  },
];

export const footerLegal: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export const footerCopyright = {
  /** Display name; year is appended at render time */
  holder: "Cywarden Inc.",
} as const;
