import { useState } from "react";



function Counting({name}) {

const [count,setcount]=useState(0);

    return(
    <>
    <p>our first counter app::{name} </p>
        <p>counter: {count}</p>
        <button onClick={()=>{setcount(count+1)}}>increament</button>
    </>
    )
}

export default Counting;