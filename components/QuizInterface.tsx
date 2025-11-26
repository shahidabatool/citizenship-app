"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Question } from "@/data/questions";
import styles from "./QuizInterface.module.css";

type QuizInterfaceProps = {
    questions: Question[];
    country: string;
    mode: "topic" | "mock" | "sample";
    topicName?: string;
    timeLimit?: number; // in seconds
};

export default function QuizInterface({
    questions,
    country,
    mode,
    topicName,
    timeLimit,
}: QuizInterfaceProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
        new Array(questions.length).fill(null)
    );
    const [showExplanation, setShowExplanation] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(timeLimit || 0);

    const currentQuestion = questions[currentIndex];
    const selectedAnswer = selectedAnswers[currentIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    // Timer logic
    useEffect(() => {
        if (timeLimit && timeRemaining > 0 && !isFinished) {
            const timer = setInterval(() => {
                setTimeRemaining((prev) => {
                    if (prev <= 1) {
                        setIsFinished(true);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [timeLimit, timeRemaining, isFinished]);

    const handleAnswerSelect = (answerIndex: number) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[currentIndex] = answerIndex;
        setSelectedAnswers(newAnswers);
        setShowExplanation(true);
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setShowExplanation(false);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setShowExplanation(selectedAnswers[currentIndex - 1] !== null);
        }
    };

    const handleFinish = () => {
        setIsFinished(true);
    };

    const calculateScore = () => {
        let correct = 0;
        questions.forEach((q, i) => {
            if (selectedAnswers[i] === q.correctAnswer) {
                correct++;
            }
        });
        return {
            correct,
            total: questions.length,
            percentage: Math.round((correct / questions.length) * 100),
        };
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    if (isFinished) {
        const score = calculateScore();
        const passed = score.percentage >= 75;

        return (
            <div className={styles.resultsContainer}>
                <div className={styles.resultsCard}>
                    <div className={`${styles.resultsBadge} ${passed ? styles.passed : styles.failed}`}>
                        {passed ? "✓ Passed!" : "✗ Not Passed"}
                    </div>

                    <h1 className={styles.resultsTitle}>Test Complete!</h1>

                    <div className={styles.scoreCircle}>
                        <div className={styles.scoreNumber}>{score.percentage}%</div>
                        <div className={styles.scoreLabel}>
                            {score.correct} / {score.total} correct
                        </div>
                    </div>

                    <div className={styles.resultsBreakdown}>
                        <h3>Results Breakdown</h3>
                        {questions.map((q, i) => {
                            const userAnswer = selectedAnswers[i];
                            const isCorrect = userAnswer === q.correctAnswer;

                            return (
                                <div key={q.id} className={styles.resultItem}>
                                    <div className={styles.resultHeader}>
                                        <span className={`${styles.resultIcon} ${isCorrect ? styles.correct : styles.incorrect}`}>
                                            {isCorrect ? "✓" : "✗"}
                                        </span>
                                        <span className={styles.resultQuestion}>Q{i + 1}: {q.text}</span>
                                    </div>
                                    {!isCorrect && (
                                        <div className={styles.resultDetails}>
                                            <p className={styles.correctAnswer}>
                                                <strong>Correct answer:</strong> {q.options[q.correctAnswer]}
                                            </p>
                                            <p className={styles.explanation}>{q.explanation}</p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className={styles.resultsActions}>
                        <Link href={`/${country}`} className={styles.btnSecondary}>
                            Back to Menu
                        </Link>
                        <button onClick={() => window.location.reload()} className={styles.btnPrimary}>
                            Retake Test
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.quizContainer}>
            {/* Header */}
            <div className={styles.quizHeader}>
                <Link href={mode === "topic" ? `/${country}/topic` : `/${country}`} className={styles.backBtn}>
                    ← Back
                </Link>

                {timeLimit && (
                    <div className={`${styles.timer} ${timeRemaining < 300 ? styles.timerWarning : ""}`}>
                        ⏱️ {formatTime(timeRemaining)}
                    </div>
                )}
            </div>

            {/* Progress Bar */}
            <div className={styles.progressContainer}>
                <div className={styles.progressBar}>
                    <div
                        className={styles.progressFill}
                        style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                    />
                </div>
                <div className={styles.progressText}>
                    Question {currentIndex + 1} of {questions.length}
                </div>
            </div>

            {/* Question Card */}
            <div className={styles.questionCard}>
                <div className={styles.questionHeader}>
                    <span className={styles.topicBadge}>{currentQuestion.topic}</span>
                </div>

                <h2 className={styles.questionText}>{currentQuestion.text}</h2>

                <div className={styles.optionsContainer}>
                    {currentQuestion.options.map((option, index) => {
                        const isSelected = selectedAnswer === index;
                        const isCorrectAnswer = index === currentQuestion.correctAnswer;
                        const showCorrect = showExplanation && isCorrectAnswer;
                        const showIncorrect = showExplanation && isSelected && !isCorrect;

                        return (
                            <button
                                key={index}
                                onClick={() => !showExplanation && handleAnswerSelect(index)}
                                disabled={showExplanation}
                                className={`${styles.optionButton} ${isSelected ? styles.selected : ""
                                    } ${showCorrect ? styles.correct : ""} ${showIncorrect ? styles.incorrect : ""
                                    }`}
                            >
                                <span className={styles.optionLetter}>
                                    {String.fromCharCode(65 + index)}
                                </span>
                                <span className={styles.optionText}>{option}</span>
                                {showCorrect && <span className={styles.checkmark}>✓</span>}
                                {showIncorrect && <span className={styles.crossmark}>✗</span>}
                            </button>
                        );
                    })}
                </div>

                {showExplanation && (
                    <div className={`${styles.explanation} ${isCorrect ? styles.explanationCorrect : styles.explanationIncorrect}`}>
                        <div className={styles.explanationHeader}>
                            {isCorrect ? "✓ Correct!" : "✗ Incorrect"}
                        </div>
                        <p>{currentQuestion.explanation}</p>
                    </div>
                )}
            </div>

            {/* Navigation */}
            <div className={styles.navigation}>
                <button
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    className={styles.navButton}
                >
                    ← Previous
                </button>

                {currentIndex === questions.length - 1 ? (
                    <button
                        onClick={handleFinish}
                        disabled={selectedAnswers.some((a) => a === null)}
                        className={styles.finishButton}
                    >
                        Finish Test
                    </button>
                ) : (
                    <button
                        onClick={handleNext}
                        disabled={selectedAnswer === null}
                        className={styles.navButton}
                    >
                        Next →
                    </button>
                )}
            </div>
        </div>
    );
}
