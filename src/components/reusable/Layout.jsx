import { Navigate, Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"

const DefaultLayout = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <NavBar />
            <main className="container py-4 flex-grow-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default DefaultLayout
