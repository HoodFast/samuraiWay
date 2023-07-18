import React from "react";
import {propsUsersType} from "./UsersContainer";
import {Paginator} from "components/common/Paginator/Paginator";
import {User} from "components/Users/User";


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
    return (
        <div>
            <Paginator
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}/>
            <div>
                {
                    users.map((el) => {
                        return (
                            <User key={el.id}
                                  user={el}
                                  unfollow={unfollow}
                                  follow={follow}
                                  followingInProgress={followingInProgress}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
