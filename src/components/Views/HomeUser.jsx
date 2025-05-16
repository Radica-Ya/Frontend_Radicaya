import React, { useEffect, useState } from "react"
import { listDocumentsUser } from "../../lib/Api"
import Loader from "../reusable/Loader"
import moment from "moment"
import { useNavigate } from "react-router-dom"

const HomeUser = () => {
    const infoUser = JSON.parse(localStorage.getItem("infoUser"))

    const [stateGlobal, setStateGlobal] = useState({
        loading: true,
        listData: [],
        showModal: false,
        selectedItem: null,
    })

    const navigate = useNavigate()

    const { loading, listData, showModal, selectedItem } = stateGlobal

    const getListDocuments = async () => {
        try {
            setStateGlobal((prevValues) => ({ ...prevValues, loading: true }))

            const response = await listDocumentsUser(infoUser?.id)

            if (response?.result) {
                setStateGlobal((prevValues) => ({
                    ...prevValues,
                    listData: response?.data,
                }))
            }

            setStateGlobal((prevValues) => ({ ...prevValues, loading: false }))
        } catch (error) {
            console.log("Error get list documents", error)
        }
    }

    const handleShowResponse = (item) => {
        setStateGlobal((prevValues) => ({
            ...prevValues,
            showModal: true,
            selectedItem: item,
        }))
    }

    const handleEdit = (item) => {
        navigate("/documents", { state: item })
    }

    const handleCloseModal = () => {
        setStateGlobal((prevValues) => ({
            ...prevValues,
            showModal: false,
            selectedItem: null,
        }))
    }

    useEffect(() => {
        getListDocuments()
    }, [])

    if (loading) {
        return <Loader />
    }

    return (
        <div>
            <div>
                <h2>Bienvenid@, {infoUser?.nombre}</h2>
            </div>
            <div className="card mt-5">
                <div className="card-header bg-dark">
                    <h3 className="text-white">Solicitudes</h3>
                </div>
                <div className="card-body">
                    <div class="table-responsive">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Código solicitud</th>
                                    <th>Nombre dependencia</th>
                                    <th>Fecha solicitud</th>
                                    <th>Asunto</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listData?.length > 0 ? (
                                    listData.map((item) => (
                                        <tr key={item.id}>
                                            <th>{item.id}</th>
                                            <td>{item.codigo}</td>
                                            <td>{item.nombre_dependencia}</td>
                                            <td>
                                                {moment(
                                                    item.fecha_solicitud
                                                ).format("YYYY-MM-DD")}
                                            </td>
                                            <td colSpan={1}>{item.asunto}</td>
                                            <td>
                                                <span
                                                    class={`badge text-bg-${
                                                        item.nombre_estado ==
                                                        "SIN RESPUESTA"
                                                            ? "warning"
                                                            : "success"
                                                    }`}
                                                >
                                                    {item.nombre_estado}
                                                </span>
                                            </td>
                                            <td>
                                                {item.codigo_res ? (
                                                    <button
                                                        className="btn btn-success"
                                                        onClick={() =>
                                                            handleShowResponse(
                                                                item
                                                            )
                                                        }
                                                    >
                                                        Respuesta
                                                    </button>
                                                ) : (
                                                    <button
                                                        className="btn btn-warning"
                                                        onClick={() =>
                                                            handleEdit(item)
                                                        }
                                                    >
                                                        Editar
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

            {showModal && selectedItem && (
                <div
                    className="modal fade show"
                    tabIndex="-1"
                    style={{
                        display: "block",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    }}
                    onClick={handleCloseModal}
                >
                    <div
                        className="modal-dialog"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    Respuesta de la solicitud
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal}
                                />
                            </div>
                            <div className="modal-body">
                                <p>
                                    <strong>Código respuesta:</strong>{" "}
                                    {selectedItem?.codigo_res}
                                </p>
                                <p>
                                    <strong>Quien responde:</strong>{" "}
                                    {selectedItem?.nombre}
                                </p>
                                <p>
                                    <strong>Fecha respuesta:</strong>{" "}
                                    {moment(selectedItem?.fecha_res).format(
                                        "YYYY-MM-DD"
                                    )}
                                </p>
                                <p>
                                    <strong>Asunto:</strong>{" "}
                                    {selectedItem?.mensaje || "No disponible"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default HomeUser
