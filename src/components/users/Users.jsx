import React from "react";
import s from "./Users.module.css";
import userimg from "../../assets/images/userimg.png";

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

        {
            props.users.map(u => <div key={u.id}>

                <div>
                    <div className={s.imgContainer}>
                        <img src={u.photos.small != null ? u.photos.small : userimg} className={s.usersImg}/>
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
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </div>
                </div>

            </div>)
        }
    </div>

}
export default Users;