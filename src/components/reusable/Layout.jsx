import { Navigate, Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"

const DefaultLayout = () => {
    return (
        <div>
            <NavBar />
            <main className="container py-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default DefaultLayout
