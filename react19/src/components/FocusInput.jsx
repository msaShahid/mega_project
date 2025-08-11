import React, {useEffect, useRef} from 'react'

function FocusInput() {

    const inputRef = useRef(null);

    useEffect(() => {
        // focus into input field
        inputRef.current.focus()
    }, [])

  return (
    <>
    <div>FocusInput</div>
    <input ref={inputRef} type="text" name="name" id="name" />
    </>
  )
}

export default FocusInput