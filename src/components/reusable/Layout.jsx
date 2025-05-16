import { Navigate, Outlet } from "react-router-dom"
import NavBar from "./NavBar"

const DefaultLayout = () => {
    return (
        <div>
            <NavBar />
            <main className="container py-3">
                <Outlet />
            </main>
        </div>
    )
}

export default DefaultLayout
