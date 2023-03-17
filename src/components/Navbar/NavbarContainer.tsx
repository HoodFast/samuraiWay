import React from "react";

import {Navbar} from "./Navbar";


import {connect} from "react-redux";




const mapStateToProps=(state)=>{
    return{
        store: state.sidebar,

    }
}


export const NavbarContainer = connect(mapStateToProps) (Navbar);