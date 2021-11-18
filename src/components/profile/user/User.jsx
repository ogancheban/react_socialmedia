import React from 'react'
import s from './User.module.css'
const User = (props) => {
    return (
        <div className={`${s.envir__profile} ${s.profile}`}>
            <div className={s.profile__img}>
                <img src="./img/profile/user_photo.jpg" alt="Photo" />
            </div>
            <div className={`${s.profile__data} ${s.data}`}>
                <div className={s.profile__title}>{ props.name } { props.surname }</div>
                <ul className={s.data__items}>
                    <li className={s.data__item}>Date of birth: { props.birth }</li>
                    <li className={s.data__item}>City: {props.city}</li>
                    <li className={s.data__item}>Education: {props.edu}</li>
                    <li className={s.data__item}>Website: {props.web}</li>
                </ul>
            </div>

        </div>
    );
}
export default User