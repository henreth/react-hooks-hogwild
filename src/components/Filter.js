import react from "react";
import React, {useState} from "react";

function Filter ({filterPigs, onFilter,sortBy, onSort}) {
    return (
        <react.Fragment>
            <button onClick={onFilter}>{filterPigs? "Show All Pigs":"Show Only Greased"}</button>
            <button onClick={onSort}>{sortBy?'Sorting by: Weight':'Sorting by: Name'}</button>
        </react.Fragment>
    )
}

export default Filter;