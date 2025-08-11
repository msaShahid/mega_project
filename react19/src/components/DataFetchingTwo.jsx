import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'Fetch_Success':
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'Fetch_Error':
            return {
                loading: false,
                error: 'Something went wrong.',
                post: {}
            }
        default:
            return state
        
    }
}

function DataFetchingTwo() {

    const [state, dispatch]  = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            dispatch({type: 'Fetch_Success', payload: response.data})
        })
        .catch(error => {
            dispatch({type: 'Fetch_Error'})
        })
    }, [])

  return (
    <>
        <div>DataFetchingTwo</div>

    <div>
      {state.loading ? 'Loading..' : state.post.title}
      {state.error ? state.error : null}
    </div>

    </>
  )
}

export default DataFetchingTwo