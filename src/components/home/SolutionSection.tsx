"use client";

import React from "react";
import { Section } from "../Section";
import { Container } from "../Container";
import styles from "./Home.module.css";
import {
    Shield,
    Fingerprint,
    Database,
    Server,
    Smartphone,
    Monitor,
} from "lucide-react";
import { useScrollReveal } from "../useScrollReveal";

export const SolutionSection = () => {
    const ref = useScrollReveal<HTMLDivElement>();

    return (
        <Section style={{ backgroundColor: "rgba(241, 245, 249, 0.5)" }}>
            <Container>
                <div className={styles.sectionTitle} style={{ marginBottom: "4rem" }}>
                    <h2>dmfIAM: One Identity Provider. Full Control.</h2>
                    <p className={styles.sectionSubtitle}>
                        dmfIAM acts as the central Identity Provider. It manages who
                        identities are, how they authenticate, what they can access, and how
                        access changes over time. All from a single, auditable platform.
                    </p>
                </div>

                <div
                    ref={ref}
                    className={`${styles.solutionGrid} scroll-reveal`}
                >
                    {/* Left: Sources */}
                    <div className={styles.solutionCard}>
                        <h3 className={styles.solutionLabel}>Directories &amp; Sources</h3>
                        <div className={styles.solutionSourceItem}>
                            <Database size={20} color="#3B82F6" />
                            <span>Entra ID (Azure AD)</span>
                        </div>
                        <div className={styles.solutionSourceItem}>
                            <Server size={20} color="#6366F1" />
                            <span>Active Directory</span>
                        </div>
                        <div className={styles.solutionSourceItem}>
                            <Fingerprint size={20} color="#A855F7" />
                            <span>HR Systems</span>
                        </div>
                    </div>

                    {/* Middle: dmfIAM */}
                    <div className={styles.solutionCenter}>
                        <div className={styles.solutionCenterIcon}>
                            <Shield size={48} strokeWidth={1.5} />
                        </div>
                        <h3 className={styles.solutionCenterTitle}>dmfIAM</h3>
                        <p className={styles.solutionCenterSub}>
                            Central Identity Provider + Governance Engine
                        </p>
                    </div>

                    {/* Right: Targets */}
                    <div className={styles.solutionCard}>
                        <h3 className={styles.solutionLabel}>
                            Applications &amp; Services
                        </h3>
                        <div className={styles.solutionSourceItem}>
                            <Monitor size={20} color="#10B981" />
                            <span>SaaS Applications</span>
                        </div>
                        <div className={styles.solutionSourceItem}>
                            <Server size={20} color="#F97316" />
                            <span>Legacy / On-Prem</span>
                        </div>
                        <div className={styles.solutionSourceItem}>
                            <Smartphone size={20} color="#EC4899" />
                            <span>Mobile Apps</span>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
