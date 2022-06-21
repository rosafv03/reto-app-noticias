
/* import '../App.css'; */
import React from "react";
import logo from '../img/logo-white.png';
import News from './News';
import './Home.css'

export const Home=()=> {
  /* const [listNews, setListNews] = useState({});
  useEffect(() => {
    // DEMO: Para obtener los datos de la API en nuestro localhost
    // URL API: https://newsapi.org/v2/everything?q=tesla&from=2021-06-19&sortBy=publishedAt&apiKey=0c76dce6efd947d0bd1f6ac1f4324b9e
    const qInTitle = "tesla"; // noticias sobre "tesla"
    const from = "2021-07-19"; // fecha noticias publicadas (desde)
    const apiKey = "0c76dce6efd947d0bd1f6ac1f4324b9e"; // reemplazar tu API KEY
    const url = `https://newsapi.org/v2/everything?qInTitle=${qInTitle}&from=${from}language=en&apiKey=${apiKey}`;
    const request = new Request(url);

    fetch(request)
      .then((response) => response.json()) // convierte a JSON
      .then((news) => {
        // si todo es correcto lista los resultados en consola
        console.log(news);
        setListNews(news);
      })
      .catch((error) => {
        // si hubo un error impreme los detalles en consola
        console.log(error);
      });
  }, []);
 */
//className="App"
  return (
    <div >
      <header className="App-header">
        <img className="img-logo" src={logo} alt="65465" />
        <button className="btn-sub">Inicia Sesión</button>
      </header>
      <section>
        <News/>
      </section>
    </div>
  );
}

export default Home;
