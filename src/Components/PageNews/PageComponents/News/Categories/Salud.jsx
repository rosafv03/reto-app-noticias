import '../News.css'
import React, { useState, useEffect } from "react";

export const Salud = () => {
    const [listNews, setListNews] = useState({});
    useEffect(() => {
        // DEMO: Para obtener los datos de la API en nuestro localhost
        // URL API: https://newsapi.org/v2/everything?q=tesla&from=2021-06-19&sortBy=publishedAt&apiKey=0c76dce6efd947d0bd1f6ac1f4324b9e
        const qInTitle = "salud"; 
        const from = "2021-07-19"; // fecha noticias publicadas (desde)
        // const apiKey = "0c76dce6efd947d0bd1f6ac1f4324b9e"; // reemplazar tu API KEY
        const apiKey = "715c578422ca4358b813c26cc38b75c1";
        const url = `https://newsapi.org/v2/everything?qInTitle=${qInTitle}&from=${from}language=en&apiKey=${apiKey}&pageSize=4`;


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
        <div className='container'>
            {
                // DEMO: listado de noticias obtenidas
                listNews.articles &&
                listNews.articles.map((item) => (

                    <div className='card' key={item.title}>
                        <img className='img' src={item.urlToImage} alt='' />
                        <div className='intro'>
                            <h4>{item.title}</h4>
                            <p > {item.description}</p>
                            <time> Fecha: {item.publishedAt}</time>
                            <button><a href={item.url}>Ver más</a></button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
