
import { AuthProvider } from "./autentication/AuthContext"
import Pages from "./pages/Pages"

function App() {
    return (
        <AuthProvider>
            <Pages/>
        </AuthProvider>
    )
}

export default App
