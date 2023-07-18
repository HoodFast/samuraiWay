import s from './Paginator.module.css'
import React from "react";



type usersProps = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (el: number) => void
}


export const Paginator: React.FC<usersProps> = (
    {
        totalUsersCount,
        pageSize,
        currentPage,
        onPageChanged
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
            {pages.map(el => <span key={el} onClick={() => onPageChanged(el)}
                                   className={currentPage === el ? s.selectedPage : ''}> {el} </span>)}
        </div>
    )
}
