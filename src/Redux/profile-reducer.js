const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, post: 'Hi'},
        /*{id: 5, post: 'привет от нас'},
        {id: 5, post: 'не получается'},
        {id: 6, post: 'ну что же - вперед!!'},
        {id: 7, post: '!!!! добавлено из статену что же - вперед!!'}*/
    ],
    newPostText: ''
};


const profileReducer = (state = initialState, action) => {
switch (action.type) {
    case ADD_POST:
        let newPost = {
            id: 16,
            post: state.newPostText
        };
        state.posts.push(newPost);
        state.newPostText = '';
        return state;
    case UPDATE_NEW_POST_TEXT:
        state.newPostText = action.newPostText
        return state;
    default:
        return state;
}
    /*if (action.type === ADD_POST) {
        let newPost = {
            id: 16,
            post: state.newPostText
            /!*post: postMessage*!/
        };
       state.posts.push(newPost);
       state.newPostText = '';

    }
    else if (action.type === UPDATE_NEW_POST_TEXT) {
       state.newPostText = action.newPostText

    }

    return state;*/
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text
})

export default profileReducer;