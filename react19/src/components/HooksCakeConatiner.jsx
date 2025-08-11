import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeConatiner() {
  const numOfCakes =  useSelector(state => state.cake.numOfCakes)
  const dispatch =  useDispatch()
  return (
    <>
        <div>HooksCakeConatiner</div>
        <h2>Num of cakes - {numOfCakes} </h2>
        <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </>
  )
}

export default HooksCakeConatiner