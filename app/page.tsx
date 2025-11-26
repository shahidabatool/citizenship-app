"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.backgroundGlow} />

      <div className={styles.themeToggleWrapper}>
        <ThemeToggle />
      </div>

      <div className={styles.header}>
        <h1 className={styles.title}>Citizenship Prep</h1>
        <p className={styles.subtitle}>
          Master your citizenship test with our premium, modern preparation platform.
          Choose your country to begin your journey.
        </p>
      </div>

      <div className={styles.grid}>
        <Link href="/canada" className={styles.card}>
          <div className={styles.imageWrapper}>
            <img
              src="/canada.jpg"
              alt="Canada - Discover Canada"
              className={styles.cardImage}
            />
            <div className={styles.overlay} />
          </div>
          <div className={styles.badge}>100+ Questions</div>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>🍁 Canada</h2>
            <p>Discover Canada - Prepare for your Canadian citizenship test</p>
          </div>
        </Link>

        <Link href="/uk" className={styles.card}>
          <div className={styles.imageWrapper}>
            <img
              src="/UK.jpg"
              alt="United Kingdom - Life in the UK"
              className={styles.cardImage}
            />
            <div className={styles.overlay} />
          </div>
          <div className={styles.badge}>100+ Questions</div>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}><span className={styles.flagText}>GB</span> United Kingdom</h2>
            <p>Life in the UK - Master your British citizenship test</p>
          </div>
        </Link>

        <div className={styles.card + ' ' + styles.aboutCard}>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>ℹ️ About Us</h2>
            <p>Learn more about GlobalCitizen Prep</p>
            <p className={styles.aboutText}>
              GlobalCitizen Prep is your comprehensive platform for citizenship test preparation.
              We provide high-quality practice questions, study materials, and mock tests to help you
              succeed in your citizenship journey for Canada and the United Kingdom.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
