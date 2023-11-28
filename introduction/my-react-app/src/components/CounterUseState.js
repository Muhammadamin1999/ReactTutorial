import React, {useState} from "react";

function CounterUseState(){
    const [counter, setCounter] = useState(0);

    const handledClick = () =>{
        setCounter(counter+1);
    }

    return(
        <div>
            <p>You clicked {counter} times</p>
            <button onClick={handledClick}>Click Me</button>
        </div>
    )
}

export default CounterUseState;