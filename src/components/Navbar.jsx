import React from 'react'

const Navbar = () => {
    return (
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


    );
}
export default Navbar;