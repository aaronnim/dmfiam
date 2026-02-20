"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { Container } from "./Container";
import styles from "./Header.module.css";
import clsx from "clsx";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
    { name: "Compliance", href: "/compliance" },
    { name: "For Swiss SMEs", href: "/for-swiss-smes" },
    { name: "Contact", href: "/contact" },
];

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header className={clsx(styles.header, scrolled && styles.scrolled)}>
            <Container>
                <nav className={styles.nav}>
                    <Link href="/" className={styles.logo}>
                        <Logo />
                    </Link>

                    {/* Desktop Nav */}
                    <div className={styles.links}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={clsx(
                                    styles.link,
                                    pathname === link.href && styles.linkActive
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className={styles.actions}>
                        <ThemeToggle />
                        <Link href="https://calendly.com" target="_blank">
                            <Button size="sm">Request a demo</Button>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <div className={styles.mobileActions}>
                        <ThemeToggle />
                        <button
                            className={styles.mobileMenuBtn}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                            aria-expanded={mobileMenuOpen}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu */}
            <div
                className={clsx(
                    styles.mobileMenu,
                    mobileMenuOpen && styles.mobileMenuOpen
                )}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={clsx(
                            styles.mobileLink,
                            pathname === link.href && styles.mobileLinkActive
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
                <div className={styles.mobileCta}>
                    <Link href="https://calendly.com" target="_blank">
                        <Button size="lg" style={{ width: "100%" }}>
                            Request a demo
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
};
