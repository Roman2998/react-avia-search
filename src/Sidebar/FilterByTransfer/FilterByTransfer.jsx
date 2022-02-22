import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setValueFilterByTransfer} from "../../Redux/reducer";

const FilterByTransfer = () => {
    const dispatch = useDispatch();
    const filterByTransfer = useSelector(state => state.flightsPage.filterByTransfer);

    const changeValue = (event) => {
       dispatch(setValueFilterByTransfer(event.target.value));
    }
    return (
        <form>
            <h3>Фильтровать</h3>

            <div>
                <label>
                    <input type='checkbox' value='oneFlightChange'
                           checked={filterByTransfer === 'oneFlightChange'}
                           onChange={changeValue}/>
                    - 1 пересадка
                </label>
            </div>
            <div>
                <label>
                    <input type='checkbox' value='nonStop'
                           checked={filterByTransfer === 'nonStop'}
                           onChange={changeValue}/>
                    - без пересадок
                </label>
            </div>
        </form>
    )
}
export default FilterByTransfer