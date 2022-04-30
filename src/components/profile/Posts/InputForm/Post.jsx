import React from 'react'
import s from './Post.module.css'


const Post = (props) => {
    debugger;
    return (
            <div className={s.last_post__item}>
            <div className={s.last_posts__icon}></div>
            <div className={s.last_posts__content}>

                {props.post}
            </div>
        </div>


    );
}

export default Post;