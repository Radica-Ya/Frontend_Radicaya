import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"

import { loginUsers } from "../../lib/Api"
import { toast } from "react-toastify"

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const redireccion = useNavigate()

    const onSubmit = handleSubmit(async (values) => {
        try {
            const response = await loginUsers(values)

            if (response) {
                localStorage.setItem("infoUser", JSON.stringify(response.dataUser))
                toast.success("Ingreso Exitoso", { theme: "colored" })

                if (response?.dataUser?.id_rol == 2) {
                    redireccion("/homeUser")
                }else {
                    redireccion("/home")
                }
            }
        } catch (error) {
            console.log("Se produjo un error al iniciar sesion", error)
            toast.error("No se pudo iniciar sesión", { theme: "colored" })
        }
    })

    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div
                    className="card bg-dark text-white"
                    style={{ width: "20rem" }}
                >
                    <h4 className="card-header">Iniciar Sesión</h4>
                    <div className="card-body">
                        <form onSubmit={onSubmit}>
                            <div className="mb-4">
                                <label className="form-label">
                                    Correo electrónico
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Ingrese el correo electrónico"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "El Correo es requerido",
                                        },
                                    })}
                                />
                                {errors.email && (
                                    <span className="text-danger">
                                        {errors.email.message}
                                    </span>
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Ingrese una contraseña"
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
                            <div class="d-grid">
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                >
                                    Ingresar
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer d-flex justify-content-center align-items-center">
                        <Link
                            to="/register"
                            className="link-opacity-50-hover link-light"
                        >
                            ¿Todavía no tenés una cuenta?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
