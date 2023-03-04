import s from "./users.module.css";
import axios from "axios";
import {UsersPropsTypePresent} from "./UsersContainer";
import React from "react";


class UsersC extends React.Component<UsersPropsTypePresent> {
    constructor(props) {
        super(props);
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(
                response => {
                    this.props.setUsers(response.data.items)
                })}

    render() {
        return (
            <div>

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
