import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

function VGDashboard() {
    return (
        <Authenticated header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                Video Game Dashboard
            </h2>
        }>
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            You found the video game dashboard
                        </div>
                    </div>
                </div>
            </div>

        </Authenticated>
    )
}

export default VGDashboard