"use client";

import React from "react";
import { Section } from "../Section";
import { Container } from "../Container";
import { FeatureCard } from "../FeatureCard";
import styles from "./Home.module.css";
import {
    Users,
    ShieldCheck,
    Lock,
    KeyRound,
    Network,
    FileText,
} from "lucide-react";
import { useScrollReveal } from "../useScrollReveal";

export const FeatureGrid = () => {
    const ref = useScrollReveal<HTMLDivElement>();

    const features = [
        {
            icon: Users,
            title: "Identity Lifecycle Management",
            bullets: [
                "Joiner–Mover–Leaver automation",
                "Identity status and lifecycle enforcement",
            ],
        },
        {
            icon: ShieldCheck,
            title: "Central Authorization",
            bullets: [
                "Role-based access control (RBAC)",
                "Policy-driven authorization",
            ],
        },
        {
            icon: Lock,
            title: "Privileged Identity Control",
            bullets: [
                "Admin and service account lifecycle",
                "Clear ownership and accountability",
            ],
        },
        {
            icon: KeyRound,
            title: "Authentication & Federation",
            bullets: [
                "Native authentication",
                "SSO and federation to Entra & AD",
            ],
        },
        {
            icon: Network,
            title: "Integration & Extensibility",
            bullets: [
                "APIs for external systems",
                "Integration with physical access",
            ],
        },
        {
            icon: FileText,
            title: "Governance & Auditability",
            bullets: [
                "Audit logs & access reviews",
                "Approval workflows & self-service",
            ],
        },
    ];

    return (
        <Section>
            <Container>
                <div className={styles.sectionTitle} style={{ marginBottom: "4rem" }}>
                    <h2>What dmfIAM Delivers</h2>
                    <p className={styles.sectionSubtitle}>
                        Centralization, governance, and control.
                    </p>
                </div>
                <div
                    ref={ref}
                    className={`${styles.featureGrid} scroll-reveal`}
                >
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </Container>
        </Section>
    );
};
