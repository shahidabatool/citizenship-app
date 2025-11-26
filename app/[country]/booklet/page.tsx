import Link from "next/link";
import styles from "./page.module.css";

type BookletPageProps = {
    params: Promise<{
        country: string;
    }>;
};

export default async function BookletPage({ params }: BookletPageProps) {
    const { country } = await params;
    const isCanada = country === "canada";

    const pdfUrl = isCanada
        ? "/pdfs/discover.pdf"
        : "/pdfs/document.pdf";

    return (
        <main className={styles.main}>
            <Link href={`/${country}`} className={styles.backButton}>
                ← Back
            </Link>

            <div className={styles.header}>
                <div className={styles.flag}>{isCanada ? "🍁" : "GB"}</div>
                <h1 className={styles.title}>
                    {isCanada ? "Discover Canada Study Guide" : "Life in the UK Study Guide"}
                </h1>
                <p className={styles.subtitle}>
                    Official government study material
                </p>
            </div>

            <div className={styles.content}>
                <div className={styles.pdfSection}>
                    <div className={styles.pdfHeader}>
                        <h2>📚 {isCanada ? "Discover Canada" : "Life in the UK"} Study Guide</h2>
                        <a
                            href={pdfUrl}
                            download
                            className={styles.downloadButton}
                        >
                            ⬇️ Download PDF
                        </a>
                    </div>

                    <div className={styles.pdfViewer}>
                        <iframe
                            src={pdfUrl}
                            className={styles.pdfFrame}
                            title={isCanada ? "Discover Canada Study Guide" : "Life in the UK Study Guide"}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
