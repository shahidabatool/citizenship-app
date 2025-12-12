"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import styles from "./page.module.css";

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);

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
            <h2 className={styles.cardTitle}>🇬🇧 United Kingdom</h2>
            <p>Life in the UK - Master your British citizenship test</p>
          </div>
        </Link>

        {/* About Us Card - Uniform Design */}
        <div className={`${styles.card} ${styles.aboutCard}`} onClick={() => setShowAbout(true)}>
          <div className={styles.imageWrapper}>
            <div className={`${styles.cardImage} ${styles.aboutImagePlaceholder}`} />
            <div className={styles.overlay} />
          </div>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>ℹ️ About Us</h2>
            <p>Learn more about Citizenship Prep</p>
          </div>
        </div>
      </div>

      {/* About Us Modal */}
      {showAbout && (
        <div className={styles.modalOverlay} onClick={() => setShowAbout(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setShowAbout(false)}>×</button>
            <h2 className={styles.modalTitle}>About Citizenship Prep</h2>
            <div className={styles.modalBody}>
              <p>
                Citizenship Prep is your comprehensive platform for citizenship test preparation.
                We provide high-quality practice questions, study materials, and mock tests to help you
                succeed in your citizenship journey for Canada and the United Kingdom.
              </p>
              <p>
                Our goal is to make studying efficient, engaging, and effective. Whether you are preparing
                for the "Discover Canada" test or the "Life in the UK" test, we have the resources you need.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer with Legal Links */}
      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <Link href="/privacy-policy" className={styles.footerLink}>
            Privacy Policy
          </Link>
          <span className={styles.footerDivider}>•</span>
          <Link href="/terms" className={styles.footerLink}>
            Terms & Conditions
          </Link>
        </div>
        <p className={styles.footerCopyright}>
          © {new Date().getFullYear()} Citizenship Prep. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
