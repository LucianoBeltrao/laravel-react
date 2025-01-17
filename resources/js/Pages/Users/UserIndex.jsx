import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/Button/PrimaryButton";
import SuccessButton from "@/Components/Button/SuccessButton";
import WarningButton from "@/Components/Button/WarningButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import ConfirmDeleteButton from "@/Components/Delete/ConfirmDeleteButton";
import AlertMessage from "@/Components/Alert/AlertMessage";

export default function UserIndex({ auth, users }) {

    const { flash } = usePage().props;


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 drak:text-gray-200 leading-tight">Usuários</h2>}
        >
            <Head title="Usuário" />

            <div className="py-4 max-w-7x1 mx-auto sm:px-6 lg:px-36">
                <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800">
                    <div className="flex justify-between items-center m-4">
                        <h3 className="text-lg">Listar</h3>
                        <div className="">
                            <Link href={route('users.create')}>
                                <SuccessButton>
                                    Cadastrar
                                </SuccessButton>
                            </Link>
                        </div>
                    </div>

                    <AlertMessage message={flash} />

                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-700">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-700">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        ID
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Nome
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-center">
                                        Ação
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                {users.data.map((user) => (
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={user.id}>
                                        <td className="px-6 py-2 text-sm text-gray-700 tracking-wider">
                                            {user.id}
                                        </td>
                                        <td className="px-6 py-2 text-sm text-gray-700 tracking-wider">
                                            {user.name}
                                        </td>
                                        <td className="px-6 py-2 text-sm text-gray-700 tracking-wider">
                                            {user.email}
                                        </td>
                                        <td className="px-6 py-2 text-center text-gray-700 tracking-wider">
                                            <Link href={route('users.show', { id: user.id })}>
                                                <PrimaryButton className="ms-1">
                                                    Visualizar
                                                </PrimaryButton>
                                            </Link>
                                            <Link href={route('users.edit', { id: user.id })}>
                                                <WarningButton className="ms-1">
                                                    Editar
                                                </WarningButton>
                                            </Link>
                                            <ConfirmDeleteButton id={user.id} routeName="users.destroy" />
                                        </td>
                                    </tr>))}

                            </tbody>

                        </table>
                    </div>
                    {/* Paginação */}
                    {/* <Pagination links={users.links} currentPage={users.current_page} /> */}
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
