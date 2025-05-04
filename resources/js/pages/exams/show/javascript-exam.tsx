import React, { useState, useEffect } from 'react';

const JavascriptExam = () => {
    const [answers, setAnswers] = useState<any>({});
    const [user, setUser] = useState<any>(null); // Current authenticated user
    const [examStatus, setExamStatus] = useState<string | null>(null);
    const [disabled, setDisabled] = useState<boolean>(false); // Disable form inputs after submission
    const [score, setScore] = useState<number>(0);
    const [showExam, setShowExam] = useState<boolean>(false); // State to control if exam is shown or not
    const [userInfo, setUserInfo] = useState<any>({
        name: '',
        email: '',
        age: ''
    });

    // Dummy user data (You should replace this with actual auth logic)
    useEffect(() => {
        // Example to simulate a user fetching process (replace with actual auth logic)
        setUser({ id: 1, name: "John Doe" });

        // If exam already submitted, load from localStorage
        const storedExamResult = localStorage.getItem('javascriptExamResult');
        if (storedExamResult) {
            const parsedResult = JSON.parse(storedExamResult);
            setExamStatus(parsedResult.status);
            setDisabled(true);
            setScore(parsedResult.score);
        }
    }, []);

    const handleAnswerChange = (questionId: number, value: string) => {
        setAnswers({ ...answers, [questionId]: value });
    };

    const handleUserInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleUserInfoSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (userInfo.name && userInfo.email && userInfo.age) {
            // Save user info to localStorage
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            setShowExam(true); // Show the exam after user info is saved
        } else {
            alert('Please fill out all fields');
        }
    };

    const questions = [
        {
            id: 1,
            question: "What does 'var' keyword do in JavaScript?",
            options: ["Declares a variable", "Creates a constant", "Defines a function"],
            correctAnswer: "Declares a variable",
        },
        {
            id: 2,
            question: "Which method is used to parse a JSON string in JavaScript?",
            options: ["JSON.stringify()", "JSON.parse()", "parseJSON()"],
            correctAnswer: "JSON.parse()",
        },
        {
            id: 3,
            question: "How do you create a function in JavaScript?",
            options: ["function myFunction()", "create function myFunction()", "function: myFunction()"],
            correctAnswer: "function myFunction()",
        },
        {
            id: 4,
            question: "What is the correct way to write a JavaScript array?",
            options: ["var arr = []", "var arr = {};", "var arr = ()"],
            correctAnswer: "var arr = []",
        },
        {
            id: 5,
            question: "Which of the following is not a JavaScript data type?",
            options: ["Number", "Boolean", "Character"],
            correctAnswer: "Character",
        },
        {
            id: 6,
            question: "Which symbol is used for comments in JavaScript?",
            options: ["//", "#", "/* */"],
            correctAnswer: "//",
        },
        {
            id: 7,
            question: "What is the result of 2 + '2' in JavaScript?",
            options: ["4", "22", "Error"],
            correctAnswer: "22",
        },
        {
            id: 8,
            question: "Which of the following is used to declare a constant in JavaScript?",
            options: ["var", "let", "const"],
            correctAnswer: "const",
        },
        {
            id: 9,
            question: "How do you access an element by its id in JavaScript?",
            options: ["getElementById()", "getId()", "querySelector()"],
            correctAnswer: "getElementById()",
        },
        {
            id: 10,
            question: "What does 'NaN' stand for in JavaScript?",
            options: ["Not a Number", "Null a Number", "Number not Available"],
            correctAnswer: "Not a Number",
        },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Calculate score
        let userScore = 0;
        questions.forEach((question) => {
            if (answers[question.id] === question.correctAnswer) {
                userScore++;
            }
        });
        
        const resultStatus = userScore >= 7 ? 'accepted' : 'rejected';
        setExamStatus(resultStatus);
        setScore(userScore);
        
        // Store the result in localStorage
        localStorage.setItem('javascriptExamResult', JSON.stringify({ status: resultStatus, score: userScore }));
        
        // Disable further interactions
        setDisabled(true);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {!showExam ? (
                <div>
                    <h1 className="text-3xl font-bold text-blue-500 mb-6">JavaScript Exam</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                        Please provide your information before starting the exam.
                    </p>
                    
                    <form onSubmit={handleUserInfoSubmit} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={userInfo.name}
                                onChange={handleUserInfoChange}
                                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={userInfo.email}
                                onChange={handleUserInfoChange}
                                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300">Age</label>
                            <input
                                type="number"
                                name="age"
                                value={userInfo.age}
                                onChange={handleUserInfoChange}
                                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
                            >
                                Start Exam
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <div>
                    <h1 className="text-3xl font-bold text-blue-500 mb-6">JavaScript Exam</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                        Please answer the following questions to the best of your ability. Good luck!
                    </p>

                    {examStatus && (
                        <div className={`text-xl font-bold ${examStatus === 'accepted' ? 'text-green-500' : 'text-red-500'} mb-6`}>
                            {examStatus === 'accepted' ? 'Good Job! You Passed the Exam!' : 'Exam Rejected. Better luck next time!'}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        {questions.map((question) => (
                            <div key={question.id} className="mb-6">
                                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">{question.question}</h2>
                                <div className="space-y-4">
                                    {question.options.map((option, index) => (
                                        <label
                                            key={index}
                                            className="flex items-center space-x-2 cursor-pointer dark:text-gray-300"
                                        >
                                            <input
                                                type="radio"
                                                name={`question-${question.id}`}
                                                value={option}
                                                checked={answers[question.id] === option}
                                                onChange={() => handleAnswerChange(question.id, option)}
                                                disabled={disabled}
                                                className="text-blue-500"
                                            />
                                            <span>{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {!disabled && (
                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
                                >
                                    Submit Exam
                                </button>
                            </div>
                        )}
                    </form>

                    {disabled && (
                        <div className="mt-6 text-xl">
                            <p>Your final score: {score}/10</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default JavascriptExam;
