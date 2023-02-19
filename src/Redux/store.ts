import {v1} from "uuid";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";


export type messageType = {
    id: string
    message: string
}

export type dialogType = {
    id: string
    name: string
}
export type sidebarType = {
    friends:Array<FriendsType>
}
export type FriendsType = {
    id:string
    friendsName:string
    avatar:string
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
            newPostText: ""
        },
        dialogsPage: {
            messages: [
                {id: v1(), message: "Hi"},
                {id: v1(), message: "Hellow"},
                {id: v1(), message: "How are you?"},
            ],
            newMessageBody: "",
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


    dispatch(action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar)
        this._callSubscriber();
    }

}






