import React from "react";

import {Navbar} from "./Navbar";


import {connect} from "react-redux";


// type navbarPropsType = {
//     store: any
// }

//  const avbarContainer = () => {
// // let state = props.store.getState().sidebar
//     return (
//         <StoreContext.Consumer>{(store)=>{
//             let state = store.getState().sidebar
//             return <Navbar store={state}/>
//         }}
//             </StoreContext.Consumer>
//     )
// }

const mapStateToProps=(state)=>{
    return{
        store: state.sidebar,

    }
}


export const NavbarContainer = connect(mapStateToProps) (Navbar);