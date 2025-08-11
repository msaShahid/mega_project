import React from 'react'
import Person from './Person'

function NameList() {

    //const names = ['Bruce', 'Alfred', 'James']

    const personList = [
      {id:1,name: 'John Doe', age: 30, skill: 'React'},
      {id:2,name: 'Jane Doe', age: 25, skill: 'Angular'},
      {id:3,name: 'Alice Smith', age: 22, skill: 'Nodejs' },
      {id:4,name: 'Bob Johnson', age: 40, skill: 'Vue'},
    ]
      
    const list = personList.map((person, index) => (
      <Person key={person.id} data={person}/>
    ))

  return (
    <>
    <h1>My name list</h1>
    <ol>
        {
            list
        }
    </ol>
    </>
  )
}

export default NameList