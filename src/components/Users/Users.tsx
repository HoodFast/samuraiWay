import s from "./users.module.css";
import React from "react";
import {propsUsersType} from "./UsersContainer";
import {NavLink} from "react-router-dom";


type usersProps = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: propsUsersType[]
    onPageChanged: (el: number) => void
    unfollow: (id: number) => void
    follow: (id: number) => void
    followingInProgress: number[]
}


export const Users: React.FC<usersProps> = (
    {
        totalUsersCount,
        pageSize,
        currentPage,
        users,
        onPageChanged,
        unfollow,
        follow,
        followingInProgress
    }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    if (pagesCount >= 10000) {
        pagesCount = 10000
    }
    const pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>

            <div>
                {pages.map(el => <span key={el} onClick={() => onPageChanged(el)}
                                       className={currentPage === el ? s.selectedPage : ''}> {el} </span>)}
            </div>
            {
                users.map((el) => {
                    return (

                        <div key={el.id}>
                            <span>
                                <div>
                                    <NavLink to={"/profile/" + el.id}>
                                    <img className={s.userPhoto}
                                         src={el.photos.small ? el.photos.small : 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg'}/>
                                    </NavLink>
                                </div>
                                <div>
                                    {el.followed ?
                                        <button disabled={followingInProgress.some(id => id === el.id)}
                                                onClick={() => {
                                                    unfollow(el.id)
                                                }}>Unfollow</button> :
                                        <button disabled={followingInProgress.some(id => id === el.id)}
                                                onClick={() => {
                                                    follow(el.id)
                                                }}>Follow</button>}
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>
                                        {el.name}
                                    </div>
                                    <div>
                                        {el.status}
                                    </div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}
