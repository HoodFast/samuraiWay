import {createStore,combineReducers} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {userReducer} from "./user-reducer";
import {authReducer} from "./auth-reducer";

let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:userReducer,
    auth:authReducer
});

export type AppStateType = ReturnType<typeof rootReducer>



export let store = createStore(rootReducer);

// @ts-ignore
window.store = store;
