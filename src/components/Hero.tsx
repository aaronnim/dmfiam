import React from "react";
import Link from "next/link";
import { Button } from "./Button";
import { Section } from "./Section";
import { Container } from "./Container";
import { ArrowRight, Shield, Server, Users, Network } from "lucide-react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <Section grainy className={styles.wrapper}>
      <Container>
        <div className={styles.heroGrid}>
          {/* Left Column: Content */}
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Enterprise Identity Provider for Swiss Organizations
            </h1>
            <p className={styles.subtitle}>
              dmfIAM centralizes authentication, authorization, and identity
              lifecycle — with built-in governance, auditability, and Entra
              integration.
            </p>

            <div className={styles.ctas}>
              <a href="https://calendly.com" target="_blank">
                <Button
                  size="lg"
                  style={{
                    boxShadow: "0 4px 14px 0 rgba(239, 68, 68, 0.39)",
                  }}
                >
                  Book a Call
                </Button>
              </a>
              <Link href="/demo">
                <Button size="lg" variant="ghost" style={{ gap: "0.5rem" }}>
                  Learn more
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>

            <div className={styles.badges}>
              <div className={styles.badge}>
                <Shield size={16} /> Swiss Data
              </div>
              <div className={styles.badge}>
                <Server size={16} /> Regulated Env
              </div>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className={styles.heroVisual}>
            <div className={styles.visualContainer}>
              {/* SVG Connecting Lines */}
              <svg
                className={styles.connectingLines}
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Line to top node (Users) */}
                <line
                  x1="200"
                  y1="170"
                  x2="200"
                  y2="48"
                  className={styles.connectLine}
                />
                {/* Line to bottom node (Entra/AD) */}
                <line
                  x1="200"
                  y1="230"
                  x2="200"
                  y2="352"
                  className={styles.connectLine}
                />
                {/* Line to right node (Apps) */}
                <line
                  x1="248"
                  y1="200"
                  x2="352"
                  y2="200"
                  className={styles.connectLine}
                />
              </svg>

              {/* Pulse Ring behind center */}
              <div className={styles.pulseRing} />
              <div className={styles.pulseRing2} />

              {/* Center Node */}
              <div className={styles.centerNode}>
                <div className={styles.centerIcon}>
                  <Shield size={32} color="var(--accent)" />
                </div>
                <span className={styles.centerLabel}>dmfIAM</span>
              </div>

              {/* Orbiting Nodes */}
              <div
                className={styles.orbitNode}
                style={{
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  animationDelay: "0s",
                }}
              >
                <Users
                  size={24}
                  color="var(--orbit-blue)"
                  style={{ marginBottom: "0.25rem" }}
                />
                <span className={styles.orbitLabel}>Users</span>
              </div>

              <div
                className={styles.orbitNode}
                style={{
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  animationDelay: "1s",
                }}
              >
                <Network
                  size={24}
                  color="var(--orbit-indigo)"
                  style={{ marginBottom: "0.25rem" }}
                />
                <span className={styles.orbitLabel}>Entra / AD</span>
              </div>

              <div
                className={styles.orbitNode}
                style={{
                  top: "50%",
                  right: 0,
                  transform: "translateY(-50%)",
                  animationDelay: "2s",
                }}
              >
                <Server
                  size={24}
                  color="var(--orbit-green)"
                  style={{ marginBottom: "0.25rem" }}
                />
                <span className={styles.orbitLabel}>Apps</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
