import {applyMiddleware,createStore,combineReducers} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {userReducer} from "./user-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'

let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:userReducer,
    auth:authReducer
});

export type AppStateType = ReturnType<typeof rootReducer>



export let store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;
