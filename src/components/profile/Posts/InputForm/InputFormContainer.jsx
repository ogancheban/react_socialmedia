import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/profile-reducer";
import Inputform from "./InputForm";
import MyPosts from "../Post/MyPosts";
import {connect} from "react-redux";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";
import {mapDispatchToPropsFactory} from "react-redux/es/connect/mapDispatchToProps";

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