import React from 'react'
import s from './Navbar.module.css'
import { NavLink, activeClassName } from 'react-router-dom';


const Navbar = () => {
    return (

        <nav className={`${s.sidebar__menu} ${s.menu}`}>
            <ul className={s.menu__list}>
                <li className={s.menu__item}>
                    <div className={s.menu__icon}>
                        <img src="./img/menu icon/menu_01.svg" alt="Profile"/>
                    </div>
                    <NavLink exact to='/profile' style={({ isActive }) =>({color: isActive ? 'blue' : ' #34305c'})} className={s.menu__link}>Profile</NavLink>
                </li>
                <li className={s.menu__item}>
                    <div className={s.menu__icon}>
                        <img src="./img/menu icon/menu_02.svg" alt="Profile"/>
                    </div>
                    <NavLink end to="/dialogs" style={({ isActive }) =>({color: isActive ? 'blue' : ' #34305c'})} className={s.menu__link}>Messages</NavLink>
                </li>
                <li className={s.menu__item}>
                    <div className={s.menu__icon}>
                        <img src="./img/menu icon/menu_03.svg" alt="Profile"/>
                    </div>
                    <NavLink to="/news" className={s.menu__link}>News</NavLink>
                </li>
                <li className={s.menu__item}>
                    <div className={s.menu__icon}>
                        <img src="./img/menu icon/menu_04.svg" alt="Profile"/>
                    </div>
                    <NavLink to="/music" className={s.menu__link}>Music</NavLink>
                </li>
                <li className={`${s.menu__item} ${s._item_last}`}>
                    <div className={s.menu__icon}>
                        <img src="./img/menu icon/menu_05.svg" alt="Profile"/>
                    </div>
                    <NavLink to="/settings" className={s.menu__link}>Settings</NavLink>
                </li>
            </ul>
        </nav>


    );
}
export default Navbar;