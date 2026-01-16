import { useEffect, useState } from "react";


function App() {
  const [user,setuser]=useState([]);
const [count , setcount]=useState(30);
useEffect(()=>{
  async function Git_prof() {
  const response=await fetch(`https://api.github.com/users?per_page=${count}`);
  const data= await response.json();
  console.log(data);
  setuser (data);
}
Git_prof();
},[count])

function HashChangeEvent(e) {
  console.log(e.target.value);
  // setname(e.target.value.toUpperCase())
}

  return (
    <>
    <h1>git_hub usser</h1>
    <input type="number" value={count} onChange={(e)=>{setcount(e.target.value)}}></input>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap", gap:"10px" }}>
    {
      user.map(user=>(
        <img src={user.avatar_url} height={"100px"} width={"100px"} key={user.login} />
      ))
    }
    </div>
    </>
  )
}


export default App;
