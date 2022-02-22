import React from "react";
import classes from './Body.module.css';
import Sidebar from "../Sidebar/Sidebar";
import ContentContainer from "../Content/ContentContainer";

const Body = () => {
    return(
        <div className={classes.body}>
            <Sidebar/>
            <ContentContainer/>
        </div>
    )
}
export default Body;