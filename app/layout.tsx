import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://docs.nyyu.io"),
  title: {
    default: "NYYU Documentation",
    template: "%s | NYYU Docs",
  },
  description:
    "Official documentation for NYYU platform - API reference, tutorials, and guides",
  openGraph: {
    title: "NYYU Documentation",
    description: "Official documentation for NYYU platform",
    url: "https://docs.nyyu.io",
    siteName: "NYYU Docs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NYYU Documentation",
    description: "Official documentation for NYYU platform",
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
