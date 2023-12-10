import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Registro from "./components/Registro";
import Login from "./components/Login";
import MenuPrincipal from "./components/MenuPrincipal";
import Formulario from "./components/Formulario";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<MenuPrincipal/>} />
          <Route path="/formulario" element={<Formulario/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
