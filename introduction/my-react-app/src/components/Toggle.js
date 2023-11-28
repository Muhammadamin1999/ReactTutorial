import React, {useState} from "react";

function Toggle(){
    const [isVisible, setToggle] = useState(true);

    const toggleButton = () =>{
        setToggle(!isVisible);
    }
    return(
        <div>
            <button onClick={toggleButton}>Toggle</button>
            {isVisible && <p>this message is visible</p>}
        </div>
    )
}

export default Toggle;