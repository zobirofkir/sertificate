import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head>
                <title>Welcome to the Certificate Platform</title>
            </Head>

            {/* Header Section */}
            <header className="container mx-auto p-4">
                <nav className="flex justify-between items-center">
                    <div className="text-xl font-bold text-yellow-500">Certificate Platform</div>
                    <div className="flex gap-6">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded-sm border border-transparent px-5 py-2 text-sm font-semibold text-[#1b1b18] hover:bg-yellow-500 hover:text-white dark:hover:bg-yellow-500 dark:text-[#EDEDEC] dark:hover:text-white transition-colors duration-200"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-sm border border-transparent px-5 py-2 text-sm font-semibold text-[#1b1b18] hover:bg-yellow-500 hover:text-white dark:hover:bg-yellow-500 dark:text-[#EDEDEC] dark:hover:text-white transition-colors duration-200"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="inline-block rounded-sm border border-transparent px-5 py-2 text-sm font-semibold text-[#1b1b18] hover:bg-yellow-500 hover:text-white dark:hover:bg-yellow-500 dark:text-[#EDEDEC] dark:hover:text-white transition-colors duration-200"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <main 
                    className="flex justify-center items-center min-h-screen bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://i.makeagif.com/media/8-02-2016/yYXxa_.gif)' }}
                >
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-yellow-500 dark:text-yellow-400">
                            Welcome to the Certificate Platform
                        </h1>
                        <p className="mt-4 text-lg text-[#1b1b18] dark:text-[#EDEDEC]">
                            Manage and verify your certificates with ease.
                        </p>
                        <div className="mt-6">
                            <Link
                                href={route('register')}
                                className="inline-block px-6 py-3 bg-yellow-500 text-white rounded-lg text-lg font-semibold hover:bg-yellow-600 dark:hover:bg-yellow-600"
                            >
                                Get Started
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
        </>
    );
}
