import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types'
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
            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-semibold text-gray-900 dark:text-white mb-6">Available Exams</h1>
                <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">Choose from the following exams to test your skills:</p>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {exams.map((exam) => (
                        <div key={exam.id} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-yellow-400">{exam.title}</h2>
                            <p className="text-gray-700 dark:text-gray-300 mt-4">{exam.description}</p>
                            <a
                                href={`/exams/${exam.id}`}
                                className="mt-6 inline-block text-lg font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-md py-2 px-6 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
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
