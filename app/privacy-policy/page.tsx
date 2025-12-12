import Link from "next/link";
import styles from "./page.module.css";

export default function PrivacyPolicy() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link href="/" className={styles.backButton}>
                    ← Back to Home
                </Link>
                <h1 className={styles.title}>Privacy Policy</h1>
                <p className={styles.lastUpdated}>Last Updated: December 12, 2024</p>
            </div>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2>Introduction</h2>
                    <p>
                        Welcome to Citizenship Prep ("we," "our," or "us"). We are committed to protecting your privacy
                        and ensuring you have a positive experience on our website. This Privacy Policy explains how we
                        collect, use, disclose, and safeguard your information when you visit our website.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Information We Collect</h2>
                    <h3>Automatically Collected Information</h3>
                    <p>
                        When you visit our website, we may automatically collect certain information about your device,
                        including information about your web browser, IP address, time zone, and some of the cookies that
                        are installed on your device. Additionally, as you browse the site, we collect information about
                        the individual web pages you view, what websites or search terms referred you to the site, and
                        information about how you interact with the site.
                    </p>

                    <h3>Usage Data</h3>
                    <p>
                        We collect information about your quiz performance, study progress, and interaction with our
                        educational content. This data is stored locally in your browser and is not transmitted to our
                        servers unless you explicitly choose to sync your progress.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul>
                        <li>Provide, operate, and maintain our website</li>
                        <li>Improve, personalize, and expand our website</li>
                        <li>Understand and analyze how you use our website</li>
                        <li>Develop new products, services, features, and functionality</li>
                        <li>Track your quiz progress and study performance</li>
                        <li>Display relevant advertisements through Google AdSense</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>Cookies and Tracking Technologies</h2>
                    <p>
                        We use cookies and similar tracking technologies to track activity on our website and store certain
                        information. Cookies are files with a small amount of data which may include an anonymous unique
                        identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is
                        being sent. However, if you do not accept cookies, you may not be able to use some portions of our
                        website.
                    </p>

                    <h3>Types of Cookies We Use:</h3>
                    <ul>
                        <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                        <li><strong>Preference Cookies:</strong> Remember your settings and preferences (e.g., theme selection)</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                        <li><strong>Advertising Cookies:</strong> Used by Google AdSense to display relevant advertisements</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>Third-Party Advertising</h2>
                    <h3>Google AdSense</h3>
                    <p>
                        We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to
                        serve ads based on your prior visits to our website or other websites. Google's use of advertising
                        cookies enables it and its partners to serve ads to you based on your visit to our site and/or
                        other sites on the Internet.
                    </p>
                    <p>
                        You may opt out of personalized advertising by visiting{" "}
                        <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
                            Google Ads Settings
                        </a>
                        . Alternatively, you can opt out of third-party vendor's use of cookies for personalized
                        advertising by visiting{" "}
                        <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
                            www.aboutads.info
                        </a>
                        .
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Data Storage and Security</h2>
                    <p>
                        Your quiz progress and study data are stored locally in your browser's local storage. We do not
                        store this information on our servers. While we implement reasonable security measures to protect
                        your information, please be aware that no method of transmission over the Internet or method of
                        electronic storage is 100% secure.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Children's Privacy</h2>
                    <p>
                        Our website is not intended for children under the age of 13. We do not knowingly collect
                        personally identifiable information from children under 13. If you are a parent or guardian and
                        you are aware that your child has provided us with personal information, please contact us.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Your Rights</h2>
                    <p>Depending on your location, you may have the following rights:</p>
                    <ul>
                        <li>The right to access – You have the right to request copies of your personal data</li>
                        <li>The right to rectification – You have the right to request correction of inaccurate data</li>
                        <li>The right to erasure – You have the right to request deletion of your personal data</li>
                        <li>The right to restrict processing – You have the right to request restriction of processing</li>
                        <li>The right to data portability – You have the right to request transfer of your data</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>Changes to This Privacy Policy</h2>
                    <p>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting
                        the new Privacy Policy on this page and updating the "Last Updated" date at the top of this
                        Privacy Policy. You are advised to review this Privacy Policy periodically for any changes.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <p className={styles.contactInfo}>
                        Email: citizenshipprep.help@gmail.com<br />
                        Website: https://citizenship-test-app.vercel.app


                    </p>
                </section>
            </div>
        </div>
    );
}
