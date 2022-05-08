const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
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