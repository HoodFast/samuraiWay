import s from "./users.module.css";
import React from "react";
import {propsUsersType, UsersPropsTypePresent} from "./UsersContainer";

type usersProps = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: propsUsersType[]
    onPageChanged: (el: number) => void
    unfollow: (id: number) => void
    follow: (id: number) => void
}


export const Users = (props: usersProps) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages: number[] = []
    for (let i = 1; i <= (pagesCount > 10 && 10); i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(el => <span onClick={() => props.onPageChanged(el)}
                                       className={props.currentPage === el ? s.selectedPage : ''}> {el} </span>)}
            </div>
            {
                props.users.map((el) => {
                    return (
                        <div key={el.id}>
                            <span>
                                <div>
                                    <img className={s.userPhoto}
                                         src={el.photos.small ? el.photos.small : 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg'}/>
                                </div>
                                <div>
                                    {el.followed ?
                                        <button onClick={() => props.unfollow(el.id)}>Unfollow</button> :
                                        <button onClick={() => props.follow(el.id)}>Follow</button>}
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
