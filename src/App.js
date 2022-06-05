import React from 'react';

import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Adverst from "./components/adverst/Adverst";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";


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

                                <Route path="/profile" element={<ProfileContainer />}  />

                                <Route path="/dialogs" element={<DialogsContainer
                                       store = {props.store}
                                />}
                                />
                               {/* <Route path="*" element={<div>Not Found !!!</div>} />*/}

                              {/*  <Route path="/profile" render={<Profile />} />
                                <Route path="/dialogs" render={<Dialogs />} />*/}
                                <Route path="/users"
                                       element={ <UsersContainer />}
                                />
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
