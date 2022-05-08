const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state;
        case SEND_MESSAGE:
           let body = state.newMessageBody;
            state.newMessageBody = '';
            state.dialogmessages.push(
                {id: 19, user: 'NewNew',
                    message: body, time: '10:10 AM', date: 'Today'}
            )
            return state;
        default:
            return state;
    }
    /*if  (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body
            }
    else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.dialogmessages.push(
            {id: 19, user: 'NewNew',
                message: body, time: '10:10 AM', date: 'Today'}
        )
    }

    return state;*/
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default    dialogsReducer;