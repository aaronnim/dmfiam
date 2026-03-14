"use client";

import React from "react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Database, Shield, Activity, Lock } from "lucide-react";
import { useScrollReveal } from "@/components/useScrollReveal";
import styles from "./Product.module.css";

export default function ProductPage() {
    const capRef = useScrollReveal<HTMLDivElement>();
    const archRef = useScrollReveal<HTMLDivElement>();
    const ctaRef = useScrollReveal<HTMLDivElement>();

    return (
        <>
            <PageHero
                title="Central Identity Provider with Built-In Governance"
                subtitle="dmfIAM is not an add-on or overlay. It is the identity authority that applications, directories, and services rely on."
            />

            <Section className="bg-muted-base" style={{ padding: "6rem 0" }}>
                <Container>
                    <div ref={capRef} className={`${styles.contentGrid} scroll-reveal`}>
                        {/* Left: Core Capabilities */}
                        <div className={styles.capabilitiesGrid}>
                            <div className={styles.capabilityItem}>
                                <div className={`${styles.capabilityIcon} ${styles.blue}`}>
                                    <Database size={24} />
                                </div>
                                <div>
                                    <h3 className={styles.capabilityTitle}>
                                        Authority &amp; Storage
                                    </h3>
                                    <p className={styles.capabilityDesc}>
                                        dmfIAM stores and governs identities as the single source of
                                        truth, synchronizing downstream to AD and Entra.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.capabilityItem}>
                                <div className={`${styles.capabilityIcon} ${styles.indigo}`}>
                                    <Shield size={24} />
                                </div>
                                <div>
                                    <h3 className={styles.capabilityTitle}>
                                        Central Authentication
                                    </h3>
                                    <p className={styles.capabilityDesc}>
                                        Applications authenticate against dmfIAM using OIDC/SAML,
                                        ensuring consistent policy enforcement.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.capabilityItem}>
                                <div className={`${styles.capabilityIcon} ${styles.emerald}`}>
                                    <Activity size={24} />
                                </div>
                                <div>
                                    <h3 className={styles.capabilityTitle}>
                                        Lifecycle Automation
                                    </h3>
                                    <p className={styles.capabilityDesc}>
                                        Automated Joiner-Mover-Leaver workflows triggered by HR
                                        systems or manual requests.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.capabilityItem}>
                                <div className={`${styles.capabilityIcon} ${styles.amber}`}>
                                    <Lock size={24} />
                                </div>
                                <div>
                                    <h3 className={styles.capabilityTitle}>
                                        Authorization Decisions
                                    </h3>
                                    <p className={styles.capabilityDesc}>
                                        All authorization decisions are made centrally, enforcing
                                        policies across every connected system.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Architecture Diagram */}
                        <div className={styles.archCard}>
                            <h3 className={styles.archTitle}>Architecture Overview</h3>
                            <div className={styles.archFlow}>
                                <div className={styles.archBox}>HR System / Source</div>
                                <div className={styles.archArrow}>↓ Synchronization</div>
                                <div className={styles.archCenter}>
                                    <div className={styles.archCenterName}>dmfIAM Core</div>
                                    <div className={styles.archCenterSub}>
                                        Policy Engine • Governance • Audit
                                    </div>
                                </div>
                                <div className={styles.archArrow}>↓ Federation &amp; Sync</div>
                                <div className={styles.archTargets}>
                                    <div className={styles.archBox}>Active Directory</div>
                                    <div className={styles.archBox}>SaaS Apps</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* CTA Section */}
            <Section
                grainy
                style={{ borderTop: "1px solid var(--border)" }}
            >
                <Container>
                    <div ref={ctaRef} className={`${styles.ctaWrapper} scroll-reveal`}>
                        <h2 className={styles.ctaTitle}>See dmfIAM in Action</h2>
                        <p className={styles.ctaSub}>
                            Discover how dmfIAM can centralize and govern your identity
                            infrastructure.
                        </p>
                        <a href="https://calendly.com" target="_blank">
                            <Button size="lg">Book a Call</Button>
                        </a>
                    </div>
                </Container>
            </Section>
        </>
    );
}
