import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types'
import { Head } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'

const Html = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { title: 'HTML', href: '/courses/html' },
  ]

  const courses = [
    {
      title: 'HTML Basics: Structure and Syntax',
      description: `
        In this course, you'll learn the basic building blocks of HTML:
        - Structure of an HTML document.
        - Elements, attributes, and how to use them.
        - Basic tags like \`<html>\`, \`<head>\`, \`<body>\`, \`<h1>\`, \`<p>\`, and \`<a>\`.
        
        Example:
        \`<h1>Hello World</h1>\`
        \`<p>This is a paragraph.</p>\`
  
        Key Concepts:
        - HTML is the foundation of web pages.
        - Tags are used to structure content, with attributes providing additional information.
      `,
    },
    {
      title: 'HTML Forms and Input Elements',
      description: `
        This course covers how to work with forms in HTML:
        - Form structure: \`<form>\`, \`<input>\`, \`<textarea>\`, \`<button>\`, \`<select>\`.
        - Handling user input and form submission.
        - Input validation using HTML attributes.
  
        Example:
        \`<form>\`
        \`    <label for="name">Name:</label>\`
        \`    <input type="text" id="name" name="name">\`
        \`    <button type="submit">Submit</button>\`
        \`</form>\`
  
        Key Concepts:
        - Forms allow user input on websites.
        - Different input types control how data is captured (e.g., \`text\`, \`email\`, \`password\`).
      `,
    },
    {
      title: 'HTML Tables and Lists',
      description: `
        In this course, you'll learn how to create tables and lists in HTML:
        - Creating tables with \`<table>\`, \`<tr>\`, \`<th>\`, \`<td>\`.
        - Creating ordered and unordered lists with \`<ol>\` and \`<ul>\`.
  
        Example:
        \`<table>\`
        \`    <tr><th>Name</th><th>Age</th></tr>\`
        \`    <tr><td>Alice</td><td>25</td></tr>\`
        \`</table>\`
  
        Key Concepts:
        - Tables are used for displaying data in rows and columns.
        - Lists are used to display ordered or unordered items.
      `,
    },
    {
      title: 'HTML Semantic Elements',
      description: `
        In this course, you'll learn about the importance of semantic elements in HTML:
        - Understanding elements like \`<header>\`, \`<footer>\`, \`<article>\`, \`<section>\`, and \`<nav>\`.
        - How to use semantic elements to improve accessibility and SEO.
  
        Example:
        \`<header><h1>Welcome to My Website</h1></header>\`
        \`<footer><p>&copy; 2025 My Website</p></footer>\`
  
        Key Concepts:
        - Semantic elements give meaning to the content of your webpage.
        - Using proper tags helps with SEO and accessibility.
      `,
    },
    {
      title: 'HTML Media: Images, Video, and Audio',
      description: `
        This course covers how to integrate multimedia elements into your webpage:
        - Embedding images using the \`<img>\` tag.
        - Adding videos using the \`<video>\` tag and \`<source>\` tag.
        - Adding audio with the \`<audio>\` tag.
  
        Example:
        \`<img src="image.jpg" alt="A beautiful sunset"> \`
        \`<video controls><source src="video.mp4" type="video/mp4"></video>\`
  
        Key Concepts:
        - The \`<img>\` tag is used for displaying images.
        - The \`<video>\` and \`<audio>\` tags allow embedding media.
        - Ensure multimedia files are properly accessible with attributes like \`alt\` and \`controls\`.
      `,
    },
    {
      title: 'HTML Accessibility Features',
      description: `
        This course explores how to make HTML content more accessible:
        - Using \`alt\` attributes for images.
        - Role attributes and ARIA landmarks.
        - Accessible navigation using \`<nav>\`, \`<header>\`, and \`<footer>\`.
  
        Example:
        \`<img src="logo.png" alt="Website logo" role="img">\`
        \`<nav><ul><li><a href="#">Home</a></li><li><a href="#">About</a></li></ul></nav>\`
  
        Key Concepts:
        - Accessibility ensures that all users, including those with disabilities, can navigate the web.
        - ARIA roles and attributes help improve screen reader compatibility.
      `,
    },
  ]
    
  const [selectedCourse, setSelectedCourse] = useState<null | typeof courses[0]>(null)
  
  const [completedIndex, setCompletedIndex] = useState<number>(() => {
    const savedIndex = localStorage.getItem('html_completedIndex')
    return savedIndex ? parseInt(savedIndex, 10) : -1
  })

  useEffect(() => {
    localStorage.setItem('html_completedIndex', completedIndex.toString())
  }, [completedIndex])

  const closeModal = () => setSelectedCourse(null)

  const completeCourse = () => {
    if (selectedCourse) {
      const currentIndex = courses.findIndex(c => c.title === selectedCourse.title)
      if (currentIndex === completedIndex + 1) {
        setCompletedIndex(currentIndex)
        setSelectedCourse(null)
      }
    }
  }

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="HTML Courses" />
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          HTML Course Titles
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => {
            const isUnlocked = index <= completedIndex + 1
            return (
              <div
                key={index}
                onClick={() => isUnlocked && setSelectedCourse(course)}
                className={`${
                  isUnlocked
                    ? 'cursor-pointer hover:shadow-md'
                    : 'cursor-not-allowed opacity-50'
                } bg-white dark:bg-gray-900 border border-yellow-400/30 dark:border-yellow-500/20 rounded-2xl p-5 shadow-sm transition group`}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-yellow-100 dark:bg-yellow-600 text-yellow-800 dark:text-yellow-100 font-bold flex items-center justify-center shadow-inner">
                    {index + 1}
                  </div>
                  <div>
                    <h2
                      className={`text-base font-semibold ${
                        isUnlocked
                          ? 'text-gray-800 dark:text-yellow-100 group-hover:text-yellow-600 dark:group-hover:text-yellow-300'
                          : 'text-gray-400'
                      } transition`}
                    >
                      {course.title}
                    </h2>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-none w-full h-full shadow-lg relative">
            <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-4xl"
            >
                &times;
            </button>
            <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {selectedCourse.title}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 w-3/4 text-center">
                {selectedCourse.description}
                </p>

                <button
                onClick={completeCourse}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-xl"
                >
                Mark as Completed
                </button>
            </div>
            </div>
        </div>
      )}
    </AppLayout>
  )
}

export default Html
