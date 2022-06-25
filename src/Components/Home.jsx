
/* import '../App.css'; */
import React from "react";
/* import logo from '../img/logo-white.png'; */
import { Footer } from "./Footer";
import News1 from './News1';
import News2 from './News2';
import './Home.css'
import './News.css'
import './Footer.css'
import './Header.css'
import News3 from "./News3";
import { Header } from "./Header";


export const Home = () => {
  
  return (
    <div>
    <div><Header /></div>
      
      {/* <div className="container">  */}

      <section className="container-full">
        <section>
          <h1>Titulares</h1>
          <News1 />
        </section>

        <section>
          <h1>Noticias relacionadas</h1>
          <News2 />
        </section>
        <section>
          <h1>Lo más popular</h1>
          <News3 />
        </section>
      </section>
      <Footer />

    </div>

    /*    </div> */
  );
}

export default Home;
