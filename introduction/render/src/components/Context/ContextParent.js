import React, {useState} from 'react'
import {ChildA} from './ContextChildren'
import { MemoizedChildA } from './ContextChildren'
export const CountContext = React.createContext()
const CountProvider = CountContext.Provider

export const ContextParent = () => {
    const [count, setCount] = useState(0)
    console.log('context Parent render')
  return (
    <div>
      <button onClick={()=> setCount(c => c + 1)}>Count {count}</button>
      <CountProvider value={count}>
      <MemoizedChildA/>
      </CountProvider>
      
    </div>
  )
}


