import { Route, Routes, Link } from "react-router-dom";
import Registro from "./components/Registro";
import Login from "./components/Login";
import MenuPrincipal from "./components/MenuPrincipal";
import Formulario from "./components/Formulario";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<MenuPrincipal/>} />
          <Route path="/formulario" element={<Formulario/>} />
        </Routes>
      </div>
  );
}

export default App;
