"use client";

import { useState, useEffect } from "react";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Get theme from localStorage or system preference
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
        const initialTheme = savedTheme || systemTheme;
        setTheme(initialTheme);
        document.documentElement.setAttribute("data-theme", initialTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    if (!mounted) {
        return (
            <button className={styles.themeToggle} aria-label="Toggle theme">
                <span className={styles.icon}>🌙</span>
                <span className={styles.label}>DARK MODE</span>
            </button>
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
            {theme === "light" ? (
                <>
                    <span className={styles.icon}>🌙</span>
                    <span className={styles.label}>DARK MODE</span>
                </>
            ) : (
                <>
                    <span className={styles.icon}>☀️</span>
                    <span className={styles.label}>LIGHT MODE</span>
                </>
            )}
        </button>
    );
}
