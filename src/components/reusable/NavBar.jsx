import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const NavBar = () => {
    const navigate = useNavigate()

    const infoUser = JSON.parse(localStorage.getItem("infoUser"))

    const routeHome = infoUser?.id_rol == 2 ? "/homeUser" : "/home"

    const handleLogout = () => {
        localStorage.removeItem("infoUser")
        toast.success("Sesion cerrada correctamente.", { theme: "colored" })

        setTimeout(() => {
            navigate("/")
        }, 1000)
    }

    return (
        <nav
            className="navbar navbar-expand-lg bg-dark p-3"
            data-bs-theme="dark"
        >
            <div className="container-fluid">
                <h2 className="text-white">Radicaya</h2>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-4" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={routeHome} className="nav-link">
                                Inicio
                            </Link>
                        </li>
                        {infoUser.id_rol == 1 && (
                            <li className="nav-item">
                                <Link to={"/users"} className="nav-link">
                                    Usuarios
                                </Link>
                            </li>
                        )}
                        {infoUser.id_rol == 2 && (
                            <li className="nav-item">
                                <Link to={"/documents"} className="nav-link">
                                    Radicar
                                </Link>
                            </li>
                        )}
                        
                    </ul>
                    <button className="btn btn-danger" onClick={handleLogout}>
                        Cerrar sesión
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
