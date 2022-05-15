import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store";
import {Provider} from "react-redux";


/*let rerenderEntireTree = (state) => {*/
    ReactDOM.render(
       // <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App
                      /*  state={state}
                        /!*addPost={store.addPost.bind(store)}
                        updateNewPostText={store.updateNewPostText.bind(store)}*!/
                        dispatch={store.dispatch.bind(store)}
                        store = {store}*/
                    />
                </Provider>

            </BrowserRouter>,

        //</React.StrictMode>,

        document.getElementById('root')
    )
/*}*/
/*addPost('padlo')*/
/*rerenderEntireTree(state);*/
/*rerenderEntireTree(store.getState())*/
/*store.subscribe(rerenderEntireTree)*/
/*store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
})*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
