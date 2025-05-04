import React, { useState, useEffect } from 'react';

const HtmlExam = () => {
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [user, setUser] = useState<any>(null);
    const [examStatus, setExamStatus] = useState<string | null>(null);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [showExam, setShowExam] = useState<boolean>(false);
    const [userInfo, setUserInfo] = useState({ name: '', email: '', age: '' });

    // Simulate fetching user and exam status
    useEffect(() => {
        setUser({ id: 1, name: 'John Doe' });

        const storedExamResult = localStorage.getItem('htmlExamResult');
        if (storedExamResult) {
            const parsedResult = JSON.parse(storedExamResult);
            setExamStatus(parsedResult.status);
            setDisabled(true);
            setScore(parsedResult.score);
        }
    }, []);

    // Handle user info changes
    const handleUserInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserInfo((prev) => ({ ...prev, [name]: value }));
    };

    // Handle exam answer changes
    const handleAnswerChange = (questionId: number, value: string) => {
        setAnswers((prev) => ({ ...prev, [questionId]: value }));
    };

    // Submit user info to start the exam
    const handleUserInfoSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (userInfo.name && userInfo.email && userInfo.age) {
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            setShowExam(true);
        } else {
            alert('Please fill out all fields');
        }
    };

    // Submit the exam and calculate score
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let userScore = questions.reduce((score, question) => {
            return answers[question.id] === question.correctAnswer ? score + 1 : score;
        }, 0);

        const resultStatus = userScore >= 10 ? 'accepted' : 'rejected';
        setExamStatus(resultStatus);
        setScore(userScore);

        // Save result to localStorage
        localStorage.setItem('htmlExamResult', JSON.stringify({ status: resultStatus, score: userScore }));

        // Disable the form inputs
        setDisabled(true);
    };

    const questions = [
        { id: 1, question: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Markup Language", "HyperTool Markup Language"], correctAnswer: "HyperText Markup Language" },
        { id: 2, question: "Which tag is used to define an unordered list?", options: ["<ol>", "<ul>", "<li>"], correctAnswer: "<ul>" },
        { id: 3, question: "What is the correct tag for a line break?", options: ["<break>", "<br>", "<lb>"], correctAnswer: "<br>" },
        { id: 4, question: "Which tag defines a hyperlink?", options: ["<a>", "<link>", "<href>"], correctAnswer: "<a>" },
        { id: 5, question: "Which element is used for an image?", options: ["<image>", "<img>", "<src>"], correctAnswer: "<img>" },
        { id: 6, question: "Which attribute specifies the URL of an image?", options: ["src", "href", "alt"], correctAnswer: "src" },
        { id: 7, question: "Which tag defines a table?", options: ["<table>", "<tab>", "<td>"], correctAnswer: "<table>" },
        { id: 8, question: "How do you make a numbered list?", options: ["<ul>", "<li>", "<ol>"], correctAnswer: "<ol>" },
        { id: 9, question: "Which tag defines a form?", options: ["<input>", "<form>", "<button>"], correctAnswer: "<form>" },
        { id: 10, question: "What is the element for audio?", options: ["<audio>", "<sound>", "<mp3>"], correctAnswer: "<audio>" },
        { id: 11, question: "How do you add background color?", options: ["<body style='background-color:blue;'>", "<background color='blue'>", "<color='blue'>"], correctAnswer: "<body style='background-color:blue;'>" },
        { id: 12, question: "Which attribute defines image size?", options: ["width", "size", "image-width"], correctAnswer: "width" },
        { id: 13, question: "How do you create a checkbox?", options: ["<input type='checkbox'>", "<checkbox>", "<input type='button'>"], correctAnswer: "<input type='checkbox'>" },
        { id: 14, question: "Which tag defines a button?", options: ["<input>", "<button>", "<btn>"], correctAnswer: "<button>" },
        { id: 15, question: "Which element inserts a horizontal line?", options: ["<hr>", "<line>", "<hline>"], correctAnswer: "<hr>" },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            {!showExam ? (
                <div>
                    <h1 className="text-3xl font-bold text-yellow-500 mb-6">HTML Exam</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Please provide your information before starting the exam.</p>

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
                        <button type="submit" className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-200">
                            Start Exam
                        </button>
                    </form>
                </div>
            ) : (
                <div>
                    <h1 className="text-3xl font-bold text-yellow-500 mb-6">HTML Exam</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Please answer the following questions to the best of your ability. Good luck!</p>

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
                                        <label key={index} className="flex items-center space-x-2 cursor-pointer dark:text-gray-300">
                                            <input
                                                type="radio"
                                                name={`question-${question.id}`}
                                                value={option}
                                                checked={answers[question.id] === option}
                                                onChange={() => handleAnswerChange(question.id, option)}
                                                disabled={disabled}
                                                className="text-yellow-500"
                                            />
                                            <span>{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {!disabled && (
                            <button type="submit" className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-200">
                                Submit Exam
                            </button>
                        )}
                    </form>

                    {disabled && <div className="mt-6 text-xl">Your final score: {score}/15</div>}
                </div>
            )}
        </div>
    );
};

export default HtmlExam;
