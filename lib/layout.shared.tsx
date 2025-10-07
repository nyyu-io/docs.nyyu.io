import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image
            src="/img/logo.svg"
            alt="NYYU Logo"
            width={32}
            height={26}

            
            className="dark:hidden"
          />
          <Image
            src="/img/logo_dark.svg"
            alt="NYYU Logo"
            width={32}
            height={26}
            className="hidden dark:block"
          />
        </>
      ),
      transparentMode: "top",
    },
    links: [
      {
        text: "API",
        url: "/docs/api",
        active: "nested-url",
      },
      {
        text: "Tutorial",
        url: "/docs/tutorial",
        active: "nested-url",
      },
      {
        text: "Services",
        url: "/docs/services",
        active: "nested-url",
      },
      {
        text: "Corporate",
        url: "/docs/corporate",
        active: "nested-url",
      },
      {
        text: "Troubleshoot",
        url: "/docs/troubleshoot",
        active: "nested-url",
      },
      {
        text: "Changelog",
        url: "/docs/changelog/intro",
        active: "nested-url",
      },
    ],
  };
}
