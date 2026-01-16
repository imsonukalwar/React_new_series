import { useState } from "react"
import Food from "./food";

function List() {

    const [item,setitem]=useState(["apple","banana","grapsh"])
    function handlechange() {
        setitem(["mango",...item])
    }
    
    return(
        <>
        <button onClick={handlechange} >increment</button>
        <Food foods={item}/>
        </>
    )
}

export default List;