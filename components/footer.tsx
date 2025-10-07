import Link from "next/link";

// Add type definitions for type safety
interface FooterLink {
  label: string;
  href: string;
  external?: boolean; // Optional property
}

interface FooterSection {
  title: string;
  items: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    title: "Products",
    items: [
      { label: "Trade", href: "/docs/tutorial/trade" },
      { label: "Swap", href: "/docs/tutorial/swap" },
      { label: "Marketplace", href: "/docs/tutorial/marketplace" },
      { label: "Loan", href: "/docs/tutorial/loan" },
      { label: "Save", href: "/docs/tutorial/save" },
      { label: "Invites", href: "/docs/tutorial/invites" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Token Listing", href: "/docs/services/token-listing" },
      { label: "Startup Listing", href: "/docs/services/startup-listing" },
      { label: "Property Listing", href: "/docs/services/real-estate-listing" },
      { label: "Commodity Listing", href: "/docs/services/commodity-listing" },
      { label: "Fees", href: "/docs/services/fees" },
      { label: "Bug Bounty", href: "/docs/services/bug-bounty" },
      { label: "Delistings", href: "/docs/services/de-listing" },
      {
        label: "PoR (Proof of Reserves)",
        href: "/docs/services/proof-of-reserves",
      },
    ],
  },
  {
    title: "Developers",
    items: [
      { label: "NYYU API", href: "/docs/api/getting-started" },
      { label: "NYYU Node", href: "/docs/api" },
      { label: "NYYU Pay", href: "/docs/api" },
    ],
  },
  {
    title: "Corporate",
    items: [
      { label: "About Us", href: "/docs/corporate/about-us" },
      { label: "Media Kit", href: "/docs/corporate/media-kit" },
      {
        label: "Whistleblower Contact",
        href: "/docs/corporate/whistleblower-contact",
      },
      { label: "Security", href: "/docs/corporate/security" },
      { label: "Changelogs", href: "/docs/changelog/intro" },
      { label: "Contact Us", href: "/docs/corporate/contact-us" },
    ],
  },
  {
    title: "Community",
    items: [
      { label: "X", href: "https://twitter.com/nyyuio", external: true },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/nyyuio/",
        external: true,
      },
      {
        label: "Instagram",
        href: "https://instagram.com/nyyu.io",
        external: true,
      },
      {
        label: "Facebook",
        href: "https://facebook.com/nyyu.io",
        external: true,
      },
      {
        label: "YouTube",
        href: "https://www.youtube.com/@nyyuio",
        external: true,
      },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Terms of Use", href: "/docs/corporate/terms-of-use" },
      { label: "Privacy Policy", href: "/docs/corporate/privacy-policy" },
      { label: "Risk Disclosure", href: "/docs/corporate/risk-disclosure" },
      { label: "AML & CFT", href: "/docs/corporate/aml-cft" },
      { label: "Special Treatment", href: "/docs/corporate/special-treatment" },
      { label: "Law Enforcement", href: "/docs/corporate/law-enforcement" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-card/50 mt-auto">
      <div className="container max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            Copyright © {new Date().getFullYear()} NYYU UAB
          </p>
        </div>
      </div>
    </footer>
  );
}
