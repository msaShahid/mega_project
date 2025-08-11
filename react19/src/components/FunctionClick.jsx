function FunctionClick() {

    function clickHandler(){
        console.log("Button clicked");
    }


  return (
    <>
        <button className='btn btn-primary' onClick={clickHandler}>Click me!</button>
    </>
  )
}

export default FunctionClick