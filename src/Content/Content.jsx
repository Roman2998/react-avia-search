import React, {useState} from "react";
import classes from './Content.module.css'
import Ticket from "../Ticket/Ticket";

const Content = ({flights}) => {

    const [pageSize, setPageSize ] = useState(2)
    const addTicket= () => {
        setPageSize(pageSize+2)
    }

    return (
        <>
        <div className={classes.content}>
            {flights.slice(0, pageSize).map(f => <Ticket flight={f} key={f.flightToken}/>)}
            <div className={classes.addTicket}>
                <input type='button' onClick={addTicket} id='button' value='Показать еще'/>
            </div>
        </div>

        </>
    )
}
export default Content;