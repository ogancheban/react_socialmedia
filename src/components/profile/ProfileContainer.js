import React from 'react'
import s from './Profile.module.css'
import MyPosts from './Posts/Post/MyPosts'
import Baner from "./user/Baner";
import Inputform from "./Posts/InputForm/InputForm";
import User from "./user/User";
import {addPost} from "../../Redux/Store";
import InputFormContainer from "./Posts/InputForm/InputFormContainer";
import Profile from "./Profile";
import * as axios from "axios";


class ProfileContainer extends React.Component {
   /*componentDidMount() {
       axios.get(`https://social-network.samuraijs.com/api/1.0/profile/24186`).then(response => {
           debugger
           this.props.toggleIsFetching(false)
           this.props.setUsers(response.data.items)
           this.props.setTotalUsersCount(response.data.totalCount)

       })
   }*/
    render () {
        return (
            <div className={`${s.main_page__envir} ${s.envir}`}>
               <Profile {... this.props} />


            </div>
        );
    }
    }



export default ProfileContainer;