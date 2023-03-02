import React from "react";
import {addPostActionCreator, updateNewPostTextCreator} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";



// type MyPostContainerPropsType = {
//     store: any
// }


// const PostsContainer = () => {
//
// // let state = props.store.getState()
//
//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 let state = store.getState()
//                 const updateNewPostText = (text: string) => {
//
//                     store.dispatch(updateNewPostTextCreator(text))
//                 }
//                 const addPost = () => {
//                     store.dispatch(addPostActionCreator())
//                 }
//                 return <MyPosts
//                     posts={state.profilePage.posts}
//                     newPostText={state.profilePage.newPostText}
//                     updateNewPostText={updateNewPostText}
//                     addPost={addPost}
//                 />
//             }}
//         </StoreContext.Consumer>
//
//     )
// }

const mapStateToProps=(state)=>{
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        updateNewPostText: (text)=>{
            dispatch(updateNewPostTextCreator(text))
        },
        addPost: ()=>{
            dispatch(addPostActionCreator())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps) (MyPosts);