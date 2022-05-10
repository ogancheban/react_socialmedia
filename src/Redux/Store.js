import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {

            posts: [
                {id: 1, post: 'Hi'},
                /*{id: 5, post: 'привет от нас'},
                {id: 5, post: 'не получается'},
                {id: 6, post: 'ну что же - вперед!!'},
                {id: 7, post: '!!!! добавлено из статену что же - вперед!!'}*/
            ],
            newPostText: ''
        },


        messagesPage: {
            dialogdata: [
                {id: 1, name: 'Vincent PPorter', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg', status: 'online'},
                {id: 2, name: 'Aiden Chavez', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_09.jpg', status: 'left 8 mins ago'},
                {id: 3, name: 'Mike Thomas', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_08.jpg', status: 'online'},
                {id: 4, name: 'Erica Hughes', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_07.jpg', status: 'online'},
                {id: 5, name: 'Ginger Johnston', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_06.jpg', status: 'online'},
            ],
            dialogmessages: [
                {id: 1, user: 'Ola', message: '!!!!! привет проверкаHi Vincent, how are you? How is the project coming along?', time: '10:10 AM', date: 'Today'},
                {id: 2, user: 'Vincent', message: 'Are we meeting today? Project has been already finished and I\n' +
                        '                                    have results to show you.', time: '10:12 AM', date: 'Today'},
                {id: 3, user: 'Ola', message: 'Well I am not sure. The rest of the team is not here yet. Maybe\n' +
                        '                                    in an hour or so? Have you faced\n' +
                        '                                    any problems at the last phase of the project?', time: '10:14 AM', date: 'Today'},
                {id: 4, user: 'Vincent',
                    message: 'Снова проверка Иное тестовое сообщание вот так',
                    time: '10:15 AM', date: 'Today'}
            ],
            newMessageBody: ''
        },
        sidebar: {}

    },
    _callSubscriber ()  {
        console.log('State Changed');
        console.log('State Changed');
    },

    getState() {
      return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
  /*  addPost (postMessage)  {

        let newPost = {
            id: 16,
            post: this._state.profilePage.newPostText
            /!*post: postMessage*!/
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber (this._state);
    },
    updateNewPostText (newPostText) {
        this._state.profilePage.newPostText = newPostText
            this._callSubscriber (this._state);
    },*/

    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);

        /*if (action.type === ADD_POST) {
            let newPost = {
                id: 16,
                post: this._state.profilePage.newPostText
                /!*post: postMessage*!/
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber (this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber (this._state);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.body
            this._callSubscriber(this._state);
        }
        else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody = '';
this._state.messagesPage.dialogmessages.push(
    {id: 19, user: 'NewNew',
        message: body, time: '10:10 AM', date: 'Today'}
)


            this._callSubscriber(this._state);
        }*/
    }
}

export default store;
window.store = store;