import React, {useState} from 'react'
import useInout from './useInout'

function UserForm() {
   
    
    const [firstName, bindFirstName, resetFirstName] = useInout('')
    const [lastName, bindLastName, resetLastName] = useInout('')
    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
            <label>First name</label>
            <input {...bindFirstName} value={firstName}  type='text'/>
        </div>
        <div>
            <label>Last name</label>
            <input {...bindLastName} value={lastName} type='text'/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UserForm
