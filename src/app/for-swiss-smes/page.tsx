"use client";

import React from "react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import Link from "next/link";
import { Check, X, CheckCircle, Server, Shield } from "lucide-react";
import { useScrollReveal } from "@/components/useScrollReveal";
import styles from "./Sme.module.css";

export default function SwissSmesPage() {
    const cardsRef = useScrollReveal<HTMLDivElement>();
    const compRef = useScrollReveal<HTMLDivElement>();
    const ctaRef = useScrollReveal<HTMLDivElement>();

    return (
        <>
            <PageHero
                title="Built for Swiss SMEs"
                subtitle="Enabling Swiss organizations to secure their digital future with limited IT resources."
                badges={[
                    { icon: Server, label: "Swiss Hosting" },
                    { icon: Shield, label: "nFADP Ready" },
                ]}
            />

            {/* Value Props */}
            <Section>
                <Container>
                    <div
                        ref={cardsRef}
                        className={`${styles.cardsGrid} scroll-reveal`}
                    >
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>Automation First</h3>
                            <p className={styles.cardDesc}>
                                Swiss SMEs often have small IT teams. dmfIAM automates the heavy
                                lifting of user provisioning and access management.
                            </p>
                            <ul className={styles.checkList}>
                                <li className={styles.checkItem}>
                                    <Check size={16} className={styles.checkIcon} />
                                    <span>Auto-onboarding</span>
                                </li>
                                <li className={styles.checkItem}>
                                    <Check size={16} className={styles.checkIcon} />
                                    <span>Self-service resets</span>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>Swiss Compliance</h3>
                            <p className={styles.cardDesc}>
                                Data stays in Switzerland. Our architecture is designed to meet
                                strict data residency and nFADP requirements.
                            </p>
                            <ul className={styles.checkList}>
                                <li className={styles.checkItem}>
                                    <Check size={16} className={styles.checkIcon} />
                                    <span>Swiss Hosting</span>
                                </li>
                                <li className={styles.checkItem}>
                                    <Check size={16} className={styles.checkIcon} />
                                    <span>nFADP Ready</span>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>Predictable Operations</h3>
                            <p className={styles.cardDesc}>
                                Clear pricing and managed service options mean you don&apos;t
                                need a dedicated IAM team to stay secure.
                            </p>
                            <ul className={styles.checkList}>
                                <li className={styles.checkItem}>
                                    <Check size={16} className={styles.checkIcon} />
                                    <span>Managed Services</span>
                                </li>
                                <li className={styles.checkItem}>
                                    <Check size={16} className={styles.checkIcon} />
                                    <span>Flat Pricing</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Comparison */}
            <Section className="bg-muted-base" style={{ padding: "8rem 0" }}>
                <Container>
                    <div
                        style={{
                            textAlign: "center",
                            marginBottom: "3rem",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "1.875rem",
                                fontWeight: 700,
                                marginBottom: "0.75rem",
                            }}
                        >
                            The Difference dmfIAM Makes
                        </h2>
                    </div>
                    <div
                        ref={compRef}
                        className={`${styles.comparisonGrid} scroll-reveal`}
                    >
                        {/* Without */}
                        <div className={`${styles.comparisonCard} ${styles.without}`}>
                            <h3 className={`${styles.comparisonTitle} ${styles.red}`}>
                                <X size={20} />
                                Without dmfIAM
                            </h3>
                            <ul className={styles.comparisonList}>
                                <li className={styles.comparisonItem}>
                                    <X size={16} className={styles.compXIcon} />
                                    <span>Manual onboarding across multiple systems</span>
                                </li>
                                <li className={styles.comparisonItem}>
                                    <X size={16} className={styles.compXIcon} />
                                    <span>Orphan accounts from missed offboarding</span>
                                </li>
                                <li className={styles.comparisonItem}>
                                    <X size={16} className={styles.compXIcon} />
                                    <span>No central view of who has access to what</span>
                                </li>
                                <li className={styles.comparisonItem}>
                                    <X size={16} className={styles.compXIcon} />
                                    <span>Audit preparation takes weeks</span>
                                </li>
                            </ul>
                        </div>

                        {/* With */}
                        <div className={`${styles.comparisonCard} ${styles.with}`}>
                            <h3 className={`${styles.comparisonTitle} ${styles.green}`}>
                                <CheckCircle size={20} />
                                With dmfIAM
                            </h3>
                            <ul className={styles.comparisonList}>
                                <li className={styles.comparisonItem}>
                                    <Check size={16} className={styles.compCheckIcon} />
                                    <span>Automated user provisioning from HR</span>
                                </li>
                                <li className={styles.comparisonItem}>
                                    <Check size={16} className={styles.compCheckIcon} />
                                    <span>Instant deprovisioning on departure</span>
                                </li>
                                <li className={styles.comparisonItem}>
                                    <Check size={16} className={styles.compCheckIcon} />
                                    <span>Central dashboard for access governance</span>
                                </li>
                                <li className={styles.comparisonItem}>
                                    <Check size={16} className={styles.compCheckIcon} />
                                    <span>Always-on audit readiness</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section
                grainy
                style={{ borderTop: "1px solid var(--border)" }}
            >
                <Container>
                    <div ref={ctaRef} className={`${styles.ctaWrapper} scroll-reveal`}>
                        <h2 className={styles.ctaTitle}>
                            Talk to an Expert About Your Needs
                        </h2>
                        <p className={styles.ctaSub}>
                            Learn how dmfIAM can help your organization stay secure and
                            compliant.
                        </p>
                        <Link href="/contact">
                            <Button size="lg">Get in Touch</Button>
                        </Link>
                    </div>
                </Container>
            </Section>
        </>
    );
}
