import React, { useState, useMemo } from 'react'


function CounterUseMemo() {

    const [counterOne, setConterOne] = useState(0)
    const [counterTwo, setConterTwo] = useState(0)

    const incrementOne = () => {
        setConterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setConterTwo(counterTwo + 1)
    }

   const IsEven = useMemo(() => {
        let i = 0
        while(i < 200000000) i++
        return counterOne % 2 === 0;
    } ,[counterOne])
   
  return (
    <>
        <div>Counter Use Memo</div>
        <div>
            <button onClick={incrementOne}>Counter One - {counterOne}</button>
            <span>{IsEven ? 'Even' : 'Odd'}</span>
        </div>
        <button onClick={incrementTwo}>Counter Two - {counterTwo}</button>
    </>
  )
}

export default CounterUseMemo