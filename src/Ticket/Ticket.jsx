import React from "react";
import classes from './Ticket.module.css'
import FlightTicket from "./FlightTicket/FlightTicket";


const Ticket = ({flight: {flight, flightToken}}) => {
    const price = flight.price.total.amount;
    const currencyCode = flight.price.total.currencyCode;

    const segmentsFirstLegs = flight.legs[0].segments;
    const segmentsSecondLegs = flight.legs[1].segments;

    const airCarrier = flight.carrier.caption;

    return (
        <div key={flightToken} className={classes.ticket}>
            <div className={classes.price}>
                <div>{price} {currencyCode}</div>
                <div className={classes.description}>Стоимость для одного взрослого пассажира</div>
            </div>
            <FlightTicket airCarrier={airCarrier} segments={segmentsFirstLegs}/>
            <hr className={classes.hr}/>
            <FlightTicket segments={segmentsSecondLegs} airCarrier={airCarrier}/>
            <div className={classes.button}>
                <input type='button'  id='button' value='ВЫБРАТЬ'/>
            </div>
        </div>
    )
}
export default Ticket;