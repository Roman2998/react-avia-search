import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setValueFilterBy} from "../../Redux/reducer";

const FilterBy = () => {
    const dispatch = useDispatch();
    const filterBY = useSelector(state => state.flightsPage.filterBy)
   // const [value, setValue] = useState();

    const changeValue = (event) => {
       dispatch(setValueFilterBy(event.target.value));
    }
    return (
        <form>
            <h3>Фильтровать</h3>

            <div>
                <label>
                    <input type='checkbox' value='oneFlightChange' //id='oneFlightChange'
                           checked={filterBY === 'oneFlightChange'}
                           onChange={changeValue}/>
                    - 1 пересадка
                </label>
            </div>
            <div>
                <label>
                    <input type='checkbox' value='nonStop' //id='nonStop'
                           checked={filterBY === 'nonStop'}
                           onChange={changeValue}/>
                    - без пересадок
                </label>
            </div>

        </form>
    )
}
export default FilterBy