import moment from "moment"
import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { downloadDocument, responseRequest } from "../../lib/Api"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

const ResponseToRequest = () => {
    const location = useLocation()

    const data = location.state || {}

    const infoUser = JSON.parse(localStorage.getItem('infoUser'));

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = handleSubmit(async (values) => {
        try {
            const dataValues = {
                mensaje: values.message,
                id_usuario: infoUser?.id,
                id_documento: data?.id,
                nombre_usuario: data?.nombre_usuario,
                email_usuario: data?.email_usuario,
            }

            const response = await responseRequest(dataValues)

            if (response.result) {
                toast.success("Respuesta enviada correctamente", { theme: "colored" })
                navigate('/home')
            }
        } catch (error) {
            console.error("Error al enviar la respuesta:", error);
            toast.error("Error al enviar la respuesta", { theme: "colored" })
        }
    })

    return (
        <div className="d-flex justify-content-center align-items-center mt-3">
            <div className="card bg-dark text-white" style={{ width: "27rem" }}>
                <h4 className="card-header">Responder solicitud</h4>
                <div className="card-body">
                    <div>
                        <div className="d-flex gap-2">
                            <p className="fw-bold">Usuario:</p>
                            <p>{data?.nombre_usuario}</p>
                        </div>
                        <div className="d-flex gap-2">
                            <p className="fw-bold">Fecha solicitud:</p>
                            <p>
                                {moment(data?.fecha_solicitud).format(
                                    "YYYY-MM-DD"
                                )}
                            </p>
                        </div>
                        <div className="d-flex gap-2">
                            <p className="fw-bold">Dependencia:</p>
                            <p>{data?.nombre_dependencia}</p>
                        </div>
                        <div className="d-flex gap-2">
                            <p className="fw-bold">Asunto:</p>
                            <p>{data?.asunto}</p>
                        </div>
                        <div className="d-flex gap-2">
                            <button
                                className="btn btn-primary"
                                onClick={() => downloadDocument(data?.archivo)}
                            >
                                Descargar documento
                            </button>
                            {data?.archivo_2 && (
                                <button
                                    className="btn btn-secondary"
                                    onClick={() =>
                                        downloadDocument(data?.archivo_2)
                                    }
                                >
                                    Descargar documento 2
                                </button>
                            )}
                        </div>
                    </div>
                    <hr />
                    <div>
                        <form onSubmit={onSubmit}>
                            <div className="mb-3">
                                <textarea
                                    className="form-control"
                                    placeholder="Ingrese un asunto"
                                    {...register("message", {
                                        required: {
                                            value: true,
                                            message: "El asunto es requerido",
                                        },
                                    })}
                                />
                                {errors.notes && (
                                    <span className="text-danger">
                                        {errors.message.message}
                                    </span>
                                )}
                            </div>

                            <button
                                className="btn btn-success w-100"
                                type="submit"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResponseToRequest
