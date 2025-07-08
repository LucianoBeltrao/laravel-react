import AlertMessage from "@/Components/Alert/AlertMessage";
import InfoButton from "@/Components/InfoButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { BentoGrid, BentoGridItem } from "@/Components/ui/bento-grid";
import BackIcon from "@/Components/Icons/BackIcon";

export default function AssetShow({ auth, asset }) {

    const { flash } = usePage().props;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 drak:text-gray-200 leading-tight">Ativos</h2>}
        >
            <Head title="Ativo" />

            <div className="py-4 max-w-7x1 mx-auto sm:px-6 lg:px-36">
                {/* <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800">
                    <div className="flex justify-between items-center m-4">
                        <h3 className="text-lg">Visualizar</h3>
                        <div className="">
                            <Link href={route('users.index')}>
                                <InfoButton>
                                    Listar
                                </InfoButton>
                            </Link>
                        </div>
                    </div>

                    <AlertMessage message={flash} />

                    <div className="bg-gray-50 text-sm dark:bg-gray-700 p-4 rounded-lg shadow-m">
                        <div className="mb-4">
                            <p className="text-md font-semibold text-gray-700 dark:text-gray-200">ID</p>
                            <p className="text-gray-600 dark:text-gray-200">{user.id}</p>
                        </div>
                        <div className="mb-4">
                            <p className="text-md font-semibold text-gray-700 dark:text-gray-200">Nome</p>
                            <p className="text-gray-600 dark:text-gray-200">{user.name}</p>
                        </div>
                        <div className="mb-4">
                            <p className="text-md font-semibold text-gray-700 dark:text-gray-200">E-mail</p>
                            <p className="text-gray-600 dark:text-gray-200">{user.email}</p>
                        </div>
                    </div>
                </div> */}

                <BentoGrid>
                    <BentoGridItem
                        title="Nº Patrimônio"
                        description={asset.patrimony_number?? '-'}
                        icon={<span>🌟</span>}
                    />
                    <BentoGridItem
                        title="Nome"
                        description={asset.name?? '-'}
                        icon={<span>🚀</span>}
                    />
                    <BentoGridItem
                        title="Categoria"
                        description={asset.category ?? '-'}
                        icon={<span>🚀</span>}
                    />
                    <BentoGridItem
                        title="Marca"
                        description={asset.brand ?? '-'}
                        icon={<span>🚀</span>}
                    />
                    <BentoGridItem
                        title="Marca"
                        description={asset.model ?? '-'}
                        icon={<span>🚀</span>}
                    />
                    <BentoGridItem
                        title="Marca"
                        description={asset.condition ?? '-'}
                        icon={<span>🚀</span>}
                    />
                    <BentoGridItem
                        title="Marca"
                        description={asset.invoice_number ?? '-'}
                        icon={<span>🚀</span>}
                    />
                    <BentoGridItem
                        title="Marca"
                        description={asset.sector_id ?? '-'}
                        icon={<span>🚀</span>}
                    />
                    <BentoGridItem
                        title="Marca"
                        description={asset.user_id ?? '-'}
                        icon={<span>🚀</span>}
                    />
                    <BentoGridItem
                        title="Marca"
                        description={asset.value ?? '-'}
                        icon={<span>🚀</span>}
                    />
                    <Link href={route('users.index')}>
                        <InfoButton>
                            <BackIcon className="w-6 h-6 text-white" />
                        </InfoButton>
                    </Link>
                    {/* ... */}
                </BentoGrid>
            </div>

        </AuthenticatedLayout>
    )
}
