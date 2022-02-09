import React from 'react'
import s from './Profile.module.css'
import MyPosts from './Posts/Post/MyPosts'
import Baner from "./user/Baner";
import Inputform from "./Posts/InputForm/InputForm";
import User from "./user/User";




const Profile = (props) => {

    let UserData =[
        {id: 1, name:'Elena', surname:'Smith', birth:'2 Feb', city:'New York',
            edu:'Univercity Degree', web:'www.ogancheban.com' }
    ]

    let postElements = props.posts.map(p => <MyPosts post={p.post} /> )
    let userElement = UserData.map(u => <User name={u.name} surname={u.surname} birth={u.birth} city={u.city}
                                    edu={u.edu} web={u.web} />)




    return (
        <div className={`${s.main_page__envir} ${s.envir}`}>
            <Baner />
            {userElement}
               <div className={s.envir__posts}>
                <Inputform />
                   {postElements}
                </div>

        </div>
    );
}
export default Profile;