"use client";

import React from "react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import {
    FileCheck,
    Lock,
    History,
    Eye,
    Shield,
    ShieldCheck,
} from "lucide-react";
import { useScrollReveal } from "@/components/useScrollReveal";
import styles from "./Compliance.module.css";

export default function CompliancePage() {
    const pillarsRef = useScrollReveal<HTMLDivElement>();
    const iktRef = useScrollReveal<HTMLDivElement>();
    const standardsRef = useScrollReveal<HTMLDivElement>();
    const ctaRef = useScrollReveal<HTMLDivElement>();

    return (
        <>
            <PageHero
                title="Identity as a Regulated Control"
                subtitle="When identity is the system of record, governance becomes enforceable — not advisory."
            />

            {/* Pillars Grid */}
            <Section>
                <Container>
                    <div
                        ref={pillarsRef}
                        className={`${styles.pillarsGrid} scroll-reveal`}
                    >
                        <div className={styles.pillarCard}>
                            <FileCheck size={32} className={styles.pillarIcon} />
                            <h3 className={styles.pillarTitle}>Enforced JML</h3>
                            <p className={styles.pillarDesc}>
                                Automated joiner, mover, and leaver processes ensure zero
                                unauthorized access.
                            </p>
                        </div>

                        <div className={styles.pillarCard}>
                            <Lock size={32} className={styles.pillarIcon} />
                            <h3 className={styles.pillarTitle}>Central Policies</h3>
                            <p className={styles.pillarDesc}>
                                Define access policies once and enforce them everywhere.
                            </p>
                        </div>

                        <div className={styles.pillarCard}>
                            <History size={32} className={styles.pillarIcon} />
                            <h3 className={styles.pillarTitle}>Immutable Audit</h3>
                            <p className={styles.pillarDesc}>
                                Every access decision and change is logged in a tamper-evident
                                trail.
                            </p>
                        </div>

                        <div className={styles.pillarCard}>
                            <Eye size={32} className={styles.pillarIcon} />
                            <h3 className={styles.pillarTitle}>Separation of Duties</h3>
                            <p className={styles.pillarDesc}>
                                Prevent conflict of interest with preventive controls.
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* IKT Banner */}
            <Section className="bg-muted-base" style={{ padding: "8rem 0" }}>
                <Container>
                    <div ref={iktRef} className={`${styles.iktBanner} scroll-reveal`}>
                        <h2 className={styles.iktTitle}>
                            Critical Infrastructure &amp; IKT
                        </h2>
                        <div className={styles.iktGrid}>
                            <ul className={styles.iktList}>
                                <li className={styles.iktItem}>
                                    <div className={styles.iktBullet} />
                                    <span className={styles.iktItemText}>
                                        Acts as a single identity authority for OT and IT
                                        environments.
                                    </span>
                                </li>
                                <li className={styles.iktItem}>
                                    <div className={styles.iktBullet} />
                                    <span className={styles.iktItemText}>
                                        Governs privileged and service accounts strictly.
                                    </span>
                                </li>
                            </ul>
                            <ul className={styles.iktList}>
                                <li className={styles.iktItem}>
                                    <div className={styles.iktBullet} />
                                    <span className={styles.iktItemText}>
                                        Provides traceable authentication and authorization for
                                        audit.
                                    </span>
                                </li>
                                <li className={styles.iktItem}>
                                    <div className={styles.iktBullet} />
                                    <span className={styles.iktItemText}>
                                        Integrates with infrastructure and physical access systems.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Standards Badges */}
            <Section>
                <Container>
                    <div
                        style={{
                            textAlign: "center",
                            marginBottom: "2rem",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "1.875rem",
                                fontWeight: 700,
                                marginBottom: "0.75rem",
                            }}
                        >
                            Compliance Standards Supported
                        </h2>
                    </div>
                    <div
                        ref={standardsRef}
                        className={`${styles.standardsContainer} scroll-reveal`}
                    >
                        <div className={styles.standardBadge}>
                            <Shield size={16} />
                            nFADP
                        </div>
                        <div className={styles.standardBadge}>
                            <ShieldCheck size={16} />
                            GDPR
                        </div>
                        <div className={styles.standardBadge}>
                            <Lock size={16} />
                            IKT
                        </div>
                        <div className={styles.standardBadge}>
                            <FileCheck size={16} />
                            ISO 27001
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
                            Discuss Your Compliance Requirements
                        </h2>
                        <p className={styles.ctaSub}>
                            Let our team walk you through how dmfIAM supports your regulatory
                            framework.
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
