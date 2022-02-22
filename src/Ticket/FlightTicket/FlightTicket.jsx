import classes from './FlightTicket.module.css';

const FlightTicket = ({airCarrier, segments}) => {

    const secondSegment = segments[segments.length - 1];
    const departureCity = segments[0].departureCity.caption;
    const arrivalCity = secondSegment.arrivalCity ? secondSegment.arrivalCity.caption : secondSegment.arrivalAirport.caption;
    const departureAirport = segments[0].departureAirport.caption + " (" + segments[0].departureAirport.uid + ")";
    const arrivalAirport = secondSegment.arrivalAirport.caption + " (" + secondSegment.arrivalAirport.uid + ")";
    const departureDate = new Date(segments[0].departureDate).toLocaleTimeString() + ' ' + new Date(segments[0].departureDate).toDateString();
    const arrivalDate = new Date(secondSegment.arrivalDate).toDateString()  + ' ' + new Date(secondSegment.arrivalDate).toLocaleTimeString();
    const transferAmount = (segments.length === 1) ? '' : segments.length-1 + ' пересадка';
    const time = segments[0].travelDuration + secondSegment.travelDuration;

    const getTimeFromMins = (mins) => {
        let hours = Math.trunc(mins/60);
        let minutes = mins % 60;
        return hours + ' ч ' + minutes + ' мин';
    };

    return (
        <div className={classes.flightsTicket}>
            <div className={classes.city}>{departureCity}, {departureAirport} --> {arrivalCity}, {arrivalAirport}</div>
            <div className={classes.date}>
                <div>{departureDate}</div>
                <div className={classes.time}>{getTimeFromMins(time)}</div>
                <div>{arrivalDate}</div>
            </div>
            <div className={classes.transfer}>
                <hr className={classes.hr}/>
                <div className={classes.transferNum}>
                    <div className={classes.transferAmount}>{transferAmount}</div>
                </div>
            </div>
            <div>Рейс выполняет: {airCarrier}</div>
        </div>

    )
}
export default FlightTicket;