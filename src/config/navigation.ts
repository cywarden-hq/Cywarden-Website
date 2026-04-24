export type NavLink = { label: string; href: string }

export type NavGroup = {
  label: string
  items: NavLink[]
}

export type NavItem =
  | { type: "link"; label: string; href: string }
  | {
      type: "dropdown"
      label: string
      href?: string
      children: NavLink[]
    }
  | {
      type: "mega"
      label: string
      href?: string
      groups: NavGroup[]
    }

export const navigation: NavItem[] = [
  {
    type: "link",
    label: "Home",
    href: "/",
  },
  {
    type: "link",
    label: "Product",
    href: "/product",
  },
  {
    type: "mega",
    label: "Services",
    groups: [
      {
        label: "Core Security",
        items: [
          { label: "Cloud Security", href: "/services/cloud-security" },
          { label: "Application Security", href: "/services/application-security" },
          { label: "Threat Modeling", href: "/services/threat-modeling" },
          { label: "Identity & Access Management", href: "/services/identity-and-access-management" },
          { label: "Governance, Risk & Compliance", href: "/services/governance-risk-and-compliance" },
          { label: "Vulnerability Management", href: "/services/vulnerability-management" },
        ],
      },
      {
        label: "Managed Security",
        items: [
          { label: "Next-Gen SOC", href: "/services/nextgen-soc" },
          { label: "Identity Operations", href: "/services/identity-ops" },
          { label: "Network Operations", href: "/services/network-ops" },
          { label: "Vulnerability Operations", href: "/services/vulnerability-ops" },
        ],
      },
    ],
  },
  {
    type: "link",
    label: "Partners",
    href: "/partners",
  },
  // {
  //   type: "link",
  //   label: "Insights",
  //   href: "/blog",
  // },
  {
    type: "mega",
    label: "Company",
    href: "/about",
    groups: [
      {
        label: "Company",
        items: [
          { label: "About", href: "/about" },
          { label: "Leadership", href: "/about#leadership" },
          { label: "Careers", href: "/careers" },
          { label: "Events", href: "/events" },
          { label: "News", href: "/news" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },
]

export const cta = {
  label: "Get Started",
  href: "/contact",
}
