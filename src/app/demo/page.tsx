"use client";

import React from "react";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import {
    Play,
    Shield,
    Network,
    Users,
    FileCheck,
    Lock,
    Server,
    CheckCircle,
} from "lucide-react";
import { useScrollReveal } from "@/components/useScrollReveal";
import styles from "./Demo.module.css";

export default function DemoPage() {
    const videoRef = useScrollReveal<HTMLDivElement>();
    const gridRef = useScrollReveal<HTMLDivElement>();
    const timelineRef = useScrollReveal<HTMLDivElement>();
    const ctaRef = useScrollReveal<HTMLDivElement>();

    return (
        <>
            <PageHero
                title="See dmfIAM in Action"
                subtitle="Watch how dmfIAM unifies your identity infrastructure — from HR onboarding to Entra ID federation — in a single pane of glass."
                centered
            />

            {/* Video Section */}
            <Section>
                <Container>
                    <div ref={videoRef} className={`${styles.videoHero} scroll-reveal`}>
                        <div className={styles.videoFrame} style={{ padding: 0, border: 'none', position: 'relative', overflow: 'hidden' }}>
                            <iframe
                                src="https://dmfch.sharepoint.com/sites/IAM/_layouts/15/embed.aspx?UniqueId=b9d344cc-a63a-4c4c-827a-02ee27a8107d&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                allowFullScreen
                                title="Who Has Access (Baseline Control).mp4"
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            ></iframe>
                        </div>
                        <p className={styles.videoCaption}>
                            This demo walks through the core capabilities of dmfIAM — from
                            identity provisioning to federation and audit.
                        </p>
                    </div>
                </Container>
            </Section>

            {/* What You'll See - Highlights */}
            <Section className="bg-muted-base" style={{ padding: "8rem 0" }}>
                <Container>
                    <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                        <h2
                            style={{
                                fontSize: "1.875rem",
                                fontWeight: 700,
                                marginBottom: "0.5rem",
                            }}
                        >
                            What the Demo Covers
                        </h2>
                        <p
                            style={{
                                color: "var(--muted-foreground)",
                                maxWidth: "36rem",
                                margin: "0 auto",
                            }}
                        >
                            Each section of the demo highlights a core capability of the
                            platform.
                        </p>
                    </div>

                    <div
                        ref={gridRef}
                        className={`${styles.highlightsGrid} scroll-reveal`}
                    >
                        {/* Card 1 */}
                        <div className={styles.highlightCard}>
                            <div className={`${styles.cardIcon} ${styles.blue}`}>
                                <Shield size={20} />
                            </div>
                            <h3 className={styles.cardTitle}>Central Identity Provider</h3>
                            <p className={styles.cardDesc}>
                                dmfIAM acts as the single source of truth for all identities in
                                your organization.
                            </p>
                            <ul className={styles.cardBullets}>
                                <li className={styles.cardBulletItem}>
                                    <CheckCircle size={14} className={styles.bulletIcon} />
                                    <span>One place for all user accounts</span>
                                </li>
                                <li className={styles.cardBulletItem}>
                                    <CheckCircle size={14} className={styles.bulletIcon} />
                                    <span>Centralized policy enforcement</span>
                                </li>
                                <li className={styles.cardBulletItem}>
                                    <CheckCircle size={14} className={styles.bulletIcon} />
                                    <span>Role-based access across all systems</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className={styles.highlightCard}>
                            <div className={`${styles.cardIcon} ${styles.indigo}`}>
                                <Network size={20} />
                            </div>
                            <h3 className={styles.cardTitle}>Entra &amp; AD Integration</h3>
                            <p className={styles.cardDesc}>
                                Seamless bi-directional sync between dmfIAM, Active Directory,
                                and Microsoft Entra ID.
                            </p>
                            <ul className={styles.cardBullets}>
                                <li className={styles.cardBulletItem}>
                                    <CheckCircle size={14} className={styles.bulletIcon} />
                                    <span>Real-time directory synchronization</span>
                                </li>
                                <li className={styles.cardBulletItem}>
                                    <CheckCircle size={14} className={styles.bulletIcon} />
                                    <span>SSO via SAML / OIDC federation</span>
                                </li>
                                <li className={styles.cardBulletItem}>
                                    <CheckCircle size={14} className={styles.bulletIcon} />
                                    <span>Hybrid cloud support</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className={styles.highlightCard}>
                            <div className={`${styles.cardIcon} ${styles.emerald}`}>
                                <Users size={20} />
                            </div>
                            <h3 className={styles.cardTitle}>Governance Workflows</h3>
                            <p className={styles.cardDesc}>
                                Automated access reviews and Joiner-Mover-Leaver processes
                                driven by HR data.
                            </p>
                            <ul className={styles.cardBullets}>
                                <li className={styles.cardBulletItem}>
                                    <CheckCircle size={14} className={styles.bulletIcon} />
                                    <span>Automated onboarding from HR</span>
                                </li>
                                <li className={styles.cardBulletItem}>
                                    <CheckCircle size={14} className={styles.bulletIcon} />
                                    <span>Instant deprovisioning on departure</span>
                                </li>
                                <li className={styles.cardBulletItem}>
                                    <CheckCircle size={14} className={styles.bulletIcon} />
                                    <span>Periodic access recertification</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 4 */}
                        <div className={styles.highlightCard}>
                            <div className={`${styles.cardIcon} ${styles.amber}`}>
                                <FileCheck size={20} />
                            </div>
                            <h3 className={styles.cardTitle}>Audit &amp; Compliance</h3>
                            <p className={styles.cardDesc}>
                                Every identity event is logged in an immutable audit trail —
                                always ready for review.
                            </p>
                            <ul className={styles.cardBullets}>
                                <li className={styles.cardBulletItem}>
                                    <CheckCircle size={14} className={styles.bulletIcon} />
                                    <span>Tamper-proof event log</span>
                                </li>
                                <li className={styles.cardBulletItem}>
                                    <CheckCircle size={14} className={styles.bulletIcon} />
                                    <span>nFADP, GDPR, ISO 27001 ready</span>
                                </li>
                                <li className={styles.cardBulletItem}>
                                    <CheckCircle size={14} className={styles.bulletIcon} />
                                    <span>Exportable reports for auditors</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 5 */}
                        <div className={styles.highlightCard}>
                            <div className={`${styles.cardIcon} ${styles.rose}`}>
                                <Lock size={20} />
                            </div>
                            <h3 className={styles.cardTitle}>Authentication &amp; SSO</h3>
                            <p className={styles.cardDesc}>
                                Single sign-on for all your applications — web, mobile, and
                                legacy systems.
                            </p>
                            <ul className={styles.cardBullets}>
                                <li className={styles.cardBulletItem}>
                                    <CheckCircle size={14} className={styles.bulletIcon} />
                                    <span>OIDC / SAML / OAuth 2.0</span>
                                </li>
                                <li className={styles.cardBulletItem}>
                                    <CheckCircle size={14} className={styles.bulletIcon} />
                                    <span>MFA enforcement</span>
                                </li>
                                <li className={styles.cardBulletItem}>
                                    <CheckCircle size={14} className={styles.bulletIcon} />
                                    <span>Self-service password reset</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 6 */}
                        <div className={styles.highlightCard}>
                            <div className={`${styles.cardIcon} ${styles.cyan}`}>
                                <Server size={20} />
                            </div>
                            <h3 className={styles.cardTitle}>Deployment Options</h3>
                            <p className={styles.cardDesc}>
                                Choose between managed SaaS or self-hosted on-prem — both with
                                Swiss data residency.
                            </p>
                            <ul className={styles.cardBullets}>
                                <li className={styles.cardBulletItem}>
                                    <CheckCircle size={14} className={styles.bulletIcon} />
                                    <span>Swiss-hosted SaaS</span>
                                </li>
                                <li className={styles.cardBulletItem}>
                                    <CheckCircle size={14} className={styles.bulletIcon} />
                                    <span>On-premise deployment</span>
                                </li>
                                <li className={styles.cardBulletItem}>
                                    <CheckCircle size={14} className={styles.bulletIcon} />
                                    <span>Air-gapped environments</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* How It Works Timeline */}
            <Section>
                <Container>
                    <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                        <h2
                            style={{
                                fontSize: "1.875rem",
                                fontWeight: 700,
                                marginBottom: "0.5rem",
                            }}
                        >
                            How It Works
                        </h2>
                        <p
                            style={{
                                color: "var(--muted-foreground)",
                                maxWidth: "36rem",
                                margin: "0 auto",
                            }}
                        >
                            A typical dmfIAM implementation from start to finish.
                        </p>
                    </div>

                    <div
                        ref={timelineRef}
                        className={`${styles.timeline} scroll-reveal`}
                    >
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDot}>1</div>
                            <div className={styles.timelineContent}>
                                <h3 className={styles.timelineTitle}>Connect Your HR Source</h3>
                                <p className={styles.timelineDesc}>
                                    Import identities from your HR system or CSV. dmfIAM becomes
                                    the authoritative identity store.
                                </p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDot}>2</div>
                            <div className={styles.timelineContent}>
                                <h3 className={styles.timelineTitle}>
                                    Sync to AD &amp; Entra
                                </h3>
                                <p className={styles.timelineDesc}>
                                    Identities are provisioned downstream to Active Directory and
                                    Microsoft Entra ID automatically.
                                </p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDot}>3</div>
                            <div className={styles.timelineContent}>
                                <h3 className={styles.timelineTitle}>
                                    Configure SSO &amp; Policies
                                </h3>
                                <p className={styles.timelineDesc}>
                                    Set up federation (SAML/OIDC) for your applications, define
                                    access policies, and enable MFA.
                                </p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDot}>4</div>
                            <div className={styles.timelineContent}>
                                <h3 className={styles.timelineTitle}>
                                    Govern &amp; Audit
                                </h3>
                                <p className={styles.timelineDesc}>
                                    Automated lifecycle workflows handle joiners, movers, and
                                    leavers. Every event is logged for compliance.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section grainy style={{ borderTop: "1px solid var(--border)" }}>
                <Container>
                    <div ref={ctaRef} className={`${styles.ctaWrapper} scroll-reveal`}>
                        <h2 className={styles.ctaTitle}>Ready to See It Live?</h2>
                        <p className={styles.ctaSub}>
                            Book a personalized demo with our team and see dmfIAM configured
                            for your environment.
                        </p>
                        <div className={styles.ctaButtons}>
                            <a href="https://calendly.com" target="_blank">
                                <Button size="lg">Book a Live Demo</Button>
                            </a>
                            <Link href="/contact">
                                <Button size="lg" variant="secondary">
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
