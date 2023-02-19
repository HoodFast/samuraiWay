import {createStore,combineReducers} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

let redusers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer
});

export let store = createStore(redusers);

