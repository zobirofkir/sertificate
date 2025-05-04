import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react'
import React from 'react'

const index = () => {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Exams',
            href: '/exams',
        },
    ];

    const exams = [
        { id: 1, title: 'HTML Basics Exam', description: 'Test your knowledge of basic HTML elements and structure.' },
        { id: 2, title: 'JavaScript Fundamentals Exam', description: 'Evaluate your understanding of basic JavaScript concepts and syntax.' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Exams" />
            <div className="container mx-auto p-10">
                <h1 className="text-3xl font-bold text-yellow-500 mb-4">Exams</h1>
                <p className="mb-6 text-gray-700 dark:text-gray-300">List of exams related to HTML and JavaScript:</p>

                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
                    {exams.map((exam) => (
                        <div key={exam.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <h2 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400">{exam.title}</h2>
                            <p className="text-gray-800 dark:text-gray-300">{exam.description}</p>
                            <a
                                href={`/exams/${exam.id}`}
                                className="text-yellow-500 hover:text-yellow-600 dark:text-yellow-400 dark:hover:text-yellow-300 mt-3 inline-block"
                            >
                                Take Exam
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}

export default index;
