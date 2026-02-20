"use client";

import React from "react";
import { Section } from "../Section";
import { Container } from "../Container";
import styles from "./Home.module.css";
import { Cloud, Server } from "lucide-react";
import { useScrollReveal } from "../useScrollReveal";

export const DeploymentSection = () => {
    const ref = useScrollReveal<HTMLDivElement>();

    return (
        <Section>
            <Container>
                <div className={styles.sectionTitle} style={{ marginBottom: "3rem" }}>
                    <h2>SaaS or On-Prem — Without Compromise</h2>
                </div>
                <div
                    ref={ref}
                    className={`${styles.deploymentGrid} scroll-reveal`}
                >
                    {/* SaaS */}
                    <div
                        className={styles.deploymentCard}
                        style={
                            { "--deployment-accent": "#3B82F6" } as React.CSSProperties
                        }
                    >
                        <Cloud size={40} color="#3B82F6" />
                        <h3 className={styles.deploymentCardTitle}>SaaS</h3>
                        <ul className={styles.deploymentList}>
                            <li className={styles.deploymentListItem}>• Swiss-hosted</li>
                            <li className={styles.deploymentListItem}>
                                • Managed operations
                            </li>
                            <li className={styles.deploymentListItem}>• SLA-backed</li>
                        </ul>
                    </div>

                    {/* On-Prem */}
                    <div
                        className={styles.deploymentCard}
                        style={
                            { "--deployment-accent": "#6366F1" } as React.CSSProperties
                        }
                    >
                        <Server size={40} color="#6366F1" />
                        <h3 className={styles.deploymentCardTitle}>On-Prem</h3>
                        <ul className={styles.deploymentList}>
                            <li className={styles.deploymentListItem}>• Full sovereignty</li>
                            <li className={styles.deploymentListItem}>
                                • Internal control
                            </li>
                            <li className={styles.deploymentListItem}>
                                • Suitable for critical infrastructure
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
