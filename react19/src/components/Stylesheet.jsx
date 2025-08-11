import React from 'react'
import './myStyle.css'

function Stylesheet(props) {
    const style = props.primary ? 'primary' : '';
  return (
    <>
        <h1 className={`${style} font-xl`}>React Component</h1>
    </>
  )
}

export default Stylesheet   