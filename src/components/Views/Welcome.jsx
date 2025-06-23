import React from "react"
import fondo from "../../assets/fondo.jpg"
import { Link } from "react-router-dom"

const Welcome = () => {
    return (
        <div
            className="text-white"
            style={{
                backgroundImage: `url(${fondo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                width: "100%",
                display: "flex",
                alignItems: "flex-start", // contenido arriba
                justifyContent: "flex-start", // contenido a la izquierda
                padding: "40px", // espacio desde los bordes
            }}
        >
            <div style={{ maxWidth: "500px" }}>
                <h2 className="fw-bold fs-1">Radicaya</h2>
                <p className="fs-5">
                    Gestioná tus documentos de forma rápida, segura y sin
                    papeles. Con Radicaya, tu entidad puede radicar, organizar y
                    responder documentos desde cualquier lugar, ahorrando tiempo
                    y mejorando la eficiencia.
                </p>

                <Link to="/login" className="btn btn-light text-dark mt-3">
                    Iniciar Sesión
                </Link>
            </div>
        </div>
    )
}

export default Welcome
