import {createStore,combineReducers} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {userReducer} from "./user-reducer";

let redusers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:userReducer
});

export type AppStateType = ReturnType<typeof redusers>

export let store = createStore(redusers);

