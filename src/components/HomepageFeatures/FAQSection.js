import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const faqArticles = [
  { title: 'What is NYYU?', link: '/' },
  { title: 'How to sign up?', link: '/' },
  { title: 'How to use the wallet?', link: '/' },
  { title: 'How to trade?', link: '/' },
  { title: 'What are the fees?', link: '/' },
  { title: 'How do I access customer support services?', link: '/' },
  { title: 'How to reset password?', link: '/' },
  { title: 'How to enable 2FA?', link: '/' },
  { title: 'What are the supported currencies?', link: '/' },
  { title: 'How to withdraw funds?', link: '/' },
  { title: 'How to deposit funds?', link: '/' },
  { title: 'What is the invite program?', link: '/' },
];

export default function FAQSection() {
  return (
    <section className={styles.faqSection}>
      <div className="container">
        <h2 className={styles.faqTitle}>Frequently Asked Questions (FAQ)</h2>
        <div className={styles.faqColumns}>
          <p className={styles.faqColumn}>
            {faqArticles.slice(0, 6).map((article, idx) => (
              <p key={idx} className={styles.faqItem}>
                <Link to={article.link} className={styles.faqArticleLink}>{article.title}</Link>
              </p>
            ))}
          </p>
          <p className={styles.faqColumn}>
            {faqArticles.slice(6).map((article, idx) => (
              <p key={idx} className={styles.faqItem}>
                <Link to={article.link} className={styles.faqArticleLink}>{article.title}</Link>
              </p>
            ))}
          </p>
        </div>
        <Link to="/" className={styles.moreLink}>More FAQs</Link>
      </div>
    </section>
  );
}