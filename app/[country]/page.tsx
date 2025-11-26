import Link from "next/link";
import styles from "./page.module.css";

type CountryPageProps = {
    params: Promise<{
        country: string;
    }>;
};

const countryData = {
    canada: {
        flag: "🍁",
        name: "Canada",
        subtitle: "Discover Canada - Your Path to Canadian Citizenship",
        mockQuestions: 20,
        sampleQuestions: 15,
    },
    uk: {
        flag: "GB",
        name: "United Kingdom",
        subtitle: "Life in the UK - Your British Citizenship Journey",
        mockQuestions: 24,
        sampleQuestions: 15,
    },
};

export default async function CountryPage({ params }: CountryPageProps) {
    const { country } = await params;
    const data = countryData[country as "canada" | "uk"];

    if (!data) {
        return <div>Country not found</div>;
    }

    return (
        <main className={styles.main}>
            <Link href="/" className={styles.backButton}>
                ← Back to Home
            </Link>

            <div className={styles.header}>
                <div className={styles.flag}>{data.flag}</div>
                <h1 className={styles.title}>{data.name} Citizenship Test</h1>
                <p className={styles.subtitle}>{data.subtitle}</p>
            </div>

            <div className={styles.optionsGrid}>
                {/* Practice by Topic */}
                <Link href={`/${country}/topic`} className={styles.optionCard}>
                    <div className={styles.iconWrapper}>📚</div>
                    <h2 className={styles.optionTitle}>Practice by Topic</h2>
                    <p className={styles.optionDescription}>
                        Study questions organized by chapters and topics. Perfect for focused learning.
                    </p>
                    <div className={styles.optionMeta}>
                        <span className={styles.metaItem}>
                            <span className={styles.metaIcon}>📝</span>
                            Multiple topics
                        </span>
                        <span className={styles.metaItem}>
                            <span className={styles.metaIcon}>✓</span>
                            Instant feedback
                        </span>
                    </div>
                </Link>

                {/* Mock Test */}
                <Link href={`/${country}/mock`} className={styles.optionCard}>
                    <div className={styles.iconWrapper}>⏱️</div>
                    <h2 className={styles.optionTitle}>Mock Test</h2>
                    <p className={styles.optionDescription}>
                        Full-length timed test simulation. Experience the real test environment.
                    </p>
                    <div className={styles.optionMeta}>
                        <span className={styles.metaItem}>
                            <span className={styles.metaIcon}>📝</span>
                            {data.mockQuestions} questions
                        </span>
                        <span className={styles.metaItem}>
                            <span className={styles.metaIcon}>⏱️</span>
                            30 minutes
                        </span>
                    </div>
                </Link>

                {/* Sample Test */}
                <Link href={`/${country}/sample`} className={styles.optionCard}>
                    <div className={styles.iconWrapper}>🎯</div>
                    <h2 className={styles.optionTitle}>Sample Test</h2>
                    <p className={styles.optionDescription}>
                        Quick practice test to assess your knowledge. Great for daily practice.
                    </p>
                    <div className={styles.optionMeta}>
                        <span className={styles.metaItem}>
                            <span className={styles.metaIcon}>📝</span>
                            {data.sampleQuestions} questions
                        </span>
                        <span className={styles.metaItem}>
                            <span className={styles.metaIcon}>⚡</span>
                            Quick review
                        </span>
                    </div>
                </Link>

                {/* Study Guide */}
                <Link href={`/${country}/booklet`} className={styles.optionCard}>
                    <div className={styles.iconWrapper}>📖</div>
                    <h2 className={styles.optionTitle}>Study Guide</h2>
                    <p className={styles.optionDescription}>
                        Comprehensive study material covering all topics. Your complete reference.
                    </p>
                    <div className={styles.optionMeta}>
                        <span className={styles.metaItem}>
                            <span className={styles.metaIcon}>📚</span>
                            Full content
                        </span>
                        <span className={styles.metaItem}>
                            <span className={styles.metaIcon}>🔍</span>
                            Searchable
                        </span>
                    </div>
                </Link>
            </div>
        </main>
    );
}
