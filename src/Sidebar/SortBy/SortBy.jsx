import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setValueSortBy} from "../../Redux/reducer";

const SortBy = () => {
    const dispatch = useDispatch();
    const sortBy = useSelector(state => state.flightsPage.sortBy)

    const changeValue = (event) => {
        dispatch(setValueSortBy(event.target.value));
    }

    return (
        <form>
            <h3>Сортировать</h3>

            <div>
                <label>
                    <input type='radio' value='ascendingPrice'
                           checked={sortBy === 'ascendingPrice'}
                           onChange={changeValue}/>
                    - по возрастанию цены
                </label>
            </div>
            <div>
                <label>
                    <input type='radio' value='descendingPrice'
                           checked={sortBy === 'descendingPrice'}
                           onChange={changeValue}/>
                    - по убыванию цены
                </label>
            </div>
            <div>
                <label>
                    <input type='radio' value='byTravelTime'
                           checked={sortBy === 'byTravelTime'}
                           onChange={changeValue}/>
                    - по времени в пути
                </label>
            </div>
        </form>
    )
}
export default SortBy;