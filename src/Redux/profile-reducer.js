const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        {id: 1, post: 'Hi'},
        /*{id: 5, post: 'привет от нас'},
        {id: 5, post: 'не получается'},
        {id: 6, post: 'ну что же - вперед!!'},
        {id: 7, post: '!!!! добавлено из статену что же - вперед!!'}*/
    ],
    newPostText: '',
    profile: null

};


const profileReducer = (state = initialState, action) => {
switch (action.type) {
    case ADD_POST: {
        let newPost = {
            id: 16,
            post: state.newPostText
        };
        /*let stateCopy = {...state};
        stateCopy.posts = [...state.posts]
        stateCopy.posts.push(newPost)
        /!*state.posts.push(newPost);*!/
        stateCopy.newPostText = '';*/
        return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''

        };
}
    case UPDATE_NEW_POST_TEXT:
        /*let stateCopy = {...state}

        stateCopy.newPostText = action.newPostText*/
        return {
            ...state,
            newPostText: action.newPostText
            };
    case SET_USER_PROFILE:
            return {...state, profile: action.profile}

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
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer;