"use client";

import React from "react";
import { Section } from "../Section";
import { Container } from "../Container";
import { Button } from "../Button";
import styles from "./Home.module.css";
import { Play, CheckCircle } from "lucide-react";
import { useScrollReveal } from "../useScrollReveal";

export const DemoVideoSection = () => {
    const ref = useScrollReveal<HTMLDivElement>();

    return (
        <Section
            style={{
                backgroundColor: "rgba(241, 245, 249, 0.5)",
                borderBottom: "1px solid var(--border)",
            }}
        >
            <Container>
                <div ref={ref} className={`${styles.videoContainer} scroll-reveal`}>
                    <div className={styles.videoWrapper}>
                        <div className={styles.videoPlaceholder}>
                            <div className={styles.videoOverlay} />
                            <div className={styles.videoPlayBtn}>
                                <Play
                                    size={32}
                                    color="var(--accent)"
                                    style={{ marginLeft: "4px" }}
                                    fill="currentColor"
                                />
                            </div>
                            <p className={styles.videoPlayLabel}>
                                Watch the 2-minute overview
                            </p>
                        </div>
                    </div>

                    <div className={styles.videoContent}>
                        <div>
                            <h2 className={styles.videoTitle}>See dmfIAM in Action</h2>
                            <p className={styles.videoSubtitle}>
                                Experience how dmfIAM unifies your identity infrastructure in a
                                single pane of glass.
                            </p>
                        </div>

                        <ul className={styles.videoList}>
                            <li className={styles.videoItem}>
                                <CheckCircle
                                    size={20}
                                    color="var(--accent)"
                                    style={{ marginTop: "0.25rem", flexShrink: 0 }}
                                />
                                <span>
                                    <strong>Central Identity Provider:</strong> Manage all users
                                    from one place.
                                </span>
                            </li>
                            <li className={styles.videoItem}>
                                <CheckCircle
                                    size={20}
                                    color="var(--accent)"
                                    style={{ marginTop: "0.25rem", flexShrink: 0 }}
                                />
                                <span>
                                    <strong>Entra &amp; AD Integration:</strong> Seamless
                                    bi-directional sync.
                                </span>
                            </li>
                            <li className={styles.videoItem}>
                                <CheckCircle
                                    size={20}
                                    color="var(--accent)"
                                    style={{ marginTop: "0.25rem", flexShrink: 0 }}
                                />
                                <span>
                                    <strong>Governance Workflows:</strong> Automated access
                                    reviews and JML.
                                </span>
                            </li>
                        </ul>

                        <div>
                            <a href="https://calendly.com" target="_blank">
                                <Button variant="secondary" size="md">
                                    Book a live demo
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
