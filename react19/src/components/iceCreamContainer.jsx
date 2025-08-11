import React from 'react'
import { buyIceCream } from '../redux'
import { connect } from 'react-redux'

function iceCreamContainer(props) {
    console.log(props.numOfIceCream)
  return (
    <>
    <h3>ice Cream Container</h3>
    <div>Num of Ice Cream - {props.numOfIceCream}</div>
    <button onClick={props.buyIceCream}>Buy Icecream</button>
    </>
  )
}

const mapStateToProps = state => {
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)( iceCreamContainer)