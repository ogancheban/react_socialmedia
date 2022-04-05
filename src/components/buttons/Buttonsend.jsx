import React from 'react'
import s from '../buttons/Buttonsend.module.css'

const Buttonsend = () => {
    let addPost = () => {
        alert('снова снова привет')
    }
    return (
        <button className={s.form_btn} type="submit" onClick={ addPost }>Send</button>
    );
}
export default Buttonsend;