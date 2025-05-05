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
            title: 'HTML',
            description: 'Master the basics of web development with HTML.',
            imageUrl: 'https://s3-cdn.cmlabs.co/page/2023/10/04/web-developer-definition-skills-and-responsibilities-908401.png',
            url: '/courses/show/html',
        },
        {
            title: 'JavaScript',
            description: 'Deep dive into JavaScript, the language of the web.',
            imageUrl: 'https://cdn.geekboots.com/geek/javascript-meta-1652702081069.jpg',
            url: '/courses/show/javascript',
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Courses" />
            <div className="flex flex-col gap-6 p-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Explore Our Courses</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition-all ease-in-out duration-300 transform hover:scale-105"
                        >
                            <img
                                src={course.imageUrl}
                                alt={course.title}
                                className="w-full h-56 object-cover rounded-t-lg"
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{course.title}</h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">{course.description}</p>
                                {course.url ? (
                                    <Link href={course.url}>
                                        <button className="mt-6 px-6 py-3 bg-amber-600 text-white font-semibold rounded-md shadow-md hover:bg-amber-700 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400">
                                            Enroll Now
                                        </button>
                                    </Link>
                                ) : (
                                    <button className="mt-6 px-6 py-3 bg-gray-400 text-white font-semibold rounded-md cursor-not-allowed">
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
