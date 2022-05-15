import React from 'react'
import s from './InputForm.module.css'
import Post from "./Post";

const Inputform = (props) => {

    let postElements = props.posts.map(post => <Post post={post.post} key={post.id} /> )

    let newPostElement = React.createRef();
    let onAddPost = (e) => {
        e.preventDefault()
        /* let text = newPostElement.current.value*/
        props.addPost()
       /* props.dispatch( addPostActionCreator())*/
        /*newPostElement.current.value = ''*/
    };
    let onPostChange = () => {
              let text = newPostElement.current.value;
         props.updateNewPostText(text)
        /*let action = updateNewPostTextActionCreator(text);*/
        /*props.dispatch(action)*/
    };

    return (
        <div>
            <div className={s.new_post__title}>My posts</div>
            <div className={`${s.envir__new_post} ${s.new_post}`}>
                <form  className={s.new_post_form}>
                        <textarea className={s.form_area}
                                  onChange={onPostChange}
                                  ref={newPostElement}  cols="30" rows="5"
                                  value={props.newPostText}
                                  placeholder="Add your post"
                                   >
                        </textarea>
                         <button className={s.form_btn}
                             onClick={onAddPost}>Send
                         </button>
                </form>

            </div>
            <div className={s.envir__posts}>
                {postElements}
            </div>
        </div>

    );
}
export default Inputform;