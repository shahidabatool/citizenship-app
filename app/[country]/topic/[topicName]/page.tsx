import { questions, Question } from "@/data/questions";
import QuizInterface from "@/components/QuizInterface";

type TopicQuizPageProps = {
    params: Promise<{
        country: string;
        topicName: string;
    }>;
};

export default async function TopicQuizPage({ params }: TopicQuizPageProps) {
    const { country, topicName: encodedTopicName } = await params;
    const topicName = decodeURIComponent(encodedTopicName);

    const countryQuestions = questions[country as "canada" | "uk"] || [];
    const topicQuestions = countryQuestions.filter(
        (q: Question) => q.topic === topicName
    );

    if (topicQuestions.length === 0) {
        return (
            <div style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                textAlign: "center"
            }}>
                <div>
                    <h1>No questions found for this topic</h1>
                    <a href={`/${country}/topic`} style={{ color: "var(--primary)", marginTop: "1rem", display: "inline-block" }}>
                        ← Back to topics
                    </a>
                </div>
            </div>
        );
    }

    return (
        <QuizInterface
            questions={topicQuestions}
            country={country}
            mode="topic"
            topicName={topicName}
        />
    );
}
