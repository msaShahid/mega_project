import { useState } from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function NewCakeContainer(props) {
    
    const [number, setNumber] = useState(1)

  return (
    <>

     <div className="max-w-md mx-auto p-6 mt-5 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4"> Buy Cakes</h2>
    
      <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-6">
        Available Cakes: <span className="font-semibold">{props.numOfCakes}</span>
      </p>

      <div className="mb-4">
        <label htmlFor="cake-input" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Number of cakes to buy:
        </label>
        <input
          id="cake-input"
          type="number"
          min="1"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Enter number"
        />
      </div>

      <button
        onClick={() => props.buyCake(number)}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
      >
        Buy {number || ''} Cake{number === 1 ? '' : 's'}
      </button>
    </div>
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
        buyCake: number => dispatch(buyCake(number))
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)( NewCakeContainer)