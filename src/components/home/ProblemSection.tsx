"use client";

import React from "react";
import { Section } from "../Section";
import { Container } from "../Container";
import styles from "./Home.module.css";
import { Users, FileSpreadsheet, ShieldAlert, Server } from "lucide-react";
import { useScrollReveal } from "../useScrollReveal";

export const ProblemSection = () => {
    const ref = useScrollReveal<HTMLDivElement>();

    return (
        <Section>
            <Container>
                <div ref={ref} className={`${styles.problemContainer} scroll-reveal`}>
                    {/* Left: Text */}
                    <div className={styles.problemText}>
                        <h2
                            style={{
                                fontSize: "1.875rem",
                                fontWeight: 700,
                                marginBottom: "1.5rem",
                            }}
                        >
                            Identity Has Become Fragmented and Risky
                        </h2>
                        <p
                            style={{
                                fontSize: "1.125rem",
                                color: "var(--muted-foreground)",
                                marginBottom: "1.5rem",
                            }}
                        >
                            In many organizations, identity is spread across directories,
                            applications, and manual processes.
                        </p>

                        <ul className={styles.problemList}>
                            <li className={styles.problemItem}>
                                <div className={styles.problemBullet} />
                                <span style={{ color: "var(--muted-foreground)" }}>
                                    Authentication is split across systems
                                </span>
                            </li>
                            <li className={styles.problemItem}>
                                <div className={styles.problemBullet} />
                                <span style={{ color: "var(--muted-foreground)" }}>
                                    Joiner–Mover–Leaver processes are manual
                                </span>
                            </li>
                            <li className={styles.problemItem}>
                                <div className={styles.problemBullet} />
                                <span style={{ color: "var(--muted-foreground)" }}>
                                    Admin and service accounts are unmanaged
                                </span>
                            </li>
                            <li className={styles.problemItem}>
                                <div className={styles.problemBullet} />
                                <span style={{ color: "var(--muted-foreground)" }}>
                                    Audit evidence is collected too late
                                </span>
                            </li>
                        </ul>

                        <p
                            style={{
                                marginTop: "1.5rem",
                                fontWeight: 600,
                                color: "var(--accent)",
                            }}
                        >
                            This fragmentation creates operational and regulatory risk.
                        </p>
                    </div>

                    {/* Right: Abstract Fragmented Visual */}
                    <div className={styles.problemVisual}>
                        <div
                            className={styles.problemCard}
                            style={{
                                top: "2.5rem",
                                left: "2.5rem",
                                width: "12rem",
                                transform: "rotate(-6deg)",
                                zIndex: 10,
                            }}
                        >
                            <Users size={20} color="#3B82F6" />
                            <span className={styles.problemCardLabel}>Directory</span>
                        </div>

                        <div
                            className={styles.problemCard}
                            style={{
                                top: "5rem",
                                right: "2.5rem",
                                width: "12rem",
                                transform: "rotate(3deg)",
                                zIndex: 20,
                            }}
                        >
                            <Server size={20} color="#6366F1" />
                            <span className={styles.problemCardLabel}>Legacy App</span>
                        </div>

                        <div
                            className={styles.problemCard}
                            style={{
                                bottom: "5rem",
                                left: "5rem",
                                width: "12rem",
                                transform: "rotate(12deg)",
                                zIndex: 30,
                            }}
                        >
                            <FileSpreadsheet size={20} color="#10B981" />
                            <span className={styles.problemCardLabel}>Spreadsheet</span>
                        </div>

                        <div
                            className={styles.problemCardRisk}
                            style={{
                                bottom: "10rem",
                                right: "1rem",
                                width: "10rem",
                                transform: "rotate(-3deg)",
                                zIndex: 40,
                            }}
                        >
                            <ShieldAlert size={20} />
                            <span className={styles.problemCardLabel}>Risk</span>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
