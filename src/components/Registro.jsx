import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import "../css/index.css"
import { registerUsers } from "../lib/Api"

const Formulario = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm()

    const redireccion = useNavigate();

    const onSubmit = handleSubmit(async (values) => {
        try {
            const submit = await registerUsers(values)
            
            if (submit) {
                redireccion("/login")
            }

            // Se guarda informacion, faltan alertas 
        } catch (error) {
            console.log("Se produjo un error al registrar el usuario", error);
        }
    })

    return (
        <div className="container">
            <h2>Formulario de Registro</h2>
            <form className="form" onSubmit={onSubmit}>
                <label htmlFor="">Nombre</label>
                <input
                    type="text"
                    {...register("nombre", {
                        required: {
                            value: true,
                            message: "Nombre es requerido",
                        },
                        minLength: {
                            value: 5,
                            message: "Debe tener al menos 5 caracteres",
                        },
                        maxLength: {
                            value: 20,
                            message: "Debe tener maximo 20 caracteres",
                        },
                    })}
                />
                {errors.nombre && <span>{errors.nombre.message} </span>}

                <label htmlFor="email">Correo</label>
                <input
                    type="email"
                    {...register("email", {
                        required: {
                            value: true,
                            message: "El correo es requerido",
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Formato de Correo no valido",
                        },
                    })}
                />
                {errors.email && <span>{errors.email.message}</span>}

                <label htmlFor="telefono">Telefono</label>
                <input
                    type="text"
                    {...register("telefono", {
                        required: {
                            value: true,
                            message: "El Telefono es requerido",
                        },
                        pattern: {
                            value: /^\d+$/,
                            message:
                                "Solo se Permiten Caracteres de Tipo Númerico ",
                        },
                        minLength: {
                            value: 7,
                            message: "Debe terner como minimmo 7 Números",
                        },
                        maxLength: {
                            value: 10,
                            message: "Debe tener como maximo 10 Números",
                        },
                    })}
                />
                {errors.telefono && <span>{errors.telefono.message}</span>}

                <label htmlFor="contrasena">Contraseña</label>
                <input
                    type="password"
                    {...register("contrasena", {
                        required: {
                            value: true,
                            message: "La Contraseña es requerida",
                        },
                    })}
                />
                {errors.contrasena && <span>{errors.contrasena.message}</span>}
                <label htmlFor="confirmarcontrasena">
                    Confirmar Contraseña
                </label>
                <input
                    type="password"
                    {...register("confirmarcontrasena", {
                        required: {
                            value: true,
                            message: "Es Necesario Confirmar la Contraseña",
                        },
                        validate: (value) => {
                            if (value == watch("contrasena")) {
                                return true
                            } else {
                                return "Las Contraseñas no Coinciden"
                            }
                        },
                    })}
                />
                {errors.confirmarcontrasena && (
                    <span>{errors.confirmarcontrasena.message}</span>
                )}

                <button type="submit">Enviar</button>
            </form>
            <Link to="/login" className="Link">
                Ir a la página de inicio de sesión.
            </Link>
        </div>
    )
}

export default Formulario
