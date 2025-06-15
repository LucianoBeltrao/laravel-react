import SuccessButton from "@/Components/Button/SuccessButton";
import WarningButton from "@/Components/Button/WarningButton";
import PrimaryButton from "@/Components/Button/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import ConfirmDeleteButton from "@/Components/Delete/ConfirmDeleteButton";
import ShowIcon from "@/Components/Icons/ShowIcon";
import EditIcon from "@/Components/Icons/EditIcon";


export default function SectorIndex({ auth, sectors }) {


    const { flash } = usePage().props;

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 drak:text-gray-200 leading-tight">Setores</h2>}
        >
            <Head title="Setor" />
            <div className="py-4 max-w-7x1 mx-auto sm:px-6 lg:px-36">
                <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800">
                    <div className="flex justify-between items-center m-4">
                        <h3 className="text-lg">Listar</h3>
                        <div className="">
                            <Link href={route('sectors.create')}>
                                <SuccessButton>
                                    Cadastrar
                                </SuccessButton>
                            </Link>
                        </div>
                    </div>


                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-700">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-700">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Id
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Cliente
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Setor
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Responsável
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Logradouro
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Bairro
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Cidade
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Estado
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-center">
                                        Ação
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {sectors.map((sector) => (
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={sector.id}>
                                        <td className="px-6 py-2 text-sm text-left text-gray-700 tracking-wider">
                                            {sector.id ?? '-'}
                                        </td>
                                        <td className="px-6 py-2 text-sm text-left text-gray-700 tracking-wider">
                                            {sector.client ?? '-'}
                                        </td>
                                        <td className="px-6 py-2 text-sm text-left text-gray-700 tracking-wider">
                                            {sector.name ?? '-'}
                                        </td>
                                        <td className="px-6 py-2 text-sm text-left text-gray-700 tracking-wider">
                                            {sector.responsavel ?? '-'}
                                        </td>
                                        <td className="px-6 py-2 text-sm text-left text-gray-700 tracking-wider">
                                            {sector.logradouro ?? '-'}
                                        </td>
                                        <td className="px-6 py-2 text-sm text-left text-gray-700 tracking-wider">
                                            {sector.bairro ?? '-'}
                                        </td>
                                        <td className="px-6 py-2 text-sm text-left text-gray-700 tracking-wider">
                                            {sector.cidade ?? '-'}
                                        </td>
                                        <td className="px-6 py-2 text-sm text-left text-gray-700 tracking-wider">
                                            {sector.estado ?? '-'}
                                        </td>
                                        <td className="px-6 py-2 text-sm text-center text-gray-700 tracking-wider">
                                            <div className="flex justify-center items-center gap-x-2">
                                                <Link href={route('sectors.show', { id: sector.id })}>

                                                    <ShowIcon className="w-6 h-6 text-gray-500 hover:text-blue-500 cursor-pointer" />

                                                </Link>
                                                <Link href={route('sectors.edit', { id: sector.id })}>

                                                    <EditIcon className="w-6 h-6 text-orange-500 hover:text-blue-500 cursor-pointer" />

                                                </Link>
                                                <ConfirmDeleteButton id={sector.id} routeName="sectors.destroy" />
                                            </div>
                                        </td>

                                    </tr>))}

                            </tbody>
                        </table>
                    </div>

                </div>

            </div>


        </AuthenticatedLayout>
    )
}
