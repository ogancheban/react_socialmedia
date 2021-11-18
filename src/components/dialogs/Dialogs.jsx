import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (

        <div className={s.sidebar__adverst}>
            <div className={s.adverst__block}>
                <img src="./img/advert/adverst_01.png" alt="" />
            </div>
            <div className={s.adverst__block}>
                <img src="./img/advert/adverst_02.png" alt="" />
            </div>
        </div>
    );
}
export default Dialogs;