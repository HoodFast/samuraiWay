import {applyMiddleware,createStore,combineReducers} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {userReducer} from "./user-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import {appReducer} from "./app-reducer";

let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:userReducer,
    auth:authReducer,
    app:appReducer
});

export type AppStateType = ReturnType<typeof rootReducer>



export let store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;
