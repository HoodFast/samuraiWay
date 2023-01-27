import {navbarType} from "../../../Redux/state";
import {Friend} from "./Friend/Friend";
import s from "./FriendsBlock.module.css"

type FriendsBlockType = {
    friends: Array<navbarType>
}

export const FriendsBlock = (props: FriendsBlockType) => {
    const friendBlocks = props.friends.map(f => <Friend id={f.id} friendsName={f.friendsName} avatar={f.avatar}
                                                        key={f.id}/>)
    return (
        <div className={s.friendsPosition}>
            <div>
                <h2>MyFriends</h2>
            </div>
            <div className={s.friendsBlock}>
                {friendBlocks}
            </div>
        </div>
    )
}