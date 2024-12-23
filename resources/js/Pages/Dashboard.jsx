import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from "react";
import { EvervaultCard, Icon } from "../Components/ui/evervault-card";

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
                                <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                                <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                                <EvervaultCard text="Asset" />

                                <h2 className="dark:text-white text-black mt-4 text-sm font-light">
                                    Hover over this card to reveal an awesome effect. Running out of copy
                                    here.
                                </h2>
                                <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                                    Watch me hover
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
