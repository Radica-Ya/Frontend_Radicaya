import {useForm} from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import '../css/index.css';
import { loginUsers } from "../lib/Api";
import { toast } from "react-toastify";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()

    const redireccion = useNavigate();

    const onSubmit = handleSubmit(async (values) =>{
        try{
            const submit = await loginUsers(values)

            if (submit) {
                toast.success('Ingreso Exitoso');
                redireccion("/menu");
            }
        } catch (error) {
            console.log("Se produjo un error al iniciar sesion", error );
            toast.error('Error al ingresar');
        }

    });

    return <div className="container" >
        <h2>Iniciar Sesión</h2>
        <form className="form" onSubmit={onSubmit} >

            <label htmlFor="nombre">Usuario</label>
            <input type="text"
            {...register("nombre", {
                required: {
                    value: true,
                    message: "El usuario es requerido"
                },
            }) } />
            {
                errors.nombre && <span>{errors.nombre.message}</span>
            }

            <label htmlFor="contrasena">Contraseña</label>
            <input type="password"
            {...register("contrasena", {
                required: {
                    value: true,
                    message: "La Contraseña es requerida"
                },
            })}/>
            {
                errors.contrasena && <span>{errors.contrasena.message}</span>
            }

            <button type="submit">Ingresar</button>
        </form>
 
        <Link to="/" className="Link">¿Todavía no tenés una cuanta?</Link>

    </div>

}

export default Login