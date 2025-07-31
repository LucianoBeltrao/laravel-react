import AlertMessage from "@/Components/Alert/AlertMessage";
import InfoButton from "@/Components/InfoButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { BentoGrid, BentoGridItem } from "@/Components/ui/bento-grid";
import BackIcon from "@/Components/Icons/BackIcon";
import { CardBody, CardContainer, CardItem } from "../../Components/ui/3d-card";
import Image from "../../../images/image.png";

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
                        description={asset.patrimony_number ?? '-'}
                        icon={<span>🌟</span>}
                    />
                    <BentoGridItem
                        title="Nome"
                        description={asset.name ?? '-'}
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
                        title="Modelo"
                        description={asset.model ?? '-'}
                        icon={<span>🚀</span>}
                    />
                    <BentoGridItem
                        title="Saúde"
                        description={asset.condition ?? '-'}
                        icon={<span>🚀</span>}
                    />
                    <BentoGridItem
                        title="Nº Nota Fiscal"
                        description={asset.invoice_number ?? '-'}
                        icon={<span>🚀</span>}
                    />
                    <BentoGridItem
                        title="Idsetor"
                        description={asset.sector_id ?? '-'}
                        icon={<span>🚀</span>}
                    />
                    <BentoGridItem
                        title="Responsável"
                        description={asset.user_id ?? '-'}
                        icon={<span>🚀</span>}
                    />
                    <BentoGridItem
                        title="Valor"
                        description={'R$ ' + asset.value ?? '-'}
                        icon={<span>🚀</span>}
                    />
                    <Link href={route('users.index')}>
                        <InfoButton>
                            <BackIcon className="w-6 h-6 text-white" />
                        </InfoButton>
                    </Link>
                    {/* ... */}
                </BentoGrid>

                <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <CardContainer className="inter-var">
                            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                                <CardItem
                                    translateZ={50}
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    Make things float in air
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    Hover over this card to unleash the power of CSS perspective
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <img
                                        src={Image}
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                                <div className="flex justify-between items-center mt-20">
                                    <CardItem
                                        translateZ={20}
                                        as={Link}
                                        href="https://twitter.com/mannupaaji"
                                        target="__blank"
                                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                    >
                                        Try now →
                                    </CardItem>
                                    <CardItem
                                        translateZ={20}
                                        as="button"
                                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                    >
                                        Sign up
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
