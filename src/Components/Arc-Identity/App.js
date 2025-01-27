
import React, { useState, useEffect } from "react";
import Identity from "@arc-publishing/sdk-identity";
// import Perfil from "./Perfil";
import Login from "./Components/Login";
import PasswordForgotten from './Components/PasswordForgotten';
import Home from "./Components/Home";
import Registro from "./Components/Register";


function App() {
  const urlBase = "https://api-sandbox.elcomercio.pe";
  const [islogged, setIsLogged] = useState(false);
  const [showRegistro, setShowRegistro] = useState(false);
  const [showOlvide, setShowOlvide] = useState(false);

  useEffect(() => {
    Identity.apiOrigin = urlBase;
    // handleLogged();
  });

  const handleLogged = () => {
    Identity.isLoggedIn()
      .then((res) => {
        if (res === true) {
          setIsLogged(true);
        }
      })
      .catch((err) => {
        console.log("Oops algo falló", err);
      });
  };

  const handleShowRegister = () => {
    setShowRegistro(!showRegistro);
    if (showOlvide) {
      setShowOlvide(false);
    }
  };

  const handleShowOlvide = () => {
    setShowOlvide(!showOlvide);
  };

  const handleCloseSession = () => {
    Identity.logout().then((res) => {
      setIsLogged(false);
    });
  };

  let userprofile = {};

  return (
    <div className="App">
      <section>
        {islogged ? ( //si esta logeado muestra
            <Home />
        ) : (
          <Login
            handleLogged={handleLogged}
            handleShowRegister={handleShowRegister}
            handleShowOlvide={handleShowOlvide}
          />
        )}
        {!islogged && (
          <>
            {showRegistro && <Registro handleLogged={handleLogged} />}

            {showOlvide && <PasswordForgotten />}
          </>
        )}
      </section>
    </div>
  );
}

export default App;
