import React from 'react'
import s from './Dialogs.module.css'
import Chatuser from "./Chatuser";
import {NavLink} from "react-router-dom";
import Inmessage from "./Inmessage";
import Outmessage from "./Outmessage";
import Inputform from "../profile/Posts/InputForm/InputForm";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

/*const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <Dialogs updateNewMessageBody={onNewMessageChange}
                 sendMessage={onSendMessageClick}
                 messagesPage={state}/>
    );
}*/

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
 let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;