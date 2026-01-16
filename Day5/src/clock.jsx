import { useEffect, useState } from "react";


function Clock() {
const [time ,settime]=useState(new Date().toLocaleTimeString())
const [show,setshow]=useState(true)
useEffect(()=>{
    if(!show)
        return;
    const intervalId=setInterval(() =>{
    settime(new Date().toLocaleTimeString());
    console.log("hi");
    
},1000);

return ()=>{
    clearInterval(intervalId);
}

},[show])
setInterval(() =>{
    settime(new Date().toLocaleTimeString());
    console.log("hii");
    
},1000);

    return(
        <>
        <button onClick={()=>{setshow(!show)}}>{show?"hide":"show"}</button>
        {
            show&&<h1>Current Time :{time}</h1>
        }
        </>
    )
}

export default Clock;