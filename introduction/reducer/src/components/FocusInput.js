import React,{useRef,useEffect} from 'react'
import ClassTimer from './ClassTimer'

function FocusInput() {
    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])
  return (
    <div>
      {/* <input ref={inputRef} type='text'/> */}
      <ClassTimer/>

    </div>
  )
}

export default FocusInput
