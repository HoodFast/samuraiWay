import s from './Paginator.module.css'
import React, {useState} from "react";


type usersProps = {
    totalItemsCount: number
    pageSize: number
    currentPage?: number
    onPageChanged: (el: number) => void
    portionSize?: number
}


export const Paginator: React.FC<usersProps> = (
    {
        totalItemsCount,
        pageSize,
        currentPage,
        onPageChanged,
        portionSize = 10,
    }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    if (pagesCount >= 10000) {
        pagesCount = 10000
    }
    const pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState<number>(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize
    return (
        <div className={s.paginator}>
            {portionNumber > 1 &&
            <button onClick={()=>{setPortionNumber(portionNumber-1)}}>PREV</button>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber)
                .map(el => <span key={el}
                                 onClick={() => onPageChanged(el)}
                                 className={currentPage === el ? s.selectedPage : ''}> {el} </span>)}
            {portionCount> portionNumber &&
            <button onClick={()=>setPortionNumber(portionNumber+1)}>NEXT</button>
            }
        </div>
    )
}
