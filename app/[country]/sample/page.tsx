import { questions, Question } from "@/data/questions";
import QuizInterface from "@/components/QuizInterface";

type SampleTestPageProps = {
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

export default async function SampleTestPage({ params }: SampleTestPageProps) {
    const { country } = await params;
    const countryQuestions = questions[country as "canada" | "uk"] || [];

    // Select 15 random questions for sample test
    const sampleQuestions = shuffleArray(countryQuestions).slice(0, 15);

    return (
        <QuizInterface
            questions={sampleQuestions}
            country={country}
            mode="sample"
            timeLimit={900} // 15 minutes in seconds
        />
    );
}
