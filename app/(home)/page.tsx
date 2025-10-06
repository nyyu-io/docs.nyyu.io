import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    title: 'Getting Started',
    icon: '/img/Start.svg',
    description: 'Welcome to NYYU! Nice to see you here. Let\'s get started!',
    link: '/docs/services/fee-structure',
  },
  {
    title: 'Using NYYU',
    icon: '/img/Learn.svg',
    description: 'From Wallet, Trade to Marketplace, learn how NYYU works from top to bottom.',
    link: '/docs/tutorial',
  },
  {
    title: 'Connect to NYYU API',
    icon: '/img/API.svg',
    description: 'Connect to our API and build your own applications on top of NYYU.',
    link: '/docs/api/getting-started',
  },
  {
    title: 'Marketplace Listings',
    icon: '/img/Listing.svg',
    description: 'Listing applications for crowdfunding, commodities, real estate, and electricity.',
    link: '/docs/services/start-up-listing',
  },
  {
    title: 'Recent Features & Updates',
    icon: '/img/Changelog.svg',
    description: 'Stay informed with the latest enhancements and additions to the NYYU platform.',
    link: '/docs/changelog',
  },
  {
    title: 'Support',
    icon: '/img/Support.svg',
    description: 'Submit a support ticket or connect with one of our live agents.',
    link: '/',
  },
];

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20">
        <div className="container max-w-6xl px-4 py-20 md:py-32">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              NYYU Resource Center
            </h1>
            <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
              Ultimate destination for comprehensive helpdesk, in-depth tutorials, FAQs, development APIs and recent updates.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
              <Link
                href="https://youtu.be/mhSZw97nEiU"
                target="_blank"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                NYYU 2 Demo - 6min ⏱️
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <Link
              key={idx}
              href={feature.link}
              className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
