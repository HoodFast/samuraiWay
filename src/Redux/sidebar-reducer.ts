import {sidebarType} from "./store";
import {v1} from "uuid";

let init :sidebarType = {
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
}

export const sidebarReducer = (state=init) => {
    return state

}