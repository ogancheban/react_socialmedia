import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Inmessage.module.css';
const Inmessage = (props) => {


    return (
        <div>
            <li className={s.message_data}>
        <div className={`${s.message_data} ${s.align_right}`}>
            <span className={s.message_data_time}>{props.time + ", " + props.date}</span> &nbsp;
            &nbsp;
            <span className="message_data-name">{props.name}</span>
            {/*<i className="fa fa-circle me"></i>*/}
        </div>
    <div className={`${s.message} ${s.other_message} ${s.float_right}`}>
        Hi Vincent, how are you? How is the project coming along?
    </div>
            </li>
            </div>
    );
}
export default Inmessage;