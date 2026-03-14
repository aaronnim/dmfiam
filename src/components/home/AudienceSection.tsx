"use client";

import React from "react";
import { Section } from "../Section";
import { Container } from "../Container";
import styles from "./Home.module.css";
import { Zap, Landmark, Stethoscope, Factory, Scale } from "lucide-react";
import { useScrollReveal } from "../useScrollReveal";

export const AudienceSection = () => {
    const ref = useScrollReveal<HTMLDivElement>();

    const industries = [
        { icon: Zap, label: "Infrastructure & Utilities" },
        { icon: Landmark, label: "Financial Services" },
        { icon: Stethoscope, label: "Healthcare" },
        { icon: Factory, label: "Manufacturing" },
        { icon: Scale, label: "Public Sector & Regulated" },
    ];

    return (
        <Section className="bg-muted-base" style={{ padding: "8rem 0" }}>
            <Container>
                <div className={styles.sectionTitle} style={{ marginBottom: "2.5rem" }}>
                    <h2>Designed for Regulated and Critical Environments</h2>
                    <p className={styles.sectionSubtitle}>
                        Built to meet strict compliance requirements where standard IAM
                        solutions fall short.
                    </p>
                </div>

                <div
                    ref={ref}
                    className={`${styles.audienceContainer} scroll-reveal`}
                >
                    {industries.map((item, i) => (
                        <div key={i} className={styles.audiencePill}>
                            <item.icon
                                size={18}
                                style={{ color: "var(--muted-foreground)" }}
                            />
                            <span className={styles.audiencePillLabel}>{item.label}</span>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};
