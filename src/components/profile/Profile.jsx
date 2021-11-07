import React from 'react'
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={`${s.main_page__envir} ${s.envir}`}>
            <div className={s.envir__banner}>
                <img src="./img/profile/Baner.jpg" alt="Profile banner" />
            </div>
            <div className={`${s.envir__profile} ${s.profile}`}>
                <div className={s.profile__img}>
                    <img src="./img/profile/user_photo.jpg" alt="Photo" />
                </div>

                <div className={`${s.profile__data} ${s.data}`}>
                    <div className={s.profile__title}>Elena Smith</div>
                    <ul className={s.data__items}>
                        <li className={s.data__item}>Date of birth: 2 Feb</li>
                        <li className={s.data__item}>City: New-Yourk</li>
                        <li className={s.data__item}>Education: Univercity Degree</li>
                        <li className={s.data__item}>Web site: www.ogancheban.com</li>
                    </ul>
                </div>

            </div>
            <div className={s.envir__posts}>
                <div className={s.new_post__title}>My posts</div>
                <div className={`${s.envir__new_post} ${s.new_post}`}>
                    <form action="onClick" className={s.new_post_form}>
                        <textarea className={s.form_area} name="" id="new__text" cols="30" rows="5"
                                                      placeholder="Your news"></textarea>
                        <button className={s.form_btn} type="submit">Send</button>
                    </form>
                </div>
                <div className={`${s.envir__last_posts} ${s.last_posts}`}>
                    <div className={s.last_posts__items}>
                        <div className={s.last_post__item}>
                            <div className={s.last_posts__icon}></div>
                            <div className={s.last_posts__content}>Lorem ipsum dolor sit amet,
                                consectetur
                                adipiscing
                                elit. Donec proin dictumst aliquam pretium adipiscing placerat.
                                Egestas consectetur nibh tristique ut.
                            </div>
                        </div>
                        <div className={s.last_post__item}>
                            <div className={s.last_posts__icon}></div>
                            <div className={s.last_posts__content}>Lorem ipsum dolor sit amet,
                                consectetur
                                adipiscing
                                elit. Donec proin dictumst
                                aliquam pretium adipiscing placerat.
                                Egestas consectetur nibh tristique ut.
                            </div>
                        </div>
                        <div className={s.last_post__item}>
                            <div className={s.last_posts__icon}></div>
                            <div className={s.last_posts__content}>Lorem ipsum dolor sit amet,
                                consectetur
                                adipiscing
                                elit. Donec proin dictumst
                                aliquam pretium adipiscing placerat.
                                Egestas consectetur nibh tristique ut.
                            </div>
                        </div>
                        <div className={s.last_post__item}>
                            <div className={s.last_posts__icon}></div>
                            <div className={s.last_posts__content}>Lorem ipsum dolor sit amet,
                                consectetur
                                adipiscing
                                elit. Donec proin dictumst
                                aliquam pretium adipiscing placerat.
                                Egestas consectetur nibh tristique ut.
                            </div>
                        </div>
                        <div className={s.last_post__item}>
                            <div className={s.last_posts__icon}></div>
                            <div className={s.last_posts__content}>Lorem ipsum dolor sit amet,
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