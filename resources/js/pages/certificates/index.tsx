import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react'
import React from 'react'

const index = () => {
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Certificates',
        href: '/certificates',
    },
];
    
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
    <Head title="Certificates" />
    <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Certificates</h1>
        <p>List of certificates will be displayed here.</p>
    </div>
    </AppLayout>
  )
}

export default index