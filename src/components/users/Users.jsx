import React from "react";
import s from "./Users.module.css";
import userimg from "../../assets/images/userimg.png";
import {NavLink} from 'react-router-dom';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; ++i) {
        pages.push(i);
    }
    return <div className={`${s.main_page__envir} ${s.envir}`}>
        <div className={s.spanContainer}>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>

        <div className={s.userContainer}>
            {
                props.users.map(u => <div key={u.id}>

                    <div className={s.userCard}>
                        <div className={s.imgContainer}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userimg} className={s.usersImg}/>
                            </NavLink>

                        </div>
                        <div>
                            <div className={s.userName}>{u.name}</div>
                            <div className={s.userStatus}>{u.status}</div>
                        </div>
                        <div>
                            {u.followed ?
                                <button className={s.form_btn} onClick={() => {
                                    props.follow(u.id)
                                }}>follow</button> :
                                <button className={s.form_btn} onClick={() => {
                                    props.unfollow(u.id)
                                }}>unfollow</button>}

                        </div>

                        <div>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </div>
                    </div>

                </div>)
            }
        </div>


    </div>

}
export default Users;