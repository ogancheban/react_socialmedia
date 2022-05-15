import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/profile-reducer";
import Inputform from "./InputForm";
import MyPosts from "../Post/MyPosts";
import {connect} from "react-redux";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";
import {mapDispatchToPropsFactory} from "react-redux/es/connect/mapDispatchToProps";

/*const InputFormContainer = (props) => {

    let state = props.store.getState();
   let addPost = () => {
      props.store.dispatch(addPostActionCreator())
    };
    let onPostChange = (text) => {
        /!*
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action)*!/
        props.store.dispatch(updateNewPostTextActionCreator(text))
    };

    return (
        <Inputform updateNewPostText={onPostChange}
                   addPost={addPost}
                   posts={state.profilePage.posts}/>


    );
}*/
let mapStateToProps = (state) => {
return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
}
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }

    }
}





const InputFormContainer = connect(mapStateToProps, mapDispatchToProps) (Inputform);
export default InputFormContainer;