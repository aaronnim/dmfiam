import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Container } from './Container';
import { Mail } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.grid}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <div className={styles.logoWrap}>
                            <Logo />
                        </div>
                        <p className={styles.brandDesc}>
                            dmfIAM is an enterprise Identity Provider that centralizes authentication, authorization, and identity lifecycle — built for Swiss regulated environments.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className={styles.colTitle}>Platform</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/product" className={styles.link}>Product</Link></li>
                            <li><Link href="/compliance" className={styles.link}>Compliance</Link></li>
                            <li><Link href="/for-swiss-smes" className={styles.link}>For Swiss SMEs</Link></li>
                            <li><Link href="/contact" className={styles.link}>Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className={styles.colTitle}>Contact</h4>
                        <ul className={styles.linkList}>
                            <li className={styles.contactItem}>
                                <Mail size={16} />
                                <a href="mailto:contact@dmfiam.ch" className={styles.link}>contact@dmfiam.ch</a>
                            </li>
                            <li>
                                <Link href="/contact" className={styles.ctaLink}>
                                    Get in touch &rarr;
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div>
                        &copy; {new Date().getFullYear()} dmfIAM. All rights reserved.
                    </div>
                    <div className={styles.legalLinks}>
                        <a href="#" className={styles.legalLink}>Privacy Policy</a>
                        <a href="#" className={styles.legalLink}>Imprint</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
