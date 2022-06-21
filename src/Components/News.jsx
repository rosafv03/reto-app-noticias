/* import '../App.css'; */
import './Home.css'
import React, { useState, useEffect } from "react";

export const News=()=> {
  const [listNews, setListNews] = useState({});
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

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <section className="news-container">
        <h1>Lista Noticias Ejemplo</h1>
        {
          // DEMO: listado de noticias obtenidas
          listNews.articles &&
            listNews.articles.map((item) => (
              <div className='container'  key={item.publishedAt}>{item.title} {item.author} {item.publishedAt}<img className='img-news' src={item.urlToImage} alt='' /></div>
              
            ))
        }
        <div> 
        
        </div>
      </section>
    </div>
  );
}

export default News;
