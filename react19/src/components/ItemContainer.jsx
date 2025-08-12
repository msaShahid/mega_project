import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

function ItemContainer(props) {
  console.log(props)
  return (
    <div>
        <h2 className='text-2xl font-bold text-center text-gray-800 mb-4'> Item - {props.item}</h2>
        <button 
        onClick={props.buyItem}
        className='w-32 font-semibold py-2 px-4 rounded-lg transition bg-blue-600 hover:bg-blue-700 text-white'
        >Buy Item</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake 
        ? state.cake.numOfCakes
        : state.iceCream.numOfIceCream

    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake 
                          ? () => dispatch(buyCake())
                          : () => dispatch(buyIceCream())

      return{
        buyItem: dispatchFunction
      }
}

export default connect(
                        mapStateToProps, 
                        mapDispatchToProps
                      )(ItemContainer)