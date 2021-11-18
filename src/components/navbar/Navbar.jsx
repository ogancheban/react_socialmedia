import React from 'react'
import s from './Navbar.module.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={`${s.sidebar__menu} ${s.menu}`}>
            <ul className={s.menu__list}>
                <li className={s.menu__item}>
                    <div className={s.menu__icon}>
                        <img src="./img/menu icon/menu_01.svg" alt="Profile" />
                    </div>
                    <Link to='/profile' activeClassName={s.activeLink} className={s.menu__link} >Profile</Link>
                </li>
                <li className={s.menu__item}>
                    <div className={s.menu__icon}>
                        <img src="./img/menu icon/menu_02.svg" alt="Profile" />
                    </div>
                    <Link to="/dialogs" className={s.menu__link}>Messages</Link>
                </li>
                <li className={s.menu__item}>
                    <div className={s.menu__icon}>
                        <img src="./img/menu icon/menu_03.svg" alt="Profile" />
                    </div>
                    <Link to="/news" className={s.menu__link}>News</Link>
                </li>
                <li className={s.menu__item}>
                    <div className={s.menu__icon}>
                        <img src="./img/menu icon/menu_04.svg" alt="Profile" />
                    </div>
                    <Link to="/music" className={s.menu__link}>Music</Link>
                </li>
                <li className={`${s.menu__item} ${s._item_last }`}>
                    <div className={s.menu__icon}>
                        <img src="./img/menu icon/menu_05.svg" alt="Profile" />
                    </div>
                    <Link to="/settings" className={s.menu__link}>Settings</Link>
                </li>
            </ul>
        </nav>


    );
}
export default Navbar;