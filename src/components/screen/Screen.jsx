import React from "react";
import {useScreen} from "../../context/screen.context"
import style from "./screen.module.css"
function Screen(){
    const {value}=useScreen();
    return(
        <div className={style.screen}> 
           <h3 className={style.value}>{value}</h3> 
        </div>
    )
}

export default Screen;