import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { registerDocument, updateDocument } from "../../lib/Api"
import { toast } from "react-toastify"

const RadicarDocumento = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const data = location.state || {}

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm()

    const infoUser = JSON.parse(localStorage.getItem("infoUser"))

    useEffect(() => {
        if (data) {
            setValue("dependence", data?.id_dependencia)
            setValue("date", data?.fecha_solicitud?.slice(0, 10))
            setValue("notes", data?.asunto)
            setValue("document1", data?.archivo ? [data.archivo] : [])
            setValue("document2", data?.archivo_2 ? [data.archivo_2] : [])
        }
    }, [])

    const onSubmit = handleSubmit(async (values) => {
        const formData = new FormData()

        formData.append("user_id", infoUser?.id)
        formData.append("dependence", values.dependence)
        formData.append("date", values.date)
        formData.append("notes", values.notes)

        if (values.document1?.[0]) {
            formData.append("document1", values.document1[0])
        }
        if (values.document2?.[0]) {
            formData.append("document2", values.document2[0])
        }

        try {
            let response
            if (data.id) {
                formData.append("id", data.id)
                response = await updateDocument(formData)
            } else {
                response = await registerDocument(formData)
            }

            if (response.result) {
                toast.success(
                    data.id
                        ? "Documento actualizado correctamente"
                        : "Documento creado correctamente",
                    {
                        theme: "colored",
                    }
                )
                navigate("/homeUser")
            }
        } catch (error) {
            console.error("Error al enviar el documento:", error)
            toast.error("Error al enviar el documento", { theme: "colored" })
        }
    })

    return (
        <div className="d-flex justify-content-center align-items-center mt-3">
            <div className="card bg-dark text-white" style={{ width: "20rem" }}>
                <h4 className="card-header">
                    {data.id ? "Editar solicitud" : "Radicar solicitud"}
                </h4>
                <div className="card-body">
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <select
                                className="form-select"
                                {...register("dependence", {
                                    required: "La dependencia es requerida",
                                })}
                            >
                                <option value="">
                                    Seleccionar una dependencia
                                </option>
                                <option value="1">Hacienda Municipal</option>
                                <option value="2">
                                    Planeación y Desarrollo Urbano
                                </option>
                                <option value="3">Obras Públicas</option>
                                <option value="4">Educación y Cultura</option>
                                <option value="5">Salud Pública</option>
                                <option value="6">Seguridad Ciudadana</option>
                                <option value="7">Medio Ambiente</option>
                                <option value="8">Tránsito y Transporte</option>
                            </select>
                            {errors.dependence && (
                                <span className="text-danger">
                                    {errors.dependence.message}
                                </span>
                            )}
                        </div>
                        <div className="mb-3">
                            <input
                                {...register("date", {
                                    required:
                                        "La fecha de solicitud es requerida",
                                })}
                                className="form-control"
                                type="date"
                            />
                            {errors.date && (
                                <span className="text-danger">
                                    {errors.date.message}
                                </span>
                            )}
                        </div>
                        <div className="mb-3">
                            <input
                                className="form-control"
                                type="file"
                                accept="application/pdf"
                                {...register("document1", {
                                    required: data.id ? false : "El documento es requerido",
                                })}
                            />
                            {errors.document1 && (
                                <span className="text-danger">
                                    {errors.document1.message}
                                </span>
                            )}
                        </div>
                        <div className="mb-3">
                            <input
                                className="form-control"
                                type="file"
                                accept="application/pdf"
                                {...register("document2")}
                            />
                        </div>
                        <div className="mb-3">
                            <textarea
                                className="form-control"
                                placeholder="Ingrese un asunto"
                                {...register("notes", {
                                    required: "El asunto es requerido",
                                })}
                            />
                            {errors.notes && (
                                <span className="text-danger">
                                    {errors.notes.message}
                                </span>
                            )}
                        </div>

                        <button className="btn btn-success w-100" type="submit">
                            {data.id ? "Actualizar" : "Enviar"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RadicarDocumento
