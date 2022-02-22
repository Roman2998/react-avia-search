import React from "react";
import classes from './FilterByPrice.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setValueFilterByPriceEnd, setValueFilterByPriceStart} from "../../Redux/reducer";

const FilterByPrice = () => {
    const dispatch = useDispatch();
    const priceStart = useSelector(state => state.flightsPage.priceStart);
    const priceEnd = useSelector(state => state.flightsPage.priceEnd);

    const handleChangeStart = (priceStart) => {
        dispatch(setValueFilterByPriceStart(priceStart.target.value));
    }
    const handleChangeEnd = (priceEnd) => {
        dispatch(setValueFilterByPriceEnd(priceEnd.target.value));
    }
    return (
        <form>
            <h3>Цена</h3>
            <div className={classes.input} >
                <label>От <input type='number' placeholder='От'
                           value={priceStart} name="priceStart"
                           onChange={handleChangeStart}/>
                </label>
            </div>
            <div>
                <label>До <input type='number' placeholder='До'
                           value={priceEnd} name="priceEnd"
                           onChange={handleChangeEnd}/>
                </label>
            </div>
        </form>
    )
}
export default FilterByPrice;