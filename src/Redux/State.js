
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
                {id: 4, user: 'Vincent', message: 'Снова проверка Иное тестовое сообщание вот так', time: '10:15 AM', date: 'Today'}
            ]
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

     dispatch (action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 16,
                post: this._state.profilePage.newPostText
                /*post: postMessage*/
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber (this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber (this._state);
        }
    }


}

export default store;
window.store = store;