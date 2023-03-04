import s from './users.module.css'
import axios from "axios";



export const Users = (props) => {
    console.log(props)
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(
                response => {

                    props.setUsers(response.data.items)
                }
            )
        }
    }

    const urlPhoto = 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg'
    return (
        <div>
            <button onClick={getUsers}>GetUserrs</button>
            {
                props.users.map((el) => {
                    return (
                        <div key={el.id}>
                            <span>
                                <div>
                                    <img className={s.userPhoto} src={el.photos.small ? el.photos.small : urlPhoto}/>
                                </div>
                                <div>
                                    {el.followed ? <button onClick={() => props.unfollow(el.id)}>Unfollow</button> :
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