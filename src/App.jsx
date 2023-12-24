import { Route, Routes, Link } from "react-router-dom";
import Registro from "./components/Registro";
import Login from "./components/Login";
import MenuPrincipal from "./components/MenuPrincipal";
import Formulario from "./components/Formulario";
import TablaUsuarios from "./components/TablaUsuarios";


function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<MenuPrincipal/>} />
          <Route path="/formulario" element={<Formulario/>} />
          <Route path="/user" element={<TablaUsuarios/>} />
        </Routes>
      </div>
  );
}

export default App;

