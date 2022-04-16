
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
/*import state from "./Redux/State";*/
import  {addPost} from "./Redux/State";




export let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                />
            </BrowserRouter>

        </React.StrictMode>,
        document.getElementById('root')
    )
};



