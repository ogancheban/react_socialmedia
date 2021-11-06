import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";


const App = () => {
  return (
        <body>
    <div className="wrapper">
        <div className="fullscreen">
     <Header />
            <main className="main">
                <section className="page__main main-page">
                    <div className="main-page__container _container">
                        <div className="main-page__body">
                            <div className="main-page__sidebar sidebar">
                                <Navbar />
                                <div className="sidebar__adverst adverst">
                                    <div className="adverst__block">
                                        <img src="./img/advert/adverst_01.png" alt="" />
                                    </div>
                                    <div className="adverst__block">
                                        <img src="./img/advert/adverst_02.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <Profile />
                        </div>
                    </div>
                </section>


            </main>
        </div>

        <footer className="footer">

        </footer>
    </div>

    <script src="js/script.js"></script>
    </body>

  );
}





export default App;
