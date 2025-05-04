import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types'
import { Head } from '@inertiajs/react'
import React, { useState } from 'react'

const Javascript = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Javascript', href: '/courses/javascript' },
  ]

  const courses = [
    {
      title: 'JavaScript Basics: Variables, Data Types, and Operators',
      description: `
        In this course, you'll learn the fundamental building blocks of JavaScript. This includes:
        - Declaring variables using \`var\`, \`let\`, and \`const\`
        - Understanding the primitive data types such as String, Number, Boolean, null, undefined, and Symbol.
        - Using operators like \`+\`, \`-\`, \`*\`, \`/\`, \`%\`, \`==\`, \`===\`, \`&&\`, \`||\`.
        
        Example:
        \`let age = 25;\`
        \`const name = "Alice";\`
        \`console.log(name + " is " + age + " years old");\`
  
        Key Concepts:
        - Variables are used to store values.
        - \`let\` and \`const\` have block scope, while \`var\` has function scope.
        - Primitive data types cannot be changed, but objects and arrays can.
        - Operators are used to manipulate values.
      `,
    },
    {
      title: 'Mastering Functions and Scope in JavaScript',
      description: `
        In this course, you'll dive deeper into functions in JavaScript. Topics include:
        - How to declare, invoke, and return values from functions.
        - Function expressions and arrow functions.
        - Local and global scope, lexical scope, and closures.
  
        Example:
        \`function greet(name) {\`
        \`    return "Hello " + name;\`
        \`}\`
        \`console.log(greet("Bob"));\`
  
        Key Concepts:
        - Functions can be defined in multiple ways, including function expressions and arrow functions.
        - Scope defines the accessibility of variables.
        - Closures allow inner functions to access variables from outer functions.
      `,
    },
    {
      title: 'Understanding Objects and Arrays',
      description: `
        In this course, you'll explore the key data structures in JavaScript: objects and arrays.
        - Learn how to create objects and arrays, and access and manipulate their elements.
        - Use methods like \`push()\`, \`pop()\`, \`shift()\`, and \`unshift()\` for arrays, and \`Object.keys()\`, \`Object.values()\`, and \`Object.entries()\` for objects.
  
        Example:
        \`const user = { name: "Sara", age: 30 };\`
        \`const colors = ["red", "green", "blue"];\`
        \`console.log(user.name); // Outputs: Sara\`
        \`console.log(colors[0]); // Outputs: red\`
  
        Key Concepts:
        - Arrays store ordered collections, while objects store key-value pairs.
        - You can iterate through arrays using loops like \`for\` and \`forEach\`.
        - Use object destructuring to extract values from objects in an easy-to-read format.
      `,
    },
    {
      title: 'DOM Manipulation and Events',
      description: `
        In this course, you will learn how JavaScript interacts with the HTML Document Object Model (DOM) to manipulate web pages dynamically:
        - Selecting elements using methods like \`getElementById()\`, \`querySelector()\`, and \`querySelectorAll()\`.
        - Modifying content and attributes.
        - Handling user interactions such as clicks, inputs, and form submissions using event listeners.
  
        Example:
        \`document.getElementById("btn").addEventListener("click", () => alert("Button clicked!"));\`
  
        Key Concepts:
        - The DOM is a tree structure representing the HTML of a webpage.
        - You can change the content or style of an element using JavaScript.
        - Event listeners are used to detect user interactions and trigger actions.
      `,
    },
    {
      title: 'ES6+ Features: Let, Const, Arrow Functions, and More',
      description: `
        In this course, you'll learn modern JavaScript (ES6+) features, which make code cleaner and more efficient:
        - \`let\` and \`const\` for variable declarations.
        - Arrow functions for shorter syntax.
        - Template literals for easier string concatenation.
        - Destructuring assignment for arrays and objects.
        - Spread and rest operators.
  
        Example:
        \`const add = (a, b) => a + b;\`
        \`console.log(add(5, 3)); // Outputs: 8\`
  
        Key Concepts:
        - Arrow functions make your code shorter and clearer, especially with anonymous functions.
        - Destructuring allows you to extract data from arrays or objects with a simple syntax.
        - Spread/rest operators allow you to work with data in a flexible way.
      `,
    },
    {
      title: 'Asynchronous JavaScript: Callbacks, Promises, and Async/Await',
      description: `
        In this course, you will learn about handling asynchronous code in JavaScript:
        - Callbacks, which are functions passed as arguments.
        - Promises, which represent eventual completion or failure of an asynchronous operation.
        - Async/Await, which allows you to write asynchronous code in a synchronous style.
  
        Example:
        \`async function fetchData() {\`
        \`    const res = await fetch("https://api.com");\`
        \`    const data = await res.json();\`
        \`    console.log(data);\`
        \`}\`
  
        Key Concepts:
        - Callbacks can lead to "callback hell" if not managed well.
        - Promises make chaining multiple asynchronous operations easier.
        - Async/Await makes asynchronous code look more like synchronous code, improving readability.
      `,
    },
    {
      title: 'Working with APIs and Fetch',
      description: `
        In this course, you'll learn how to make HTTP requests in JavaScript:
        - Using \`fetch()\` to send GET and POST requests to APIs.
        - Handling the response with \`.then()\` and \`.catch()\`.
        - Using JSON data and parsing it with \`.json()\`.
  
        Example:
        \`fetch("https://api.example.com")\`
        \`    .then(res => res.json())\`
        \`    .then(data => console.log(data))\`
        \`    .catch(error => console.log("Error:", error));\`
  
        Key Concepts:
        - \`fetch()\` is the modern way to make HTTP requests in JavaScript.
        - APIs often return data in JSON format, which can be parsed using \`.json()\`.
        - Handle errors using \`.catch()\` to improve user experience.
      `,
    },
    {
      title: 'JavaScript Debugging and Error Handling',
      description: `
        In this course, you will learn how to troubleshoot and fix bugs in your JavaScript code:
        - Use \`console.log()\` to inspect values and find bugs.
        - Set breakpoints and step through your code in the browser's developer tools.
        - Use \`try...catch\` for handling runtime errors gracefully.
  
        Example:
        \`try {\`
        \`    JSON.parse("invalid JSON");\`
        \`} catch (e) {\`
        \`    console.error("Parsing error:", e);\`
        \`}\`
  
        Key Concepts:
        - Debugging tools in browsers allow you to inspect code and variables in real-time.
        - \`try...catch\` helps prevent your application from crashing by catching runtime errors.
        - Writing error messages to the console can help with debugging.
      `,
    },
    {
      title: 'Closures, Hoisting, and Execution Context',
      description: `
        This course will cover some advanced JavaScript concepts:
        - Closures: Functions that have access to variables from their outer function.
        - Hoisting: JavaScript's default behavior of moving declarations to the top of their scope.
        - Execution Context: The environment in which the JavaScript code is executed.
  
        Example:
        \`function outer() {\`
        \`    let count = 0;\`
        \`    return function inner() {\`
        \`        count++;\`
        \`        console.log(count);\`
        \`    };\`
        \`}\`
        \`const counter = outer();\`
        \`counter(); // Outputs: 1\`
  
        Key Concepts:
        - A closure lets a function "remember" its lexical scope even after the outer function has finished executing.
        - Hoisting affects both variables and function declarations, but function expressions are not hoisted.
        - The execution context determines what variables and functions are accessible at any given point in the code.
      `,
    },
    {
      title: 'Object-Oriented Programming in JavaScript',
      description: `
        In this course, you'll learn how to use Object-Oriented Programming (OOP) principles in JavaScript:
        - Creating objects using constructor functions and ES6 classes.
        - Understanding inheritance, prototypes, and encapsulation.
        - Defining methods on objects and classes.
  
        Example:
        \`class Person {\`
        \`    constructor(name) {\`
        \`        this.name = name;\`
        \`    }\`
        \`    greet() {\`
        \`        console.log("Hi, " + this.name);\`
        \`    }\`
        \`}\`
        \`const p = new Person("Tom");\`
        \`p.greet(); // Outputs: Hi, Tom\`
  
        Key Concepts:
        - OOP allows you to structure code around objects and their interactions.
        - ES6 classes provide a clean syntax for creating objects with shared methods.
        - Prototypes allow objects to inherit properties and methods from other objects.
      `,
    },
  ];
    
  const [selectedCourse, setSelectedCourse] = useState<null | typeof courses[0]>(null)
  const [completedIndex, setCompletedIndex] = useState<number>(-1) // -1 means no course done

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
      <Head title="JavaScript Courses" />
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          JavaScript Course Titles
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

export default Javascript
