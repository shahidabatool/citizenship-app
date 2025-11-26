"use client";

import { useState, useEffect } from "react";
import styles from "./Quiz.module.css";
import { Question } from "@/data/questions";
import Link from "next/link";

type Props = {
    questions: Question[];
    mode: "mock" | "simple" | "topic";
};

export default function Quiz({ questions, mode }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes for mock
    const [isAnswered, setIsAnswered] = useState(false);

    const currentQuestion = questions[currentIndex];

    useEffect(() => {
        if (mode === "mock" && timeLeft > 0 && !showResult) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (timeLeft === 0 && mode === "mock") {
            setShowResult(true);
        }
    }, [timeLeft, mode, showResult]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    const handleOptionClick = (index: number) => {
        if (isAnswered) return;

        setSelectedOption(index);
        setIsAnswered(true);

        if (index === currentQuestion.correctAnswer) {
            setScore((prev) => prev + 1);
        }

        // For mock test, auto-advance after a delay or manual?
        // Usually mock tests don't show immediate feedback, but for learning apps it's mixed.
        // Requirement: "mock with timer , simple test".
        // Let's make Mock Test behave like a real test: No immediate feedback, just next.
        // Simple Test: Immediate feedback.

        if (mode === "mock") {
            setTimeout(() => {
                handleNext();
            }, 500);
        }
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex((prev) => prev + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setShowResult(true);
        }
    };

    if (showResult) {
        const percentage = Math.round((score / questions.length) * 100);
        const passed = percentage >= 75;

        return (
            <div className={styles.container}>
                <div className={styles.result}>
                    <h2>Test Completed</h2>
                    <div className={styles.score}>{percentage}%</div>
                    <p>{passed ? "🎉 You Passed!" : "❌ You Failed"}</p>
                    <p>You answered {score} out of {questions.length} correctly.</p>

                    <div className={styles.footer}>
                        <button onClick={() => window.location.reload()} className="btn-primary">
                            Try Again
                        </button>
                        <Link href="/" style={{ marginLeft: '1rem', padding: '0.75rem' }}>
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.progress}>
                    Question {currentIndex + 1} / {questions.length}
                </div>
                {mode === "mock" && (
                    <div className={styles.timer}>
                        ⏱️ {formatTime(timeLeft)}
                    </div>
                )}
            </div>

            <h2 className={styles.question}>{currentQuestion.text}</h2>

            <div className={styles.options}>
                {currentQuestion.options.map((option, index) => {
                    let className = styles.option;

                    if (mode === "simple" || mode === "topic") {
                        if (isAnswered) {
                            if (index === currentQuestion.correctAnswer) className += ` ${styles.correct}`;
                            else if (index === selectedOption) className += ` ${styles.incorrect}`;
                        }
                    } else {
                        // Mock mode: just show selected
                        if (selectedOption === index) className += ` ${styles.selected}`;
                    }

                    return (
                        <button
                            key={index}
                            className={className}
                            onClick={() => handleOptionClick(index)}
                            disabled={isAnswered && mode !== "mock"}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>

            {(mode === "simple" || mode === "topic") && isAnswered && (
                <div className={styles.explanation}>
                    <strong>Explanation:</strong> {currentQuestion.explanation}
                    <div className={styles.footer}>
                        <button onClick={handleNext} className="btn-primary">
                            Next Question
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
