
import React, { useState, useEffect } from "react";
import Identity from "@arc-publishing/sdk-identity";

function Login({ handleLogged  }) {
  const urlBase = "https://api-sandbox.elcomercio.pe";
  const [error, setError] = useState(false);
  const [dataLogin, setDataLogin] = useState({
    emailLogin: "",
    passLogin: "",
  });

  useEffect(() => {
    Identity.apiOrigin = urlBase;
  });

  const handleInput = (event) => {
    const { value, name } = event.target;
    setDataLogin({
      ...dataLogin,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const { emailLogin, passLogin } = dataLogin;
    Identity.login(emailLogin, passLogin, { rememberMe: true })
      .then((res) => {
        handleLogged();
      })
      .catch((error) => {
        setError("Correo o contraseña inválidos");
      });
  };

  // const handleShowRegister = (e) =>{//agregado
  //   e.preventDefault();
  // }

  // const handleShowRegister = () =>{//agregado
  //   <Registro />
  // }

  return (
    <div className="App">
      <header className="App-header">
        <p>Ingresar</p>
      </header>
      <section>
        <form>
          {error && <p className="alert">{error}</p>}
          <input
            type="email"
            name="emailLogin"
            placeholder="Ingresa tu Correo"
            required
            onChange={handleInput}
          />
          <br />
          <input
            type="password"
            name="passLogin"
            placeholder="Ingresa tu Contraseña"
            required
            onChange={handleInput}
          />
          <br />

          <a href="/passwordForgotten" className="link" >
            Olvide mi contraseña
          </a>

          <br />
          <button type="button" name="btnlogin" onClick={handleSubmit}>
            Inciar sesión
          </button>

          <br />
          <a href="/register" className="link" >
            Registrarme
          </a>
        </form>
      </section>
    </div>
  );
}

export default Login;
