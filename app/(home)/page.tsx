"use client";

import Link from "next/link";
import Image from "next/image";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
const features = [
  {
    title: "Getting Started",
    icon: "/img/Start.svg",
    description: "Welcome to NYYU! Nice to see you here. Let's get started!",
    link: "/docs/tutorial",
  },
  {
    title: "Using NYYU",
    icon: "/img/Learn.svg",
    description:
      "From Wallet, Trade to Marketplace, learn how NYYU works from top to bottom.",
    link: "/docs/tutorial",
  },
  {
    title: "Connect to NYYU API",
    icon: "/img/API.svg",
    description:
      "Connect to our API and build your own applications on top of NYYU.",
    link: "/docs/api",
  },
  {
    title: "Marketplace Listings",
    icon: "/img/Listing.svg",
    description:
      "Listing applications for crowdfunding, commodities, real estate, and electricity.",
    link: "/docs/services/startup-listing",
  },
  {
    title: "Recent Features & Updates",
    icon: "/img/Changelog.svg",
    description:
      "Stay informed with the latest enhancements and additions to the NYYU platform.",
    link: "/docs/changelog/intro",
  },
  {
    title: "Support",
    icon: "/img/Support.svg",
    description:
      "Submit a support ticket or connect with one of our live agents.",
    link: "/",
  },
];

interface GridItemProps {
  area: string;
  icon: string;
  title: string;
  description: string;
  link: string;
}

const GridItem = ({ area, icon, title, description, link }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <Link href={link} className="relative h-full block">
        <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
            <div className="relative flex flex-1 flex-col justify-between gap-3">
              <div className="w-fit rounded-lg border border-gray-600 p-2">
                <Image
                  src={icon}
                  alt={title}
                  width={16}
                  height={16}
                  className="h-4 w-4 text-black dark:text-neutral-400"
                />
              </div>
              <div className="space-y-3">
                <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                  {title}
                </h3>
                <p className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative border-b">
        <BackgroundRippleEffect />
        <div className="container max-w-6xl px-4 py-20 md:py-32 relative z-10">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-black dark:text-white">
              NYYU Resource Center
            </h1>
            <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
              Ultimate destination for comprehensive helpdesk, in-depth
              tutorials, FAQs, development APIs and recent updates.
            </p>

            <HeroVideoDialog
              animationStyle="top-in-bottom-out"
              videoSrc="https://www.youtube.com/embed/mhSZw97nEiU?si=frzA-V6m49fHsECY"
              thumbnailSrc="/img/maxresdefault.jpg"
              thumbnailAlt="Hero Video"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container max-w-6xl px-4 py-16 md:py-24">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map((feature, idx) => (
            <GridItem
              key={idx}
              area="" // Remove specific grid-area to allow natural flow
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              link={feature.link}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
