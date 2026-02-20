"use client";

import { useEffect, useRef } from "react";

/**
 * Custom hook that adds scroll-triggered entrance animations.
 * Attaches IntersectionObserver to the ref element, setting
 * data-visible="true" when it enters the viewport.
 *
 * @param threshold - visibility threshold (0-1), default 0.15
 * @param rootMargin - observer root margin, default "0px 0px -60px 0px"
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
    threshold = 0.15,
    rootMargin = "0px 0px -60px 0px"
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
            // Immediately show without animation
            el.setAttribute("data-visible", "true");
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.setAttribute("data-visible", "true");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold, rootMargin }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return ref;
}
