import React from 'react'
import s from './Dialogs.module.css'
import Chatuser from "./Chatuser";
import {NavLink} from "react-router-dom";
import Inmessage from "./Inmessage";
import Outmessage from "./Outmessage";

let dialogData = [
    {id: 1, name: 'Vincent Porter', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg', status: 'online'},
    {id: 2, name: 'Aiden Chavez', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_09.jpg', status: 'left 8 mins ago'},
    {id: 3, name: 'Mike Thomas', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_08.jpg', status: 'online'},
    {id: 4, name: 'Erica Hughes', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_07.jpg', status: 'online'},
    {id: 5, name: 'Ginger Johnston', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_06.jpg', status: 'online'},
]

let dialogMessages = [
    {id: 1, user: 'Ola', message: 'Hi Vincent, how are you? How is the project coming along?', time: '10:10 AM', date: 'Today'},
    {id: 2, user: 'Vincent', message: 'Are we meeting today? Project has been already finished and I\n' +
            '                                    have results to show you.', time: '10:12 AM', date: 'Today'},
    {id: 3, user: 'Ola', message: 'Well I am not sure. The rest of the team is not here yet. Maybe\n' +
            '                                    in an hour or so? Have you faced\n' +
            '                                    any problems at the last phase of the project?', time: '10:14 AM', date: 'Today'},
    {id: 4, user: 'Vincent', message: 'Иное тестовое сообщание вот так', time: '10:15 AM', date: 'Today'}
];
let dialogUsers = dialogData.map( user =>  <Chatuser name={user.name} staus={user.status} id={user.id}
                                                     image={user.image}/> )
let messageElements = dialogMessages.map( message => <Outmessage name={message.user} time={message.time} date={message.date} message={message.message}/>)


const Dialogs = () => {
    return (
        <div className={`${s.main_page__envir} ${s.envir}`}>

            <div className={`${s.chat_body} ${s.clearfix}`}>
                <div className={s.people_list}>
                    <div className="search">
                        <input type="text" placeholder="search"/>
                        {/*   <i className="fa fa-search"></i>*/}
                    </div>
                    <ul className={s.userList}>
                        {dialogUsers}
                    </ul>
                </div>

                <div className={s.chat}>
                    <div className={`${s.chat_header} ${s.clearfix}`}>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg"
                             alt="avatar"/>

                        <div className={s.chat_about}>
                            <div className={s.chat_with}>Chat with Vincent Porter</div>
                            <div className={s.chat_num_messages}>already 1 902 messages</div>
                        </div>
                        <i className="fa fa-star"></i>
                    </div>


                    <div className={s.chat_history}>
                        <ul>
                            {messageElements}

                          {/*  <li className={s.message_data}>
                                <Inmessage name={dialogMessages[0].user} time={dialogMessages[0].time} date={dialogMessages[0].date}
                                           message={dialogMessages[0].message}/>
                            </li>

                            <li>
                                <Outmessage name={dialogMessages[1].user} time={dialogMessages[1].time} date={dialogMessages[1].date}
                                            message={dialogMessages[1].message}/>

                            </li>
                            <li className={s.message_data}>
                                <Inmessage name="Ola" time="10:14 AM" date="Today" message="Well I am not sure. The rest of the team is not here yet. Maybe
                                    in an hour or so? Have you faced
                                    any problems at the last phase of the project?"/>


                            </li>

                                <li className={s.clearfix}>
                                <div className={`${s.message_data} ${s.align_right}`}>
                                    <span className={s.message_data_time}>10:14 AM, Today</span> &nbsp;
                                    &nbsp;
                                       <span className="message_data-
                                 name">Olia</span> <i
                                    className="fa fa-circle me"></i>

                                </div>
                                <div className={`${s.message} ${s.other_message} ${s.float_right}`}>
                                    Well I am not sure. The rest of the team is not here yet. Maybe
                                    in an hour or so? Have you faced
                                    any problems at the last phase of the project?
                                </div>
                            </li>

                            <li>
                                <div className={s.message_data}
                                >
                                    <span className="message_data-
														name"><i
                                                            className="fa fa-circle online"></i> Vincent</span>
                                    <span className={s.message_data_time}>10:20 AM, Today</span>
                                </div>
                                <div className={`${s.message} ${s.my_message}`}>
                                    Actually everything was fine. I'm very excited to show this to
                                    our team.
                                </div>
                            </li>

                            <li>
                                <div className={s.message_data}
                                >
                                    	<span className="message_data-
													name"><i
                                                            className="fa fa-circle online"></i> Vincent</span>
                                    <span className={s.message_data_time}>10:31 AM, Today</span>
                                </div>
                                     <i className="fa fa-circle online"></i>
                                <i className="fa fa-circle online" style="color: #AED2A6"></i>
                                <i className="fa fa-circle online" style="color:#DAE9DA"></i>
                            </li>*/}

                        </ul>

                    </div>


                    <div className={`${s.chat_message} ${s.clearfix}`}>
											<textarea name="message-to-send" id="message-to-send"
                                                      placeholder="Type your message" rows="3"></textarea>

                        {/*   <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
                        <i className="fa fa-file-image-o"></i>*/}

                        <button>Send</button>

                    </div>


                </div>


            </div>


        </div>
    );
}
export default Dialogs;