import { useState } from "react";

function App(){
  let [count ,setCount]=useState(0);//userState ek hook hai jo incr ka kam karega
// let count = 0;
// function increasenum(){
//   count++;
//   const p=document.querySelector('p');
//   p.textContent=`count : ${count}`
//   const b=document.querySelector('button');
//   b.textContent=`Increament: ${count}`;
//   //ye do line kewal ek paragraph ke lia hai agar mujhe bohot sare button and
//   //  paragraph ke liye karna ho to mujhe har element ko select karke usse waha
//   //  pe update karna padega lekin ham issi kam ko react hooks ki madat
//   //  se aasani se kar saktey hai bina let's see
//   console.log(count);
  
// }

function increasenum(){
  count++;
  setCount(count);
}

  return(
    <>
    <p>count : {count} </p>
    <button onClick={increasenum}>Increament</button>
    {/* <p>count : {count} </p>
    <button onClick={increasenum}>Increament</button> */}
    </>
  )
 

}


export default App;