import React from 'react'
import s from './Profile.module.css'
import Post from './Posts/Post/Post'
import Baner from "./user/Baner";
import Inputform from "./Posts/InputForm/InputForm";
import User from "./user/User";


const Profile = () => {
    return (
        <div className={`${s.main_page__envir} ${s.envir}`}>
            <Baner/>
            <User name='Elena' surname='Smith' birth='2 Feb' city='New York' edu='Univercity Degree' web='www.ogancheban.com'/>

               <div className={s.envir__posts}>
                <Inputform/>
                <div className={`${s.envir__last_posts} ${s.last_posts}`}>
                    <div className={s.last_posts__items}>
                        <Post message='Hi'/>
                        <Post message='How are you'/>
                        <Post message="I'm happy"/>
                        <Post message='lorem   asdasdasdasdasdaaaa aaaaaaaaaaaaaaaaasd '/>
                        <Post/>
                        <Post/>
                        <Post/>
                        <Post/>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Profile;