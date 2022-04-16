import React from 'react'
import s from './InputForm.module.css'
import Buttonsend from "../../../buttons/Buttonsend";

const Inputform = (props) => {

    let newPostElement = React.createRef();
    let addPost = () => {
       let text = newPostElement.current.value;
        props.addPost(text)
        newPostElement.current.value=''
    };

    return (
        <div>
            <div className={s.new_post__title}>My posts</div>
            <div className={`${s.envir__new_post} ${s.new_post}`}>
                <form  className={s.new_post_form}>
                        <textarea className={s.form_area}  ref={newPostElement}  cols="30" rows="5" placeholder="Add your post">

                        </textarea>
                  {/* <Buttonsend />*/}
                    <button className={s.form_btn}  onClick={ addPost }>Send</button>
                </form>

            </div>
        </div>

    );
}
export default Inputform;