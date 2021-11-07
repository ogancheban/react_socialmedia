import React from 'react'
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={`${s.header__container} ${s._container}`}>
                <div className={`${s.header__logo} ${s._ibg}`}>
                    <img  src="./img/header/Logo_img.svg" alt="" />
                </div>
                <a href="#" className={s.header__title}>Social Media</a>
            </div>
        </header>


    );
}
export default Header;