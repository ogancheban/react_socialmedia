import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Adverst from "./components/Adverst";


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
<Adverst />
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
