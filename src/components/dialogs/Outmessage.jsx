import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Outmessage.module.css';
const Outmessage = (props) => {


    return (
        <div>
            <div className={s.message_data}                                >
                                    	<span className="message_data-name">
                                            <i className="fa fa-circle online"></i> Vincent</span>
                <span className={s.message_data_time}>10:12 AM, Today</span>
            </div>
            <div className={`${s.message} ${s.my_message}`}>
                {props.message}
            </div>
            </div>
    );
}
export default Outmessage;