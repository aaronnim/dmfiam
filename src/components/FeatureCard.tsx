import React from 'react';
import styles from './FeatureCard.module.css';
import { LucideIcon } from 'lucide-react';
import clsx from 'clsx';

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    bullets?: string[];
    className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, bullets, className }) => {
    return (
        <div className={clsx(styles.card, className)}>
            <div className={styles.iconWrapper}>
                <Icon size={24} />
            </div>
            <h3 className={styles.title}>{title}</h3>
            {bullets && (
                <ul className={styles.bulletList}>
                    {bullets.map((b, i) => (
                        <li key={i} className={styles.bulletItem}>{b}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};
