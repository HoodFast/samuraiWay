import s from "./users.module.css";
import axios from "axios";
import {UsersPropsTypePresent} from "./UsersContainer";
import React from "react";


class UsersC extends React.Component<UsersPropsTypePresent> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(
            response => {
                this.props.setUsers(response.data.items)
            })
    }

    onPageChanged = (pageId: number) => {
        this.props.setCurrentPage(pageId);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageId}&count=${this.props.pageSize}`).then(
            response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })

    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages: number[] = []
        for (let i = 1; i <= (pagesCount>10&&10); i++) {
            pages.push(i);
        }
        return (
            <div>
                <div>
                    {pages.map(el => <span onClick={()=>this.onPageChanged(el)}
                                           className={this.props.currentPage === el ? s.selectedPage : ''}> {el} </span>)}
                </div>
                {
                    this.props.users.map((el) => {
                        return (
                            <div key={el.id}>
                            <span>
                                <div>
                                    <img className={s.userPhoto}
                                         src={el.photos.small ? el.photos.small : 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg'}/>
                                </div>
                                <div>
                                    {el.followed ?
                                        <button onClick={() => this.props.unfollow(el.id)}>Unfollow</button> :
                                        <button onClick={() => this.props.follow(el.id)}>Follow</button>}
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
                                    {/*<span>*/}
                                    {/*    <div>*/}
                                    {/*        {el.location.country}*/}
                                    {/*    </div>*/}
                                    {/*    <div>*/}
                                    {/*         {el.location.city}*/}
                                    {/*    </div>*/}
                                    {/*</span>*/}
                            </span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default UsersC;
