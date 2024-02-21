import React, {useState} from 'react'

const initState = {
    fname: 'Bruce',
    lname: 'Wayne'
}
const ObjectUseState = () => {
    const [person, setPerson] = useState(initState)
    const changeName = () =>{
        // person.fname = 'Clark'
        // person.lname = 'Kent'
        // setPerson(person)
        const newPerson = {...person}
        newPerson.fname = 'Clark'
        newPerson.lname = 'kent'
        setPerson(newPerson)
    }
    console.log('ObjectUseState render')
  return (
    <div>
      <button onClick={changeName}>
        Change {person.fname} {person.lname}
      </button>
    </div>
  )
}

export default ObjectUseState
