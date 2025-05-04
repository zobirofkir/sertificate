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
            <main className="flex justify-center items-center min-h-screen bg-white dark:bg-[#1b1b18] transition-colors duration-300">
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

            {/* Features Section */}
            <section className="bg-gray-100 dark:bg-[#2f2f2f] py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-yellow-500 dark:text-yellow-400">Features</h2>
                    <p className="mt-4 text-lg text-[#1b1b18] dark:text-[#EDEDEC]">
                        Explore the unique features of our platform.
                    </p>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-[#3a3a3a] p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-yellow-500 dark:text-yellow-400">Easy Management</h3>
                            <p className="mt-4 text-[#1b1b18] dark:text-[#EDEDEC]">
                                Effortlessly manage your certificates with intuitive tools.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-[#3a3a3a] p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-yellow-500 dark:text-yellow-400">Secure Verification</h3>
                            <p className="mt-4 text-[#1b1b18] dark:text-[#EDEDEC]">
                                Verify your certificates securely with blockchain technology.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-[#3a3a3a] p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-yellow-500 dark:text-yellow-400">Instant Access</h3>
                            <p className="mt-4 text-[#1b1b18] dark:text-[#EDEDEC]">
                                Gain instant access to your certificates from anywhere.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-white dark:bg-[#1b1b18]">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-yellow-500 dark:text-yellow-400">What Our Users Say</h2>
                    <div className="mt-8 space-y-6">
                        <div className="bg-gray-100 dark:bg-[#3a3a3a] p-6 rounded-lg shadow-lg">
                            <p className="text-lg text-[#1b1b18] dark:text-[#EDEDEC]">
                                "This platform has revolutionized how we manage and verify certificates. The process is seamless and secure!"
                            </p>
                            <p className="mt-4 font-semibold text-yellow-500 dark:text-yellow-400">John Doe</p>
                            <p className="text-sm text-gray-500 dark:text-gray-300">CEO, Example Corp</p>
                        </div>
                        <div className="bg-gray-100 dark:bg-[#3a3a3a] p-6 rounded-lg shadow-lg">
                            <p className="text-lg text-[#1b1b18] dark:text-[#EDEDEC]">
                                "The platform is very user-friendly, and I can access my certificates in just a few clicks."
                            </p>
                            <p className="mt-4 font-semibold text-yellow-500 dark:text-yellow-400">Jane Smith</p>
                            <p className="text-sm text-gray-500 dark:text-gray-300">HR Manager, Tech Solutions</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-yellow-500 text-white text-center">
                <h2 className="text-3xl font-bold">Join Us Today!</h2>
                <p className="mt-4 text-lg">Sign up now and start managing your certificates with ease.</p>
                <div className="mt-6">
                    <Link
                        href={route('register')}
                        className="inline-block px-6 py-3 bg-white text-yellow-500 rounded-lg text-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                        Get Started
                    </Link>
                </div>
            </section>

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
