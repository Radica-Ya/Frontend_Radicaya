import React from "react"
import { Route, Routes } from "react-router-dom"
import Registro from "../components/Views/Registro"
import Login from "../components/Views/Login"
import RadicarDocumento from "../components/Views/RadicarDocumento"
import DefaultLayout from "../components/reusable/Layout"
import ProtectedRoute from "../components/ProtectedRoute"
import HomeUser from "../components/Views/HomeUser"
import Home from "../components/Views/Home"
import ResponseToRequest from "../components/Views/ResponseToRequest"
import Users from "../components/Views/Users"

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Registro />} />
            <Route
                element={
                    <ProtectedRoute>
                        <DefaultLayout />
                    </ProtectedRoute>
                }
            >
                <Route path="/home" element={<Home />} />
                <Route path="/homeUser" element={<HomeUser />} />
                <Route path="/documents" element={<RadicarDocumento />} />
                <Route path="/responseToRequest" element={<ResponseToRequest />} />
                <Route path="/users" element={<Users />} />
            </Route>
        </Routes>
    )
}

export default Pages
