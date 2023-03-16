import preloader from "../../../assets/Skate.gif";
import React from "react";

type preloaderPropsType = {
    isFetching: boolean
}
export const Preloader = (props: preloaderPropsType) => {
    return <div>
         <img src={preloader} style={{width: 40}}/>
    </div>

}