import React from 'react'
import '../Header/Header.css'
import { useState } from 'react'

export const Search = () => {
    const [noticias, setNoticias] = useState([])//alamacena la lista
    const [busqueda, setBusqueda] = useState("")//buscamos
    const datos = e => {
        e.preventDefault()//no se reinicie la pagona
        const from = "2021-07-19";
        const apiKey = "0c76dce6efd947d0bd1f6ac1f4324b9e";
        fetch(`https://newsapi.org/v2/everything?qInTitle=${busqueda}&from=${from}language=en&apiKey=${apiKey}&pageSize=20`)
            .then(response => response.json())
            .then(data => {
                // const {articles} = data
                // console.log(data)
                setNoticias(data)
            })
    }
    const cambiarState = e => {
        setBusqueda(e.target.value)

    }
    return (
        <div>

            <form class="wrap" action="" onSubmit={datos}>
                <div class="search">
                    <input type="text" class="searchTerm" placeholder="Qué estás buscando?" onChange={cambiarState}></input>
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </form>

            <div className='container'>
                {
                    // DEMO: listado de noticias obtenidas
                    noticias.articles &&
                    noticias.articles.map((item) => (

                        <div className='card' key={item.title}>
                            <img className='img' src={item.urlToImage} alt='' />
                            <div className='intro'>
                                <h4>{item.title}</h4>
                                <p > {item.description}</p>
                                <h5> Fecha: {item.publishedAt}</h5>
                                <button><a href={item.url}>Ver más</a></button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}






