import s from "./users.module.css";
import React from "react";
import {propsUsersType} from "./UsersContainer";
import {NavLink} from "react-router-dom";


type usersProps = {
    user: propsUsersType
    unfollow: (id: number) => void
    follow: (id: number) => void
    followingInProgress: number[]
}


export const User: React.FC<usersProps> = (
    {
        user,
        unfollow,
        follow,
        followingInProgress
    }) => {
    return (
        <div>
        <span>
            <div>
                <NavLink to={"/profile/" + user.id}>
                    <img className={s.userPhoto}
                         src={user.photos.small ? user.photos.small : 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg'}/>
                </NavLink>
            </div>
            <div>
                {user.followed ?
                    <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                unfollow(user.id)
                            }}>Unfollow</button> :
                    <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                follow(user.id)
                            }}>Follow</button>}
            </div>
        </span>
            <span>
                <span>
                    <div>
                        {user.name}
                    </div>
                    <div>
                        {user.status}
                    </div>
                </span>
            </span>
        </div>
    )
}
