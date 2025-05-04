import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types'
import { Head } from '@inertiajs/react'
import React from 'react'

const Javascript = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      title: 'Javascript',
      href: '/courses/javascript',
    },
  ]

  const courseTitles = [
    'JavaScript Basics: Variables, Data Types, and Operators',
    'Mastering Functions and Scope in JavaScript',
    'Understanding Objects and Arrays',
    'DOM Manipulation and Events',
    'ES6+ Features: Let, Const, Arrow Functions, and More',
    'Asynchronous JavaScript: Callbacks, Promises, and Async/Await',
    'Working with APIs and Fetch',
    'JavaScript Debugging and Error Handling',
    'Closures, Hoisting, and Execution Context',
    'Object-Oriented Programming in JavaScript',
    'Functional Programming Concepts',
    'JavaScript in the Browser vs Node.js',
    'Event Loop and JavaScript Runtime',
    'JavaScript Best Practices and Clean Code',
    'Modern Tooling: Babel, Webpack, and ESLint',
  ]

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="JavaScript Courses" />
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          JavaScript Course Titles
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseTitles.map((title, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 border border-yellow-400/30 dark:border-yellow-500/20 rounded-2xl p-5 shadow-sm hover:shadow-md transition group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex-shrink-0 rounded-full bg-yellow-100 dark:bg-yellow-600 text-yellow-800 dark:text-yellow-100 font-bold flex items-center justify-center shadow-inner">
                  {index + 1}
                </div>
                <div>
                  <h2 className="text-gray-800 dark:text-yellow-100 text-base font-semibold group-hover:text-yellow-600 dark:group-hover:text-yellow-300 transition">
                    {title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}

export default Javascript
