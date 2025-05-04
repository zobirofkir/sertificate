import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react'
import React from 'react'

const index = () => {
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Exams',
        href: '/exams',
    },
];
    
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
    <Head title="Exams" />
    <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Exams</h1>
        <p>List of exams will be displayed here.</p>
    </div>
    </AppLayout>
  )
}

export default index