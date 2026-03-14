"use client";

import React from "react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Mail, MapPin } from "lucide-react";
import { useScrollReveal } from "@/components/useScrollReveal";
import styles from "./Contact.module.css";

export default function ContactPage() {
    const formRef = useScrollReveal<HTMLDivElement>();

    return (
        <>
            <PageHero
                title="Talk to the dmfIAM Team"
                subtitle="Have questions about deployment, pricing, or compliance? We're here to help."
                centered
            />

            <Section>
                <Container>
                    <div ref={formRef} className={`${styles.grid} scroll-reveal`}>
                        {/* Left: Form */}
                        <div className={styles.formWrapper}>
                            <h2 className={styles.formTitle}>Get in Touch</h2>

                            <form
                                onSubmit={(e) => e.preventDefault()}
                                style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                            >
                                <div className={styles.fieldGroup}>
                                    <label htmlFor="name" className={styles.label}>
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className={styles.input}
                                        placeholder="Your name"
                                    />
                                </div>

                                <div className={styles.fieldGroup}>
                                    <label htmlFor="email" className={styles.label}>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className={styles.input}
                                        placeholder="work@company.com"
                                    />
                                </div>

                                <div className={styles.fieldGroup}>
                                    <label htmlFor="org" className={styles.label}>
                                        Organization
                                    </label>
                                    <input
                                        type="text"
                                        id="org"
                                        className={styles.input}
                                        placeholder="Company Name"
                                    />
                                </div>

                                <div className={styles.fieldGroup}>
                                    <label htmlFor="message" className={styles.label}>
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className={styles.textarea}
                                        placeholder="How can we help?"
                                    />
                                </div>

                                <Button type="submit" size="lg">
                                    Send Message
                                </Button>
                            </form>
                        </div>

                        {/* Right: Info + Demo Card */}
                        <div className={styles.sideCards}>
                            <div className={styles.infoCard}>
                                <h3 className={styles.infoCardTitle}>Contact Information</h3>
                                <ul className={styles.infoList}>
                                    <li className={styles.infoItem}>
                                        <Mail size={20} className={styles.infoIcon} />
                                        <a
                                            href="mailto:contact@dmfiam.ch"
                                            className={styles.infoLink}
                                        >
                                            IAM@digitalmediafactory.ch
                                        </a>
                                    </li>
                                    <li className={styles.infoItem}>
                                        <MapPin size={20} className={styles.infoIcon} />
                                        <span>Zürich, Switzerland</span>
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.demoCard}>
                                <h3 className={styles.demoCardTitle}>Ready for a Demo?</h3>
                                <p className={styles.demoCardDesc}>
                                    See dmfIAM in action with a personalized walkthrough tailored
                                    to your organization.
                                </p>
                                <a href="https://calendly.com" target="_blank">
                                    <Button variant="secondary" size="lg">
                                        Request a Demo
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
