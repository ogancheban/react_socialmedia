import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const App = () => {
  return (
        <body>
    <div className="wrapper">
        <div className="fullscreen">
            <header className="header">
                <div className="header__container _container">
                    <div className="header__logo _ibg">
                        <img className="logo__icon" src="./img/header/Logo_img.svg" alt="" />
                    </div>
                    <a href="#" className="header__title">Social Media</a>

                </div>
            </header>
            <main className="main">
                <section className="page__main main-page">
                    <div className="main-page__container _container">
                        <div className="main-page__body">
                            <div className="main-page__sidebar sidebar">
                                <nav className="sidebar__menu menu">
                                    <ul className="menu__list">
                                        <li className="menu__item">
                                            <div className="menu__icon">
                                                <img src="./img/menu icon/menu_01.svg" alt="Profile" />
                                            </div>
                                            <a href="" className="menu__link">Profile</a>
                                        </li>
                                        <li className="menu__item">
                                            <div className="menu__icon">
                                                <img src="./img/menu icon/menu_02.svg" alt="Profile" />
                                            </div>
                                            <a href="" className="menu__link">Messages</a>
                                        </li>
                                        <li className="menu__item">
                                            <div className="menu__icon">
                                                <img src="./img/menu icon/menu_03.svg" alt="Profile" />
                                            </div>
                                            <a href="" className="menu__link">News</a>
                                        </li>
                                        <li className="menu__item">
                                            <div className="menu__icon">
                                                <img src="./img/menu icon/menu_04.svg" alt="Profile" />
                                            </div>
                                            <a href="" className="menu__link">Music</a>
                                        </li>
                                        <li className="menu__item _item_last">
                                            <div className="menu__icon">
                                                <img src="./img/menu icon/menu_05.svg" alt="Profile" />
                                            </div>
                                            <a href="" className="menu__link">Settings</a>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="sidebar__adverst adverst">
                                    <div className="adverst__block">
                                        <img src="./img/advert/adverst_01.png" alt="" />
                                    </div>
                                    <div className="adverst__block">
                                        <img src="./img/advert/adverst_02.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="main-page__envir envir">
                                <div className="envir__banner">
                                    <img src="./img/profile/Baner.jpg" alt="Profile banner" />
                                </div>
                                <div className="envir__profile profile">
                                    <div className="profile__img" _ibg>
                                        <img src="./img/profile/user_photo.jpg" alt="Photo" />
                                    </div>

                                    <div className="profile__data data">
                                        <div className="profile__title">Elena Smith</div>
                                        <ul className="data__items">
                                            <li className="data__item">Date of birth: 2 Feb</li>
                                            <li className="data__item">City: New-Yourk</li>
                                            <li className="data__item">Education: Univercity Degree</li>
                                            <li className="data__item">Web site: www.ogancheban.com</li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="envir__posts">
                                    <div className="new-post__title">My posts</div>
                                    <div className="envir__new-post new-post">
                                        <form action="onClick" className="new-post_form">
											<textarea className="form-area" name="" id="new__text" cols="30" rows="5"
                                                      placeholder="Your news"></textarea>
                                            <button className="form-btn" type="submit">Send</button>
                                        </form>
                                    </div>
                                    <div className="envir__last-posts last-posts">
                                        <div className="last-posts__items">
                                            <div className="last_post__item">
                                                <div className="last-posts__icon"></div>
                                                <div className="last_posts__content">Lorem ipsum dolor sit amet,
                                                    consectetur
                                                    adipiscing
                                                    elit. Donec proin dictumst aliquam pretium adipiscing placerat.
                                                    Egestas consectetur nibh tristique ut.
                                                </div>
                                            </div>
                                            <div className="last_post__item">
                                                <div className="last-posts__icon"></div>
                                                <div className="last_posts__content">Lorem ipsum dolor sit amet,
                                                    consectetur
                                                    adipiscing
                                                    elit. Donec proin dictumst
                                                    aliquam pretium adipiscing placerat.
                                                    Egestas consectetur nibh tristique ut.
                                                </div>
                                            </div>
                                            <div className="last_post__item">
                                                <div className="last-posts__icon"></div>
                                                <div className="last_posts__content">Lorem ipsum dolor sit amet,
                                                    consectetur
                                                    adipiscing
                                                    elit. Donec proin dictumst
                                                    aliquam pretium adipiscing placerat.
                                                    Egestas consectetur nibh tristique ut.
                                                </div>
                                            </div>
                                            <div className="last_post__item">
                                                <div className="last-posts__icon"></div>
                                                <div className="last_posts__content">Lorem ipsum dolor sit amet,
                                                    consectetur
                                                    adipiscing
                                                    elit. Donec proin dictumst
                                                    aliquam pretium adipiscing placerat.
                                                    Egestas consectetur nibh tristique ut.
                                                </div>
                                            </div>
                                            <div className="last_post__item">
                                                <div className="last-posts__icon"></div>
                                                <div className="last_posts__content">Lorem ipsum dolor sit amet,
                                                    consectetur
                                                    adipiscing
                                                    elit. Donec proin dictumst
                                                    aliquam pretium adipiscing placerat.
                                                    Egestas consectetur nibh tristique ut.
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
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
