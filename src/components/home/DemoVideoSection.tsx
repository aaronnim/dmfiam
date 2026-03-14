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
        <Section className="bg-muted-base" style={{ padding: "8rem 0" }}>
            <Container>
                <div ref={ref} className={`${styles.videoContainer} scroll-reveal`}>
                    <div className={styles.videoWrapper}>
                        <div className={styles.videoPlaceholder} style={{ padding: 0, border: 'none' }}>
                            <iframe
                                src="https://dmfch.sharepoint.com/sites/IAM/_layouts/15/embed.aspx?UniqueId=b9d344cc-a63a-4c4c-827a-02ee27a8107d&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                allowFullScreen
                                title="Who Has Access (Baseline Control).mp4"
                                style={{ borderRadius: '0.75rem' }}
                            ></iframe>
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
