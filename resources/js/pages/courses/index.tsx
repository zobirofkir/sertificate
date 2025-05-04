import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

const index = () => {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Courses',
            href: '/courses',
        },
    ];

    const courses = [
        {
            title: 'Html',
            description: 'Learn Html.',
            imageUrl: 'https://s3-cdn.cmlabs.co/page/2023/10/04/web-developer-definition-skills-and-responsibilities-908401.png',
            url: '/courses/show/html',
        },
        {
            title: 'Javascript',
            description: 'Master JavaScript.',
            imageUrl: 'https://cdn.geekboots.com/geek/javascript-meta-1652702081069.jpg',
            url: '/courses/show/javascript',
        },
        {
            title: 'Course 3',
            description: 'Dive deep into Laravel framework.',
            imageUrl: 'https://cdn.hdwebsoft.com/wp-content/uploads/2021/11/Thiet-ke-chua-co-ten-4.jpg',
            url: '/courses/3',
        },
        {
            title: 'Course 4',
            description: 'Understand database design and SQL.',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png',
            url: '/courses/4',
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Courses" />
            <div className="flex flex-col gap-4 p-4">
                <h1 className="text-2xl font-semibold">Courses</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 text-center">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-2xl"
                        >
                            <img
                                src={course.imageUrl}
                                alt={course.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {course.title}
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mt-2">
                                    {course.description}
                                </p>
                                {course.url ? (
                                    <Link href={course.url}>
                                        <button className="mt-4 px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400">
                                            Enroll Now
                                        </button>
                                    </Link>
                                ) : (
                                    <button className="mt-4 px-4 py-2 bg-gray-400 text-white rounded-md cursor-not-allowed" disabled>
                                        Coming Soon
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
};

export default index;
