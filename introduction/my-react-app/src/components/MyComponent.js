import React, {useState} from "react";

function MyComponent(){
      const [title, setTitle] = useState('React App2');
       return(
        <div>
            <h1>{title}</h1>
            <button onClick={()=> setTitle('New Title')}>Change title</button>
        </div>
       );
}

export default MyComponent;