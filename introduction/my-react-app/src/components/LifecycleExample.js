import React, {useEffect} from "react";
function LifecycleExample(){
    useEffect(()=>{
        console.log("Componenet is mounted");

        return ()=>{
            console.log("Componenet will unmount");
        };
    },[]);

    return (
        <div>
            <p>This is com with lifecycle events using UseEffect</p>
        </div>
    );
}

export default LifecycleExample;
