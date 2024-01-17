import React from "react"
import { Route, Routes } from "react-router-dom"
import Registro from "../components/Registro"
import Login from "../components/Login"
import MenuPrincipal from "../components/MenuPrincipal"
import Formulario from "../components/Formulario"
import TablaUsuarios from "../components/TablaUsuarios"
import { useAuth } from "../autentication/AuthContext"

const Pages = () => {
    const {isAuthenticated} = useAuth();

    console.log(isAuthenticated);
    return (
        <Routes>
            <Route path="/" element={<Registro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/menu" element={<MenuPrincipal />} />
            <Route path="/formulario" element={<Formulario />} />
            <Route path="/user" element={<TablaUsuarios />} />
        </Routes>
    )
}

export default Pages
