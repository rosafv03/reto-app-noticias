import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import PasswordForgotten from "./Components/PasswordForgotten";

import { Deporte } from './Components/Categories/Deporte';
import { Economia } from './Components/Categories/Economia';
import { Politica } from './Components/Categories/Politica';
import { Salud } from './Components/Categories/Salud';
import { Tecnologia } from './Components/Categories/Tecnologia';

/* -----------------RUTAS DE NAVEGACION ----------------*/
export const Navigation = () => {

  return (
    <Router>
      <div className="Navigation">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/passwordForgotten" element={<PasswordForgotten />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/deporte/" element={<Deporte />} />
          <Route path="/economia" element={<Economia />} />
          <Route path="/politica" element={<Politica />} />
          <Route path="/salud" element={<Salud />} />
          <Route path="/tecnologia" element={<Tecnologia />} />

        </Routes>
      </div>
    </Router>
  );
}
