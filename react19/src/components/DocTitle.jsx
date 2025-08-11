import React, {useState} from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

function DocTitle() {

    const [count, setCount] = useState(0)
    useDocumentTitle(count)


  return (
    <>
    <div>DocTitle</div>
    <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </>
  )
}

export default DocTitle