import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Register from '../Components/Arc-Identity/Register';
import { Deporte } from '../Components/PageNews/PageComponents/News/Categories/Deporte';
import { Economia } from '../Components/PageNews/PageComponents/News/Categories/Economia';
import { Politica } from '../Components/PageNews/PageComponents/News/Categories/Politica';
import { Salud } from '../Components/PageNews/PageComponents/News/Categories/Salud';
import { Tecnologia } from '../Components/PageNews/PageComponents/News/Categories/Tecnologia';

import { Home } from './../Components/PageNews/Home/Home';
import PasswordForgotten from './../Components/Arc-Identity/PasswordForgotten';
import Login from './../Components/Arc-Identity/Login';
import Perfil from './../Components/Arc-Identity/Perfil';
import  Subscription  from './../Components/PageNews/PageComponents/Subscription/Subscription';

/* -----------------RUTAS DE NAVEGACION ----------------*/
export const Navigation = () => {

  return (
    <Router>
      <div className="Navigation">
        <Routes>
          
          <Route path="/register" element={<Register />} />
          <Route path="/perfil" element={<Perfil/>} />
          <Route path="/passwordForgotten" element={<PasswordForgotten/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/deporte/" element={<Deporte />} />
          <Route path="/economia" element={<Economia />} />
          <Route path="/politica" element={<Politica />} />
          <Route path="/salud" element={<Salud />} />
          <Route path="/tecnologia" element={<Tecnologia />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/" element={<Home/>} />

        </Routes>
      </div>
    </Router>
  );
}
