import React from "react";
import {addPostActionCreator, updateNewPostTextCreator} from "../../../Redux/profile-reducer";
import {StoreContext} from "../../../storeContext";
import {MyPosts} from "./MyPosts";
import {log} from "util";


// type MyPostContainerPropsType = {
//     store: any
// }


export const MyPostsContainer = () => {

// let state = props.store.getState()

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState()
                const updateNewPostText = (text: string) => {
                    let action = updateNewPostTextCreator(text);
                    store.dispatch(action)
                }
                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
                return <MyPosts
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                    updateNewPostText={updateNewPostText}
                    addPost={addPost}
                />
            }}
        </StoreContext.Consumer>

    )
}