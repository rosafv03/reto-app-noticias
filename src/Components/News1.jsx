import './NewsMain.css'
import React, { useState, useEffect } from "react";

export const News1 = () => {
  const [listNews, setListNews] = useState({});
  useEffect(() => {
    const qInTitle = "Pedro castillo"; // noticias sobre "tesla"
    const from = "2021-07-19"; // fecha noticias publicadas (desde)
    const apiKey = "4dea85dd6e2c47678dc558f73224f5d0";
    const url = `https://newsapi.org/v2/everything?qInTitle=${qInTitle}&from=${from}language=en&apiKey=${apiKey}&pageSize=1`;

    const request = new Request(url);//url

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
    <body className='grid-container'>
      <titular className="main"> {
        // DEMO: listado de noticias obtenidas
        listNews.articles &&
        listNews.articles.map((item) => (
          <div className='slider' key={item.title}>
            <img className='img' src={item.urlToImage} alt='' />
          </div>
        ))
      }</titular>
      <aside className='sidebar'>
        {
          // DEMO: listado de noticias obtenidas
          listNews.articles &&
          listNews.articles.map((item) => (
            <div className='text' key={item.title}>

              <div class='content'>
                <h4>{item.title}</h4>
                <p > {item.description}</p>
                <h5> Fecha: {item.publishedAt}</h5>
                <button><a href={item.url}>Ver más</a></button>
              </div>

            </div>
          ))
        }
      </aside>
    </body>
  )
}
export default News1;
