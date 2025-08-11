import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function NewCakeContainer({ numOfCakes, buyCake }) {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleBuy = useCallback(() => {
    const qty = Number(quantity);
    if (qty < 1 || isNaN(qty)) return;
    buyCake(qty);
    setQuantity(1); 
  }, [quantity, buyCake]);

  const isInvalidInput = Number(quantity) < 1 || isNaN(Number(quantity));

  return (
    <div className="max-w-md mx-auto p-6 mt-5 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">
        Buy Cakes
      </h2>

      <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-6">
        Available Cakes: <span className="font-semibold">{numOfCakes}</span>
      </p>

      <div className="mb-4">
        <label
          htmlFor="cake-input"
          className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Number of cakes to buy:
        </label>
        <input
          id="cake-input"
          type="number"
          min="1"
          value={quantity}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Enter number"
        />
      </div>

      <button
        onClick={handleBuy}
        disabled={isInvalidInput}
        className={`w-full font-semibold py-2 px-4 rounded-lg transition ${
          isInvalidInput
            ? 'bg-gray-400 cursor-not-allowed text-white'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        Buy {quantity || ''} Cake{quantity === '1' ? '' : 's'}
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  numOfCakes: state.cake.numOfCakes,
});

const mapDispatchToProps = (dispatch) => ({
  buyCake: (number) => dispatch(buyCake(number)),
});


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(NewCakeContainer);
