import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {setValueFilterByAirline} from "../../Redux/reducer";

const FilterByAirline = () => {
    const dispatch = useDispatch();
    const [checkedSu, setCheckedSu] = useState(false);
    const [checkedLo, setCheckedLo] = useState(false);

    const changeValueSu = (event) => {
        checkedSu ?
            dispatch(setValueFilterByAirline(event.target.value = ''))
            :
            dispatch(setValueFilterByAirline(event.target.value))

        setCheckedSu(!checkedSu)
    }
    const changeValueLo = (event) => {
        checkedLo ?
            dispatch(setValueFilterByAirline(event.target.value = ''))
            :
            dispatch(setValueFilterByAirline(event.target.value))

        setCheckedLo(!checkedLo)
    }

    return (
        <form>
            <h3>Авиакомпании</h3>

            <div>
                <label>
                    <input type='checkbox' value='SU'
                           checked={ checkedSu }
                           onChange={changeValueSu}/>
                    - Аэрофлот - российские авиалинии
                </label>
            </div>
            <div>
                <label>
                    <input type='checkbox' value='LO'
                           checked={checkedLo}
                           onChange={changeValueLo}/>
                    - LOT Polish Airlines
                </label>
            </div>
        </form>
    )
}
export default FilterByAirline