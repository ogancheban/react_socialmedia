import React, {Component} from 'react';

import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Adverst from "./components/adverst/Adverst";
import Dialogs from "./components/dialogs/Dialogs";
import { Routes, Route, Link } from "react-router-dom";


const App = (props) => {

    return (

        <body>
        <div className="wrapper">
            <div className="fullscreen">
                <Header/>
                <main className="main">
                    <section className="page__main main-page">
                        <div className="main-page__container _container">
                            <div className="main-page__body">
                                <div className="main-page__sidebar sidebar">
                                    <Navbar/>
                                    <Adverst/>
                                </div>
                            <Routes>
                                {/*<Route path="/profile" element={<Profile />} />*/}
                                <Route path="/profile" element={<Profile posts={props.posts} />} />
                                <Route path="/dialogs" element={<Dialogs />} />
                              {/*  <Route path="*" element={<NotFound />} />*/}

                              {/*  <Route path="/profile" render={<Profile />} />
                                <Route path="/dialogs" render={<Dialogs />} />*/}
                            </Routes>

                            </div>
                        </div>
                    </section>


                </main>
            </div>

            <footer className="footer">

            </footer>
        </div>


        </body>

    );
}


export default App;
