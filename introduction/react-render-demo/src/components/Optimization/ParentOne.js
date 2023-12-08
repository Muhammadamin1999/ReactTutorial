import React, {useState} from 'react'
import {Child} from './Child'
export const ParentOne = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={()=> setCount(c => c + 1)}>Count - {count}</button>
      <Child/>
    </div>
  )
}

