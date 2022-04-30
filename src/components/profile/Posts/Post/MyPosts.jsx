import React from 'react'

import s from "./MyPosts.module.css";
import Post from "../InputForm/Post";
import Inputform from "../InputForm/InputForm";
/*import {addPost} from "../../../../Redux/State";*/



const MyPosts = (props) => {
    let postElements = props.posts.map(post => <Post post={post.post}  /> )
    /*let addPost =() => {
        props.addPost();
    }*/
        return (
            <div className={s.envir__posts}>

                {postElements}
               </div>
/*
<div>
    {postElements}
</div>
*/



// <div className={s.last_post__item}>
//             <div className={s.last_posts__icon}></div>
//             <div className={s.last_posts__content}>
//                 {postElements}
//             </div>
//         </div>


    );
}
export default MyPosts;


