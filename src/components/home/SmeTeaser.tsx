"use client";

import React from "react";
import { Section } from "../Section";
import { Container } from "../Container";
import { Button } from "../Button";
import Link from "next/link";
import styles from "./Home.module.css";
import { Check } from "lucide-react";
import { useScrollReveal } from "../useScrollReveal";

export const SmeTeaser = () => {
    const ref = useScrollReveal<HTMLDivElement>();

    return (
        <Section grainy>
            <Container>
                <div ref={ref} className={`${styles.smeCard} scroll-reveal`}>
                    <div className={styles.smeContent}>
                        <div style={{ flex: 1 }}>
                            <h2 className={styles.smeTitle}>Built for Swiss SMEs</h2>
                            <p className={styles.smeDescription}>
                                Swiss SMEs often have limited IT teams, strong compliance
                                expectations, and need automation. dmfIAM simplifies identity
                                without the enterprise complexity.
                            </p>
                            <div style={{ marginTop: "2rem" }}>
                                <Link href="/for-swiss-smes">
                                    <Button variant="secondary" size="lg">
                                        Learn more
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div style={{ flex: 1 }}>
                            <ul className={styles.smeList}>
                                <li className={styles.smeItem}>
                                    <div className={styles.smeCheckIcon}>
                                        <Check size={16} />
                                    </div>
                                    <span className={styles.smeItemLabel}>
                                        Automation of Joiner–Mover–Leaver
                                    </span>
                                </li>
                                <li className={styles.smeItem}>
                                    <div className={styles.smeCheckIcon}>
                                        <Check size={16} />
                                    </div>
                                    <span className={styles.smeItemLabel}>
                                        Swiss Hosting / On-Prem options
                                    </span>
                                </li>
                                <li className={styles.smeItem}>
                                    <div className={styles.smeCheckIcon}>
                                        <Check size={16} />
                                    </div>
                                    <span className={styles.smeItemLabel}>
                                        Reduced audit preparation workload
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
