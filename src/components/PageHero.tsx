import React from "react";
import { Section } from "./Section";
import { Container } from "./Container";
import { LucideIcon } from "lucide-react";
import styles from "./PageHero.module.css";

interface Badge {
    icon: LucideIcon;
    label: string;
}

interface PageHeroProps {
    title: string;
    subtitle: string;
    centered?: boolean;
    badges?: Badge[];
}

export const PageHero = ({
    title,
    subtitle,
    centered = false,
    badges,
}: PageHeroProps) => {
    return (
        <Section grainy className={styles.wrapper}>
            <Container>
                <div className={`${styles.inner} ${centered ? styles.centered : ""}`}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.subtitle}>{subtitle}</p>
                    {badges && badges.length > 0 && (
                        <div className={styles.badges}>
                            {badges.map((badge, i) => (
                                <span key={i} className={styles.badge}>
                                    <badge.icon size={14} />
                                    {badge.label}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </Container>
        </Section>
    );
};
