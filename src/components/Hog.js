import React, {useState} from "react";

function Hog ({hog}){
    let [isDisplayed, setIsDisplayed] = useState(false);

    function handleClick () {
        setIsDisplayed(!isDisplayed)
    }

    return (
        <div className="pigTile" onClick={handleClick}>
            <div className="ui grid container">
                <img className="ui eight wide column" src={hog.image}></img>
                <h2 className='ui eight wide column'> {hog.name}</h2>
                <p className={isDisplayed ? "":"hidden"}>Speciality: {hog.specialty}</p>
                <p className={isDisplayed ? "":"hidden"}> {hog.greased ? 'Greased' : 'Not Greased'}</p>
                <p className={isDisplayed ? "":"hidden"}>Weight: {hog.weight} lbs</p>
                <p className={isDisplayed ? "":"hidden"}>Highest Medal Achieved: {hog["highest medal achieved"]}</p>

            </div>
        </div>
    )
}

export default Hog;