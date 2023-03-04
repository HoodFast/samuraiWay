import {v1} from "uuid";


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'

type locationType = {
    city:string
    country:string
}

type userType = {
    id:string
    photoUrl:string
    followed:boolean
    fullName:string
    status:string
    location: locationType
}
type userPageType = {
    users: userType[]
}

let init:userPageType = {
    users: [
        // {id: v1(),photoUrl:'https://abrakadabra.fun/uploads/posts/2021-12/thumbs/1639946157_16-abrakadabra-fun-p-prikolnie-avi-v-standoff-16.jpg',followed:false, fullName: "Dimych", status: 'yoyo', location:{city:'Moscow', country:'Russian'}},
        // {id: v1(),photoUrl:'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg',followed:true, fullName: "Andrey", status: 'yoyo', location:{city:'Moscow', country:'Russian'}},
        // {id: v1(),photoUrl:'https://sun9-77.userapi.com/impg/guiypknBMCLuAUeA1X1OCqTBbz61pcKRxtG2wQ/b2C07lST1uo.jpg?size=1000x1000&quality=96&sign=d4e564d3d5b878ced4a81779d606bc51&c_uniq_tag=Cn5J_-uz-02mP4yl1OSf56GPBzVpqdihdQmglRHIxxI&type=album',followed:false, fullName: "Vovan", status: 'yoyo', location:{city:'Omsk', country:'Russian'}},
    ],
}

export const userReducer = (state=init, action: mainType):userPageType => {

    switch (action.type) {
        case FOLLOW:
            return {...state,users:state.users.map(el=>el.id===action.payload.userId? {...el,followed:true} :el)}
        case UNFOLLOW:
            return {...state,users:state.users.map(el=>el.id===action.payload.userId? {...el,followed:false} :el)}
        case SET_USERS:
            return {...state,users:[...state.users,...action.payload.users]}
        default:
            return state
    }
}

type mainType = followACType | unfollowACType | setUsersACACType

type followACType=ReturnType<typeof followAC>
type unfollowACType=ReturnType<typeof unfollowAC>
type setUsersACACType=ReturnType<typeof setUsersAC>



export const followAC = (userId:string) => ({type: FOLLOW,payload:{userId}}as const)
export const unfollowAC = (userId:string) => ({type: UNFOLLOW,payload:{userId}}as const)
export const setUsersAC = (users:userType[]) => ({type: SET_USERS,payload:{users}}as const)