import { useState } from "react";
import Counting from "./counting";


function Clock() {

const [clock,setclock]=useState(["a","b","c"]);

function change(){

setclock(["d",...clock])

}
    return(
    <>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",flexWrap:"wrap"}}>
        <button onClick={change}>increament clocks</button>
        <div>
            {
                clock.map(clock => <Counting key={clock} name={clock}></Counting>)
            }
        </div>
        </div>
    </>
    )
}

export default Clock;