import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react'
import React from 'react'

const index = () => {

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Courses',
            href: '/courses',
        },
    ];
    
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
    <Head title="Courses" />
        <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
            <h1>Hello World</h1>
        </div>
    </AppLayout>

  )
}

export default index