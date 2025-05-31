import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Head>
                <title>Welcome to the Certificate Platform</title>
            </Head>

            {/* Header Section */}
            <header className="bg-white dark:bg-gray-800 shadow-sm">
                <div className="container mx-auto px-4 py-3">
                    <nav className="flex justify-between items-center">
                        <div className="text-xl md:text-2xl font-bold text-yellow-500">Certificate Platform</div>
                        
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex gap-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="inline-block rounded-md px-5 py-2 text-sm font-semibold bg-yellow-500 text-white hover:bg-yellow-600 transition-colors duration-200"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="inline-block rounded-md px-5 py-2 text-sm font-semibold border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white dark:text-yellow-400 dark:hover:text-white transition-colors duration-200"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="inline-block rounded-md px-5 py-2 text-sm font-semibold bg-yellow-500 text-white hover:bg-yellow-600 transition-colors duration-200"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                        
                        {/* Mobile Menu Button */}
                        <button 
                            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </nav>
                    
                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                        <div className="md:hidden pt-2 pb-3 border-t border-gray-200 dark:border-gray-700 mt-2">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="block rounded-md px-4 py-2 text-base font-medium bg-yellow-500 text-white hover:bg-yellow-600 transition-colors duration-200 mb-1"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="block rounded-md px-4 py-2 text-base font-medium border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white dark:text-yellow-400 dark:hover:text-white transition-colors duration-200 mb-1"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="block rounded-md px-4 py-2 text-base font-medium bg-yellow-500 text-white hover:bg-yellow-600 transition-colors duration-200"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <main className="flex-grow flex items-center justify-center py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
                        Welcome to the <span className="text-yellow-500">Certificate Platform</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                        A professional solution to manage, verify, and secure your certificates with advanced blockchain technology.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href={route('register')}
                            className="inline-block px-8 py-3 bg-yellow-500 text-white rounded-md text-lg font-semibold hover:bg-yellow-600 transition-colors duration-200 shadow-md"
                        >
                            Get Started
                        </Link>
                        <Link
                            href="#features"
                            className="inline-block px-8 py-3 border border-yellow-500 text-yellow-500 rounded-md text-lg font-semibold hover:bg-yellow-500 hover:text-white dark:text-yellow-400 dark:hover:text-white transition-colors duration-200"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </main>

            {/* Footer Section */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} Certificate Platform. All rights reserved.</p>
                    <div className="mt-4">
                        <Link href="#" className="text-yellow-500 hover:text-yellow-400">
                            Privacy Policy
                        </Link>
                        <span className="mx-2">|</span>
                        <Link href="#" className="text-yellow-500 hover:text-yellow-400">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
