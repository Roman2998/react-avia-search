import React from "react";
import classes from './Sidebar.module.css'
import SortBy from "./SortBy/SortBy";
import FilterByTransfer from "./FilterByTransfer/FilterByTransfer";
import FilterByPrice from "./FilterByPrice/FilterByPrice";
import FilterByAirline from "./FilterByAirline/FilterByAirline";

const Sidebar = () => {

    return (
        <div className={classes.sidebar}>
            <SortBy/>
            <FilterByTransfer/>
            <FilterByPrice/>
            <FilterByAirline/>
        </div>
    )
}
export default Sidebar;