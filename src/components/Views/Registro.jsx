import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { registerUsers } from "../../lib/Api"
import { toast } from "react-toastify"

const Formulario = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm()

    const redireccion = useNavigate()

    const onSubmit = handleSubmit(async (values) => {
        try {
            const newValues = { ...values, id_rol: 2 }

            const submit = await registerUsers(newValues)

            if (submit) {
                toast.success("Registro Exitoso", { theme: "colored" })
                redireccion("/")
            }
        } catch (error) {
            console.log("Se produjo un error al registrar el usuario", error)
            toast.error("Error al registrar el Usuario", { theme: "colored" })
        }
    })

    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div
                    className="card bg-dark text-white"
                    style={{ width: "20rem" }}
                >
                    <h4 className="card-header">Registro</h4>
                    <div className="card-body">
                        <form onSubmit={onSubmit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Ingrese el nombre completo"
                                    {...register("nombre", {
                                        required: {
                                            value: true,
                                            message: "El nombre es requerido",
                                        },
                                        minLength: {
                                            value: 5,
                                            message:
                                                "Debe tener al menos 5 caracteres",
                                        },
                                        maxLength: {
                                            value: 20,
                                            message:
                                                "Debe tener maximo 20 caracteres",
                                        },
                                    })}
                                />
                                {errors.nombre && (
                                    <span className="text-danger">
                                        {errors.nombre.message}{" "}
                                    </span>
                                )}
                            </div>

                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Ingrese el correo electrónico"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "El correo es requerido",
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message:
                                                "Formato de Correo no valido",
                                        },
                                    })}
                                />
                                {errors.email && (
                                    <span className="text-danger">
                                        {errors.email.message}
                                    </span>
                                )}
                            </div>

                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Ingrese el celular"
                                    {...register("telefono", {
                                        required: {
                                            value: true,
                                            message: "El celular es requerido",
                                        },
                                        pattern: {
                                            value: /^\d+$/,
                                            message:
                                                "Solo se permiten caracteres de tipo númerico",
                                        },
                                        minLength: {
                                            value: 7,
                                            message:
                                                "Debe tener como minimmo 7 Números",
                                        },
                                        maxLength: {
                                            value: 10,
                                            message:
                                                "Debe tener como maximo 10 Números",
                                        },
                                    })}
                                />
                                {errors.telefono && (
                                    <span className="text-danger">
                                        {errors.telefono.message}
                                    </span>
                                )}
                            </div>

                            <div className="mb-3">
                                <input
                                    type="password"
                                    placeholder="Ingrese la contraseña"
                                    className="form-control"
                                    {...register("contrasena", {
                                        required: {
                                            value: true,
                                            message:
                                                "La Contraseña es requerida",
                                        },
                                    })}
                                />
                                {errors.contrasena && (
                                    <span className="text-danger">
                                        {errors.contrasena.message}
                                    </span>
                                )}
                            </div>

                            <div className="mb-3">
                                <input
                                    type="password"
                                    placeholder="Ingrese la confirmación contraseña"
                                    className="form-control"
                                    {...register("confirmarcontrasena", {
                                        required: {
                                            value: true,
                                            message:
                                                "La confirmación de la contraseña es requerida",
                                        },
                                        validate: (value) => {
                                            if (value == watch("contrasena")) {
                                                return true
                                            } else {
                                                return "Las contraseñas no coinciden"
                                            }
                                        },
                                    })}
                                />

                                {errors.confirmarcontrasena && (
                                    <span className="text-danger">
                                        {errors.confirmarcontrasena.message}
                                    </span>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="btn btn-success w-100"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                    <div className="card-footer d-flex justify-content-center align-items-center">
                        <Link
                            to="/"
                            className="link-opacity-50-hover link-light"
                        >
                            Ir a inicio de sesión.
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formulario
