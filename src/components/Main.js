import React, {useState} from "react";
import Hog from "./Hog";
import Filter from "./Filter";

function Main ({theHogs,filterPigs, onFilter,sortBy, onSort}){
    let hogsToDisplay = theHogs.map( 
        (hog)=>(<Hog 
                hog={hog}
                />)
        )
    return (
        <div className="">
            <Filter 
                filterPigs={filterPigs}
                onFilter={onFilter}
                sortBy={sortBy} 
                onSort={onSort}/>
            {hogsToDisplay}
        </div>
    )
}

export default Main;