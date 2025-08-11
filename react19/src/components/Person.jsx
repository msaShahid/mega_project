import React from 'react'

function Person({data}) {
    const {name, age, skill} = data;
  return (
    <>
    <h2>I am {name}. I am {age} years old. I know {skill} </h2>
    </>
  )
}

export default Person