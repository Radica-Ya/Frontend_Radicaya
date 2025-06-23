import React from "react"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
    const userLogin = localStorage.getItem("infoUser")

    if (userLogin == undefined || userLogin == null) {
        return <Navigate to={"/login"} />
    }

    return children
}

export default ProtectedRoute
