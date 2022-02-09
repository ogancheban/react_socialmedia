import React from 'react'

import s from "./MyPosts.module.css";


const MyPosts = (props) => {

        return (
        <div className={`${s.envir__last_posts} ${s.last_posts}`}>

        <div className={s.last_post__item}>
            <div className={s.last_posts__icon}></div>
            <div className={s.last_posts__content}>
                { props.post }
            </div>
        </div>
        </div>

    );
}
export default MyPosts;


