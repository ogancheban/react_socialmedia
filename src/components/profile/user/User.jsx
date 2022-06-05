import React from 'react'
import s from './User.module.css'
import Preloader from "../../Preloader/Preloader";



const User = (props) => {
    console.log(props)
    if (!props.profile) {
        return  <Preloader />
    }
    return (
        <div className={`${s.envir__profile} ${s.profile}`}>
            <div className={s.profile__img}>
                <img src= {props.profile.photos.large} alt="Photo" />
            </div>
            <div className={`${s.profile__data} ${s.data}`}>
                <div className={s.profile__title}>{props.profile.fullName}</div>
                <ul className={s.data__items}>
                    <li className={s.data__item}>Facebook: {props.profile.contacts.vk} </li>
                    <li className={s.data__item}>About me: {props.profile.aboutMe} </li>
                    <li className={s.data__item}>Contacts: {props.profile.lookingForAJobDescription}</li>
                    <li className={s.data__item}>Job search: {props.profile.contacts.facebook} </li>
                    <li className={s.data__item}>Job search: {props.profile.contacts.website}</li>
                    <li className={s.data__item}>Job search: {props.profile.contacts.twitter}</li>
                    <li className={s.data__item}>Job search: {props.profile.contacts.instagram}</li>
                    <li className={s.data__item}>Job search: {props.profile.contacts.instagram}</li>
                    <li className={s.data__item}>Job search: {props.profile.contacts.youtube}</li>
                    <li className={s.data__item}>Job search: {props.profile.contacts.github}</li>
                    <li className={s.data__item}>Job search: {props.profile.contacts.mainLink}</li>
                    <li className={s.data__item}>Job search: {props.profile.lookingForAJob}</li>
                </ul>
            </div>

        </div>
    );
}
export default User