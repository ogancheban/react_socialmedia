import React from 'react'
import s from './InputForm.module.css'
import Buttonsend from "../../../buttons/Buttonsend";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/State";

const Inputform = (props) => {

    let newPostElement = React.createRef();

    let addPost = (e) => {
        e.preventDefault()       /* let text = newPostElement.current.value*/
        props.dispatch( addPostActionCreator())
        newPostElement.current.value = ''
    };
    let onPostChange = () => {

        let text = newPostElement.current.value;
        /*props.updateNewPostText(text)*/
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
    };

    return (
        <div>
            <div className={s.new_post__title}>My posts</div>
            <div className={`${s.envir__new_post} ${s.new_post}`}>
                <form  className={s.new_post_form}>
                        <textarea className={s.form_area}
                                  onChange={onPostChange}
                                  ref={newPostElement}  cols="30" rows="5"
                                  placeholder="Add your post"
                                   >
                        </textarea>
                         <button className={s.form_btn}
                             onClick={ addPost }>Send
                         </button>
                </form>

            </div>
        </div>

    );
}
export default Inputform;