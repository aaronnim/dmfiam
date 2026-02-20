"use client";

import React from "react";
import { Section } from "../Section";
import { Container } from "../Container";
import { Button } from "../Button";
import styles from "./Home.module.css";
import { Shield, Lock, FileCheck, CheckCircle } from "lucide-react";
import { useScrollReveal } from "../useScrollReveal";

export const TrustSection = () => {
    const ref = useScrollReveal<HTMLDivElement>();

    return (
        <Section style={{ backgroundColor: "rgba(241, 245, 249, 0.5)", padding: "6rem 0" }}>
            <Container>
                <div className={styles.sectionTitle} style={{ marginBottom: "3rem" }}>
                    <h2>Trusted Identity Provider for Swiss Organizations</h2>
                </div>

                <div
                    ref={ref}
                    className={`${styles.trustContainer} scroll-reveal`}
                >
                    <div className={styles.trustItem}>
                        <Shield size={18} style={{ color: "var(--navy)" }} />
                        <span className={styles.trustItemLabel}>
                            Enterprise Identity Provider
                        </span>
                    </div>
                    <div className={styles.trustItem}>
                        <Lock size={18} style={{ color: "var(--navy)" }} />
                        <span className={styles.trustItemLabel}>
                            Open-source foundation
                        </span>
                    </div>
                    <div className={styles.trustItem}>
                        <FileCheck size={18} style={{ color: "var(--navy)" }} />
                        <span className={styles.trustItemLabel}>
                            Swiss compliance focus (nFADP / GDPR)
                        </span>
                    </div>
                    <div className={styles.trustItem}>
                        <CheckCircle size={18} style={{ color: "var(--navy)" }} />
                        <span className={styles.trustItemLabel}>Proven in production</span>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export const FinalCta = () => {
    const ref = useScrollReveal<HTMLDivElement>();

    return (
        <Section grainy className={styles.finalCtaWrapper}>
            <Container>
                {/* Animated gradient orbs */}
                <div className={styles.ctaOrb1} />
                <div className={styles.ctaOrb2} />

                <div ref={ref} className={`${styles.finalCtaContent} scroll-reveal-scale`}>
                    <h2 className={styles.finalCtaTitle}>
                        Take Back Control of Identity
                    </h2>
                    <p className={styles.finalCtaSubtitle}>
                        Stop managing users manually. Start governing identity
                        automatically.
                    </p>
                    <div className={styles.finalCtaButtons}>
                        <a href="https://calendly.com" target="_blank">
                            <Button
                                size="lg"
                                style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
                            >
                                Request a demo
                            </Button>
                        </a>
                        <a href="/contact">
                            <Button variant="secondary" size="lg">
                                Talk to an expert
                            </Button>
                        </a>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
