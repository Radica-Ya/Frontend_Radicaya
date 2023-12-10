import {useForm} from "react-hook-form";
import { Link } from "react-router-dom";
import '../css/index.css';

const Login = () =>{
    const { register, handleSubmit, formState:{errors},} = useForm()

    const onSubmit = handleSubmit((data) =>{
        console.log(data)
    })

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