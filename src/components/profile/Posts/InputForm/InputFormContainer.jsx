import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/profile-reducer";
import Inputform from "./InputForm";
import MyPosts from "../Post/MyPosts";

const InputFormContainer = (props) => {

    let state = props.store.getState();
   let addPost = () => {
      props.store.dispatch(addPostActionCreator())
    };
    let onPostChange = (text) => {
        /*
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action)*/
        props.store.dispatch(updateNewPostTextActionCreator(text))
    };

    return (
        <Inputform updateNewPostText={onPostChange}
                   addPost={addPost}
                   posts={state.profilePage.posts}/>


    );
}
export default InputFormContainer;