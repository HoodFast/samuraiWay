import {navbarType} from "../../../../Redux/store";
import s from "./Friensds.module.css"

export const Friend = (props: navbarType) => {
    return (
        <div className={s.avatarStyle}>
            <img  src={props.avatar} alt="no image"/>
            <div>{props.friendsName}</div>
        </div>
    )
}