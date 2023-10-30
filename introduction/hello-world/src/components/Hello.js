import React from 'react'

const Hello = () =>{
    // return (
    //     <div>
    //         <h1>Helloooo</h1>
    //     </div>
    // )
    return React.createElement('div', {id: "hello"},React.createElement('h1',null, 'Hello00'));
}

export default Hello;