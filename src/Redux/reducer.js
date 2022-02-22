import {flightsAPI} from "../api/api";

const SET_FLIGHTS = 'SET_FLIGHTS';
const SET_VALUE_SORT_BY = 'SET_VALUE_SORT_BY';
const SET_VALUE_FILTER_BY_TRANSFER = 'SET_VALUE_FILTER_BY';
const SET_VALUE_FILTER_BY_PRICE_START = 'SET_VALUE_FILTER_BY_PRICE_START';
const SET_VALUE_FILTER_BY_PRICE_END = 'SET_VALUE_FILTER_BY_PRICE_END';
const SET_VALUE_FILTER_BY_AIRLINE = 'SET_VALUE_FILTER_BY_AIRLINE';

const initialState = {
    flights: [],
    sortBy: '',
    filterByTransfer: '',
    priceStart: 1,
    priceEnd: 1000000,
    filterByAirline:''
}

const flightsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FLIGHTS:
            return {
                ...state,
                flights: action.payload,
            }
        case SET_VALUE_SORT_BY:
            return {
                ...state,
                sortBy: action.payload,
            }
        case SET_VALUE_FILTER_BY_TRANSFER:
            return {
                ...state,
                filterByTransfer: action.payload,
            }
        case SET_VALUE_FILTER_BY_PRICE_START:
            return {
                ...state,
                priceStart: action.payload,
            }
        case SET_VALUE_FILTER_BY_PRICE_END:
            return {
                ...state,
                priceEnd: action.payload,
            }
        case SET_VALUE_FILTER_BY_AIRLINE:
            return {
                ...state,
                filterByAirline: action.filterByAirline,
            }
        default:
            return state;
    }
}
export const setFlights = (flights) => ({type: SET_FLIGHTS, payload: flights})

export const setValueSortBy = (sortBy) => ({type: SET_VALUE_SORT_BY, payload: sortBy})
export const setValueFilterByTransfer = (filterByTransfer) => ({
    type: SET_VALUE_FILTER_BY_TRANSFER,
    payload: filterByTransfer
})

export const setValueFilterByPriceStart = (priceStart) => ({type: SET_VALUE_FILTER_BY_PRICE_START,
    payload: priceStart
})
export const setValueFilterByPriceEnd = (priceEnd) => ({type: SET_VALUE_FILTER_BY_PRICE_END,
    payload: priceEnd
})

export const setValueFilterByAirline = (filterByAirline) => ({
    type: SET_VALUE_FILTER_BY_AIRLINE,
    filterByAirline: filterByAirline,
})


export const requestFlights = () => async (dispatch) => {
    const response = await flightsAPI.getFlights();
    dispatch(setFlights(response));
}


export default flightsReducer;