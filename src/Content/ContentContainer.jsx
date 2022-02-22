import React from "react";
import classes from './Content.module.css'
import Ticket from "../Ticket/Ticket";
const Content = () => {
    return(
        <div className={classes.content}>
            <Ticket/>
        </div>
    )
}
export default Content;