import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Chatuser.module.css';



const Chatuser = (props) => {
    let path = "/dialogs/" + props.id;
    /*let image = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg";*/
    return (
        <div className={`${s.envir__profile} ${s.profile}`}>
            <li className={s.clearfix}>
                <img src={props.image}
                     alt="avatar"/>
                <div className={s.about}>
                    <NavLink to={path} className={s.name}>{props.name}</NavLink>
                    <div className={s.status}>
                        {/* <i className="fa fa-circle online"></i>*/} {props.staus}
                    </div>
                </div>
            </li>
        </div>
    );
}
export default Chatuser