import React from 'react'
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={`${s.sidebar__menu} ${s.menu}`}>
            <ul className={s.menu__list}>
                <li className={s.menu__item}>
                    <div className={s.menu__icon}>
                        <img src="./img/menu icon/menu_01.svg" alt="Profile" />
                    </div>
                    <a href="" className={s.menu__link}>Profile</a>
                </li>
                <li className={s.menu__item}>
                    <div className={s.menu__icon}>
                        <img src="./img/menu icon/menu_02.svg" alt="Profile" />
                    </div>
                    <a href="" className={s.menu__link}>Messages</a>
                </li>
                <li className={s.menu__item}>
                    <div className={s.menu__icon}>
                        <img src="./img/menu icon/menu_03.svg" alt="Profile" />
                    </div>
                    <a href="" className={s.menu__link}>News</a>
                </li>
                <li className={s.menu__item}>
                    <div className={s.menu__icon}>
                        <img src="./img/menu icon/menu_04.svg" alt="Profile" />
                    </div>
                    <a href="" className={s.menu__link}>Music</a>
                </li>
                <li className={`${s.menu__item} ${s._item_last }`}>
                    <div className={s.menu__icon}>
                        <img src="./img/menu icon/menu_05.svg" alt="Profile" />
                    </div>
                    <a href="" className={s.menu__link}>Settings</a>
                </li>
            </ul>
        </nav>


    );
}
export default Navbar;