import React, {useCallback, useEffect} from 'react';
import Content from './Content';
import {useDispatch, useSelector} from 'react-redux';
import {requestFlights} from '../Redux/reducer';


const ContentContainer = () => {
    const dispatch = useDispatch();
    const flights = useSelector(state => state.flightsPage.flights);
    const sortBy = useSelector(state => state.flightsPage.sortBy);
    const filterByTransfer = useSelector(state => state.flightsPage.filterByTransfer);
    const priceStart = useSelector(state => state.flightsPage.priceStart);
    const priceEnd = useSelector(state => state.flightsPage.priceEnd);
    const filterByAirline = useSelector(state => state.flightsPage.filterByAirline)


    switch (sortBy) {
        case 'ascendingPrice':
            flights.sort((a, b) => {
                return +a.flight.price.total.amount - +b.flight.price.total.amount;
            });
            break;
        case 'descendingPrice':
            flights.sort((a, b) => {
                return +b.flight.price.total.amount - +a.flight.price.total.amount;
            });
            break;
        case 'byTravelTime':
            flights.sort((a, b) => {
                const time = (time)=>{
                    return (
                        time.flight.legs[0].segments[0].travelDuration + time.flight.legs[0].segments[time.flight.legs[0].segments.length - 1].travelDuration +
                        time.flight.legs[1].segments[0].travelDuration + time.flight.legs[1].segments[time.flight.legs[1].segments.length - 1].travelDuration
                    )
                }
                return ( time(a) - time(b) )
            })
            break;
        default:
    }

    const filterFunctionByPrice = useCallback(flights => {
        if ((priceStart || 1) && (priceEnd || 1000000)) {
            return (
                flights.filter((flight) => {
                    return +flight.flight.price.total.amount >= priceStart && +flight.flight.price.total.amount <= priceEnd;
                })
            )
        }
    }, [priceStart, priceEnd])

    const filterOne = (flights) => {
        return (
            filterFunctionByPrice(flights)
        )
    }

    const filterFunction = useCallback(flights => {
        switch (filterByTransfer) {
            case 'oneFlightChange':
                return (
                    flights.filter((flight) => {
                        return flight.flight.legs[0].segments.length > 1 && flight.flight.legs[1].segments.length > 1;
                    })
                );
            case 'nonStop':
                return (
                    flights.filter((flight) => {
                        return flight.flight.legs[0].segments.length === 1 && flight.flight.legs[1].segments.length === 1;
                    })
                );
            default:
                return flights
        }
    }, [filterByTransfer])

    const filterTwo = (flights) => {
        const oneResult = filterOne(flights);
        return filterFunction(oneResult)
    }

    const filterFunctionByAirline = useCallback(flights => {
        switch (filterByAirline) {
            case 'SU':
                return (
                    flights.filter((flight) => {
                        return flight.flight.carrier.airlineCode === 'SU';
                    })
                );
            case 'LO':
                return (
                    flights.filter((flight) => {
                        return flight.flight.carrier.airlineCode === 'LO';
                    })
                );
            default:
                return flights
        }
    }, [filterByAirline])

    const filterThree = (flights) => {
        const twoResult = filterTwo(flights);
        return filterFunctionByAirline(twoResult)
    }


    useEffect(() => {
        dispatch(requestFlights());
    })

    return (
        <Content flights={filterThree(flights)} />
    )
}

export default ContentContainer;