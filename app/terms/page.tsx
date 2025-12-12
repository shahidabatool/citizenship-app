import Link from "next/link";
import styles from "./page.module.css";

export default function TermsAndConditions() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link href="/" className={styles.backButton}>
                    ← Back to Home
                </Link>
                <h1 className={styles.title}>Terms & Conditions</h1>
                <p className={styles.lastUpdated}>Last Updated: December 12, 2024</p>
            </div>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using Citizenship Prep ("the Service"), you accept and agree to be bound by the
                        terms and provisions of this agreement. If you do not agree to these Terms & Conditions, please
                        do not use the Service.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>2. Description of Service</h2>
                    <p>
                        Citizenship Prep is an educational platform designed to help users prepare for citizenship tests
                        for Canada and the United Kingdom. The Service provides practice questions, study materials, mock
                        tests, and study guides to assist in test preparation.
                    </p>
                    <p>
                        <strong>Important Notice:</strong> This service is for educational and preparatory purposes only.
                        We are not affiliated with any government agency or official citizenship testing body. The content
                        provided is based on publicly available information and study materials.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>3. Use of Service</h2>
                    <h3>3.1 Permitted Use</h3>
                    <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                    <ul>
                        <li>Use the Service in any way that violates any applicable law or regulation</li>
                        <li>Reproduce, duplicate, copy, or resell any part of the Service without our express written permission</li>
                        <li>Attempt to gain unauthorized access to any portion of the Service</li>
                        <li>Use any automated system or software to extract data from the Service</li>
                        <li>Interfere with or disrupt the Service or servers connected to the Service</li>
                        <li>Share your account credentials with others</li>
                    </ul>

                    <h3>3.2 User Responsibilities</h3>
                    <p>You are responsible for:</p>
                    <ul>
                        <li>Maintaining the confidentiality of your account information</li>
                        <li>All activities that occur under your account</li>
                        <li>Ensuring your use of the Service complies with these Terms</li>
                        <li>Verifying all information with official government sources before your actual citizenship test</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>4. Intellectual Property Rights</h2>
                    <p>
                        The Service and its original content, features, and functionality are owned by Citizenship Prep
                        and are protected by international copyright, trademark, patent, trade secret, and other
                        intellectual property laws.
                    </p>
                    <p>
                        You may not modify, reproduce, distribute, create derivative works of, publicly display, publicly
                        perform, republish, download, store, or transmit any of the material on our Service, except as
                        necessary for your personal, non-commercial use of the Service.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>5. Educational Content Disclaimer</h2>
                    <p>
                        <strong>No Guarantee of Accuracy:</strong> While we strive to provide accurate and up-to-date
                        information, we make no warranties or representations about the accuracy, reliability, or
                        completeness of the content provided through the Service.
                    </p>
                    <p>
                        <strong>Not Official Material:</strong> The questions and study materials provided are for
                        practice purposes only and may not reflect the exact questions or format of the official
                        citizenship tests. Always refer to official government resources for the most current and
                        authoritative information.
                    </p>
                    <p>
                        <strong>No Guarantee of Success:</strong> Use of this Service does not guarantee that you will
                        pass your citizenship test. Your success depends on your individual study efforts and
                        understanding of the material.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>6. Third-Party Services and Advertising</h2>
                    <p>
                        Our Service may contain advertisements from third parties, including Google AdSense. These
                        advertisers may use cookies and other tracking technologies to collect information about your
                        visits to this and other websites in order to provide advertisements about goods and services
                        of interest to you.
                    </p>
                    <p>
                        We are not responsible for the content, privacy policies, or practices of any third-party
                        websites or services. We encourage you to review the terms and privacy policies of any
                        third-party services you access.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>7. Limitation of Liability</h2>
                    <p>
                        To the maximum extent permitted by applicable law, Citizenship Prep shall not be liable for any
                        indirect, incidental, special, consequential, or punitive damages, or any loss of profits or
                        revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other
                        intangible losses resulting from:
                    </p>
                    <ul>
                        <li>Your use or inability to use the Service</li>
                        <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                        <li>Any interruption or cessation of transmission to or from the Service</li>
                        <li>Any bugs, viruses, or other harmful code that may be transmitted through the Service</li>
                        <li>Any errors or omissions in any content or for any loss or damage incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available through the Service</li>
                        <li>Failure to pass your citizenship test</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>8. Disclaimer of Warranties</h2>
                    <p>
                        The Service is provided on an "AS IS" and "AS AVAILABLE" basis without any warranties of any kind,
                        either express or implied, including but not limited to warranties of merchantability, fitness for
                        a particular purpose, non-infringement, or course of performance.
                    </p>
                    <p>
                        We do not warrant that:
                    </p>
                    <ul>
                        <li>The Service will function uninterrupted, secure, or available at any particular time or location</li>
                        <li>Any errors or defects will be corrected</li>
                        <li>The Service is free of viruses or other harmful components</li>
                        <li>The results of using the Service will meet your requirements</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>9. Indemnification</h2>
                    <p>
                        You agree to defend, indemnify, and hold harmless Citizenship Prep and its affiliates, licensors,
                        and service providers from and against any claims, liabilities, damages, judgments, awards, losses,
                        costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your
                        violation of these Terms or your use of the Service.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>10. Changes to the Service</h2>
                    <p>
                        We reserve the right to withdraw or amend the Service, and any service or material we provide via
                        the Service, in our sole discretion without notice. We will not be liable if for any reason all or
                        any part of the Service is unavailable at any time or for any period.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>11. Changes to Terms</h2>
                    <p>
                        We may revise and update these Terms from time to time at our sole discretion. All changes are
                        effective immediately when we post them and apply to all access to and use of the Service thereafter.
                    </p>
                    <p>
                        Your continued use of the Service following the posting of revised Terms means that you accept and
                        agree to the changes. You are expected to check this page frequently so you are aware of any changes.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>12. Governing Law</h2>
                    <p>
                        These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which
                        Citizenship Prep operates, without regard to its conflict of law provisions.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>13. Severability</h2>
                    <p>
                        If any provision of these Terms is held to be unenforceable or invalid, such provision will be
                        changed and interpreted to accomplish the objectives of such provision to the greatest extent
                        possible under applicable law, and the remaining provisions will continue in full force and effect.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>14. Contact Information</h2>
                    <p>
                        If you have any questions about these Terms & Conditions, please contact us at:
                    </p>
                    <p className={styles.contactInfo}>
                        Email: citizenshipprep.help@gmail.com<br />
                        Website: https://citizenship-test-app.vercel.app


                    </p>
                </section>

                <section className={styles.section}>
                    <h2>15. Acknowledgment</h2>
                    <p>
                        By using Citizenship Prep, you acknowledge that you have read these Terms & Conditions and agree
                        to be bound by them.
                    </p>
                </section>
            </div>
        </div>
    );
}
