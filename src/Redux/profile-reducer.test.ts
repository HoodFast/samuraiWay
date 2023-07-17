import {v1} from "uuid";
import {addPost, profilePageType, profileReducer, removePost, setStatus} from "Redux/profile-reducer";


let startState: profilePageType

beforeEach(() => {

    startState = {
        posts: [

            {id: "1", message: "is my post", likesCount: 1},
            {id: "2", message: "hello world", likesCount: 5},
        ],
        profile: null,
        status: "new status"
    }
})

test('new post should be added,change length posts array', () => {
    const newPost = "it-kamasutra"
    let action = addPost(newPost)
    const endState = profileReducer(startState, action)
    expect(endState.posts.length).toBe(3)
    expect(endState.posts[2].message).toBe(newPost)
})

test('new post message should be correct', () => {
    const newPost = "it-kamasutra"
    let action = addPost(newPost)
    const endState = profileReducer(startState, action)

    expect(endState.posts[2].message).toBe(newPost)
})

test('status should be changed',()=>{
    let testStatus='test status'
    let action = setStatus(testStatus)
    const endState = profileReducer(startState,action)

    expect(endState.status).toBe(testStatus)
})

test('length of messages should be decrement',()=>{

    let action = removePost("2")
    const endState = profileReducer(startState,action)

    expect(endState.posts.length).toBe(1)
})

test('length of messages shouldn`t be decrement if id is incorrect',()=>{

    let action = removePost("1000")
    const endState = profileReducer(startState,action)

    expect(endState.posts.length).toBe(2)
})
