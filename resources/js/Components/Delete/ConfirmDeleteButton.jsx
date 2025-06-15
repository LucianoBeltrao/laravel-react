import { useForm } from "@inertiajs/react";
import React from "react";
import DangerButton from "../Button/DangerButton";
import DeleteIcon from "../Icons/DeleteIcon";

function ConfirmDeleteButton({ id, routeName }){
    const { delete: destroy } = useForm();

    const handleDelete = () => {

        if(window.confirm("Tem certeza que deseja deletar este registro?")){
            destroy(route(routeName, id));
        }
    }

    return (
        <DeleteIcon className="w-6 h-6 text-red-600 hover:text-blue-500 cursor-pointer" onClick={handleDelete} />
  
    )

}
export default ConfirmDeleteButton