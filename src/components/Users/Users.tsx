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
    isFetching: boolean
    followingInProgress: number[]
}


export const Users = (props: usersProps) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    if (pagesCount >= 10) {
        pagesCount = 10
    }
    const pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>

            <div>
                {pages.map(el => <span key={el} onClick={() => props.onPageChanged(el)}
                                       className={props.currentPage === el ? s.selectedPage : ''}> {el} </span>)}
            </div>
            {
                props.users.map((el) => {
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
                                        <button disabled={props.followingInProgress.some(id => id === el.id)}
                                                onClick={() => {
                                                    props.unfollow(el.id)
                                                    // props.toggleFollowing(true, el.id)
                                                    // usersAPI.unFollow(el.id).then(data => {
                                                    //     if (data.resultCode === 0) {
                                                    //         props.unfollow(el.id);
                                                    //     }
                                                    //     props.toggleFollowing(false, el.id)
                                                    // })
                                                }}>Unfollow</button> :
                                        <button disabled={props.followingInProgress.some(id => id === el.id)}
                                                onClick={() => {
                                                    props.follow(el.id)
                                                    // props.toggleFollowing(true, el.id)
                                                    // usersAPI.getFollow(el.id).then(
                                                    //     data => {
                                                    //         if (data.resultCode === 0) {
                                                    //             props.follow(el.id);
                                                    //         }
                                                    //         props.toggleFollowing(false, el.id)
                                                    //     })

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
