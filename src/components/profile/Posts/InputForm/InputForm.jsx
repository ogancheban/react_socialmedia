import React from 'react'
import s from './InputForm.module.css'
import Buttonsend from "../../../buttons/Buttonsend";

const Inputform = () => {
    return (
        <div>
            <div className={s.new_post__title}>My posts</div>
            <div className={`${s.envir__new_post} ${s.new_post}`}>
                <form action="onClick" className={s.new_post_form}>
                        <textarea className={s.form_area} name="" id="new__text" cols="30" rows="5"
                                  placeholder="Your news"></textarea>
                   <Buttonsend />
                </form>
            </div>
        </div>

    );
}
export default Inputform;