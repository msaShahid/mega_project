import React from "react"

const Greet = ({name, age, children}) => {
    //console.log(props)
    //const {name, age, children} = props;
    return(
        <>
            <h1>Hi, I'm {name} and {age} years old</h1>
            {children}
        </>
    )
}

export default Greet;