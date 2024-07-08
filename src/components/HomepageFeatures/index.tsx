import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import FAQSection from './faq-articles.mdx';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Getting Started',
    Svg: require('@site/static/img/Start.svg').default,
    description: (
      <>
      Welcome to NYYU! Nice to see you here. Let’s get started!
      </>
    ),
    link: '/docs/services/fee-structure',
  },
  {
    title: 'Using NYYU',
    Svg: require('@site/static/img/Learn.svg').default,
    description: (
      <>
        From Wallet, Trade to Marketplace, learn how to NYYU works from top to bottom.
      </>
    ),
    link: '/docs/tutorial-basics/getting-started',
  },
  {
    title: 'Connect to NYYU API',
    Svg: require('@site/static/img/API.svg').default,
    description: (
      <>
        Connect to our API and build your own applications on top of NYYU.
      </>
    ),
    link: '/docs/api/getting-started',
  },
  // Repeat the items for the second row
  {
    title: 'Marketplace Listings',
    Svg: require('@site/static/img/Listing.svg').default,
    description: (
      <>
      Listing applications for crowdfunding, commodities, real estate, and electricty.
      </>
    ),
    link: '/docs/services/start-up-listing',
  },
  {
    title: 'Recent Features & Updates',
    Svg: require('@site/static/img/Changelog.svg').default,
    description: (
      <>
      Stay informed with the latest enhancements and additions to the NYYU platform.
      </>
    ),
    link: '/docs/changelog/changelog',
  },
  {
    title: 'Support',
    Svg: require('@site/static/img/Support.svg').default,
    description: (
      <>
        Submit a support ticket or connct with one of our live agents.
      </>
    ),
    link: '/',
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link} className={styles.featureBox} style={{ textDecoration: 'none' }}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3" className={styles.featureText}>{title}</Heading>
          <p className={styles.featureText}>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div>
        <FAQSection />
        </div>
      </div>
    </section>
  );
}