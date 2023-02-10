import {v1} from "uuid";



export type messageType = {
    id: string
    message: string
}

export type dialogType = {
    id: string
    name: string
}


export type navbarType = {
    id: string
    friendsName: string
    avatar: string
}

export type navbarBlockType = {
    friends: Array<navbarType>
}

export const store = {
    _state: {
        sidebar: {
            friends: [
                {
                    id: v1(),
                    friendsName: "Vova",
                    avatar: 'https://sun9-77.userapi.com/impg/guiypknBMCLuAUeA1X1OCqTBbz61pcKRxtG2wQ/b2C07lST1uo.jpg?size=1000x1000&quality=96&sign=d4e564d3d5b878ced4a81779d606bc51&c_uniq_tag=Cn5J_-uz-02mP4yl1OSf56GPBzVpqdihdQmglRHIxxI&type=album'
                },
                {
                    id: v1(),
                    friendsName: "Sveta",
                    avatar: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg'
                },
                {
                    id: v1(),
                    friendsName: "Fill",
                    avatar: 'https://abrakadabra.fun/uploads/posts/2021-12/thumbs/1639946157_16-abrakadabra-fun-p-prikolnie-avi-v-standoff-16.jpg'
                },
            ]
        },
        profilePage: {
            posts: [
                {id: v1(), message: "hi are you", likesCount: 12},
                {id: v1(), message: "is my post", likesCount: 1},
                {id: v1(), message: "hellow world", likesCount: 5},
            ],
            newPostText: "It-kama"
        },
        dialogsPage: {
            messages: [
                {id: v1(), message: "Hi"},
                {id: v1(), message: "Hellow"},
                {id: v1(), message: "How are you?"},
            ],
            dialogs: [
                {id: v1(), name: "Vitalya"},
                {id: v1(), name: "Dron"},
                {id: v1(), name: "Sveta"},
            ],
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {

    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },

    dispatch(action:any) {
        if(action.type === 'ADD-POST') {
            let newPostText = this._state.profilePage.newPostText
            if (newPostText.trim().length === 0) {
                return
            }
            let newPost = {id: v1(), message: newPostText, likesCount: 0}
            this._state.profilePage.posts.push(newPost);
            this._callSubscriber();
            this._state.profilePage.newPostText = ""
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        }
    }

}


