import { useState } from "react"

function App() {
  const [count ,setcount]=useState([10, 20, 30]);

  function handlechane(){
    // count.push(40);
    setcount([...count,40])
  }
  
  return(
    <>
    <p>this is the counter for react app</p>
    <h1>counter: {count}</h1>
    <button onClick={handlechane}>increament</button>
    {/* <button onClick={()=>{setcount(count-1)}}>decreament</button> */}
    </>
  )

}

export default App;
