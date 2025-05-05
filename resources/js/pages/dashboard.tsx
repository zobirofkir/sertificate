import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, ArcElement } from 'chart.js';

// Register ChartJS components
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, ArcElement, CategoryScale, LinearScale);

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    // Example chart data
    const chartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Certification Progress',
                data: [65, 59, 80, 81, 56, 55],
                borderColor: 'rgb(0, 0, 0)', // Black border for line
                backgroundColor: 'rgba(0, 0, 0, 0.2)', // Light gray background for fill
                fill: true,
            },
            {
                label: 'Certification Renewals',
                data: [28, 48, 40, 19, 86, 27],
                borderColor: 'rgb(128, 128, 128)', // Gray border for line
                backgroundColor: 'rgba(128, 128, 128, 0.2)', // Light gray background for fill
                fill: true,
            },
        ],
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 p-6">
                {/* Example Statistics Section */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Certification Overview */}
                    <div className="relative rounded-xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-lg overflow-hidden">
                        <div className="absolute inset-0 size-full bg-gradient-to-r from-black to-gray-600 opacity-40"></div>
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                        <div className="relative z-10 p-6 text-gray-900 dark:text-white">
                            <h2 className="text-xl font-semibold">Total Certifications</h2>
                            <p className="mt-2 text-sm">You have 120 active certifications.</p>
                        </div>
                    </div>

                    {/* Certification Progress */}
                    <div className="relative rounded-xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-lg overflow-hidden">
                        <div className="absolute inset-0 size-full bg-gradient-to-r from-gray-500 to-gray-700 opacity-40"></div>
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                        <div className="relative z-10 p-6 text-gray-900 dark:text-white">
                            <h2 className="text-xl font-semibold">Progress</h2>
                            <p className="mt-2 text-sm">You're 75% through the certification process.</p>
                        </div>
                    </div>

                    {/* Certification History */}
                    <div className="relative rounded-xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-lg overflow-hidden">
                        <div className="absolute inset-0 size-full bg-gradient-to-r from-gray-400 to-gray-600 opacity-40"></div>
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                        <div className="relative z-10 p-6 text-gray-900 dark:text-white">
                            <h2 className="text-xl font-semibold">Expired Certifications</h2>
                            <p className="mt-2 text-sm">5 certifications expired in the last month.</p>
                        </div>
                    </div>
                </div>

                {/* Line Chart for Certification Statistics */}
                <div className="relative rounded-xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-lg overflow-hidden">
                    <div className="absolute inset-0 size-full bg-gradient-to-r from-gray-600 to-gray-800 opacity-40"></div>
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    <div className="relative z-10 p-6">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Certification Trends</h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">See the trends in certification progress and renewals over time.</p>
                        <div className="mt-6">
                            <Line data={chartData} options={{ responsive: true }} />
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
