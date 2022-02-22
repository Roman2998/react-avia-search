import flights from './flights.json'

export const flightsAPI = {
    getFlights() {
        return flights.result.flights
    }
}