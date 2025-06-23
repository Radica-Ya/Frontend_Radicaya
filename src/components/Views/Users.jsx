import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Loader from "../reusable/Loader"
import { changeRoleUser, listUsers } from "../../lib/Api"
import { toast } from "react-toastify"

const Users = () => {
    const [stateGlobal, setStateGlobal] = useState({
        loading: true,
        listData: [],
    })

    const navigate = useNavigate()

    const { loading, listData } = stateGlobal

    const getListUsers = async () => {
        try {
            setStateGlobal((prevValues) => ({ ...prevValues, loading: true }))

            const response = await listUsers()

            if (response?.result) {
                setStateGlobal((prevValues) => ({
                    ...prevValues,
                    listData: response?.data,
                }))
            }

            setStateGlobal((prevValues) => ({ ...prevValues, loading: false }))
        } catch (error) {
            console.log("Error get list users", error)
        }
    }

    const changeRole = async (userId) => {
        try {
            const response = await changeRoleUser(userId)

            if (response?.result) {
                toast.success("Rol cambiado correctamente", { theme: "colored" })
                getListUsers()
            }
        } catch (error) {
            console.log("Error al cambiar el rol", error)
            toast.error("Error al cambiar el rol", { theme: "colored" })
        }
    }

    const handleChangeRole = async (userId) => {
        const confirmed = window.confirm(
            "¿Estás seguro de cambiar el rol de este usuario?"
        )

        if (confirmed) {
            try {
                changeRole(userId)
            } catch (error) {
                console.log("Error al cambiar el rol", error)
            }
        }
    }

    useEffect(() => {
        getListUsers()
    }, [])


    if (loading) {
        return <Loader />
    }

    return (
        <div className="card mt-5">
            <div className="card-header bg-dark">
                <h3 className="text-white">Usuarios</h3>
            </div>
            <div className="card-body">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Correo electrónico</th>
                                    <th>Celular</th>
                                    <th>Rol</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listData?.length > 0 ? (
                                    listData.map((item) => (
                                        <tr key={item.id}>
                                            <th>{item.id}</th>
                                            <td>{item.nombre}</td>
                                            <td>{item.email}</td>
                                            <td>{item.telefono}</td>
                                            <td>
                                                <span
                                                    className={`badge text-bg-${
                                                        item.id_rol === 2
                                                            ? "warning"
                                                            : "primary"
                                                    }`}
                                                >
                                                    {item.rol}
                                                </span>
                                            </td>
                                            <td>
                                                {item.id_rol === 2 && (
                                                    <button
                                                        className="btn btn-success"
                                                        onClick={() =>
                                                            handleChangeRole(
                                                                item.id
                                                            )
                                                        }
                                                    >
                                                        Cambiar rol
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <th>No hay registros</th>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users
