import { Route, Routes, Link } from "react-router-dom"
import Registro from "./components/Registro"
import Login from "./components/Login"
import MenuPrincipal from "./components/MenuPrincipal"
import Formulario from "./components/Formulario"
import TablaUsuarios from "./components/TablaUsuarios"
import { AuthProvider } from "./autentication/AuthContext"

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Registro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/menu" element={<MenuPrincipal />} />
                <Route path="/formulario" element={<Formulario />} />
                <Route path="/user" element={<TablaUsuarios />} />
            </Routes>
        </AuthProvider>
    )
}

export default App
