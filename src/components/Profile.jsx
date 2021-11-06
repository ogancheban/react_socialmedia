import React from 'react'

const Profile = () => {
    return (
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
    );
}
export default Profile;