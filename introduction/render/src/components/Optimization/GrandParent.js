import React, {useState} from 'react'
import { ParentOne } from './ParentOne'
import { ChildOne } from './ChildOne'
export const GrandParent = () => {
    const [newCount, setNewCount] = useState(0)
  return (
    <div>
      <button onClick={()=> setNewCount((nc)=> nc + 1)}>Grantparent Count - {newCount}</button>
      <ParentOne newCount={newCount}>
        <ChildOne/>
      </ParentOne>
    </div>
  )
}


