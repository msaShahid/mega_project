import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function NewCakeContainer(props) {
  return (
    <>
    <div>NewCakeContainer {props.numOfCakes}</div>
    <button onClick={props.buyCake}>Buy Cake</button>
    </>
  )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)( NewCakeContainer)