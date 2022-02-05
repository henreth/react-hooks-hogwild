import React, {useState} from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Hog from "./Hog";
import Filter from "./Filter";

function App() {
	let [newHogs,setHogs] = useState(hogs);

	let [filterPigs,setFilterPigs] = useState(false);

	function handleFilterClick() {
		setFilterPigs(!filterPigs);
	}

	let [sortBy,setSortBy] = useState(false);

	function handleSortClick() {
		setSortBy(!sortBy)
	}

	let displayedPigs = newHogs.filter(
		(pig) => filterPigs===false || pig.greased===true
	).sort((hog1, hog2) => {
		if (sortBy === true) {
		  return hog1.weight - hog2.weight;
		} else {
		  return hog1.name.localeCompare(hog2.name);
		}
	})

	let hogsToDisplay = displayedPigs.map( 
        (hog)=>(<Hog 
                hog={hog}
                />)
        )

	return (
		<div className="App">
			<Nav />
			<Filter
				filterPigs={filterPigs}
				onFilter={handleFilterClick}
				sortBy={sortBy}
				onSort={handleSortClick}
				/>
			{hogsToDisplay}
		</div>
	);
}

export default App;
