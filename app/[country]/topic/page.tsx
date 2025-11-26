import Link from "next/link";
import { questions, Question } from "@/data/questions";
import styles from "./page.module.css";

type TopicPageProps = {
    params: Promise<{
        country: string;
    }>;
};

export default async function TopicPage({ params }: TopicPageProps) {
    const { country } = await params;
    const countryQuestions = questions[country as "canada" | "uk"] || [];

    // Get unique topics
    const topics = Array.from(new Set(countryQuestions.map((q: Question) => q.topic)));

    // Count questions per topic
    const topicCounts = topics.map((topic) => ({
        topic,
        count: countryQuestions.filter((q: Question) => q.topic === topic).length,
    }));

    return (
        <main className={styles.main}>
            <Link href={`/${country}`} className={styles.backButton}>
                ← Back
            </Link>

            <div className={styles.header}>
                <h1 className={styles.title}>Practice by Topic</h1>
                <p className={styles.subtitle}>
                    Choose a topic to practice. Master one topic at a time!
                </p>
            </div>

            <div className={styles.topicsGrid}>
                {topicCounts.map(({ topic, count }, index) => (
                    <Link
                        key={topic}
                        href={`/${country}/topic/${encodeURIComponent(topic)}`}
                        className={styles.topicCard}
                    >
                        <h2 className={styles.topicName}>{topic}</h2>
                        <div className={styles.topicMeta}>
                            <span>📝 {count} questions</span>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
