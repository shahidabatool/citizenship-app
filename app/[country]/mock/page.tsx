import { questions, Question } from "@/data/questions";
import QuizInterface from "@/components/QuizInterface";

type MockTestPageProps = {
    params: Promise<{
        country: string;
    }>;
};

// Shuffle array function
function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export default async function MockTestPage({ params }: MockTestPageProps) {
    const { country } = await params;
    const countryQuestions = questions[country as "canada" | "uk"] || [];

    // Number of questions for mock test
    const questionCount = country === "canada" ? 20 : 24;

    // Shuffle and select random questions
    const mockQuestions = shuffleArray(countryQuestions).slice(0, questionCount);

    return (
        <QuizInterface
            questions={mockQuestions}
            country={country}
            mode="mock"
            timeLimit={1800} // 30 minutes in seconds
        />
    );
}
