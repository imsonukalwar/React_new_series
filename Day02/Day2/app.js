// const element=React.createElement('h1',{id:'title'},"hello sonu bhai");


// const element2=React.createElement('div',null,
//     React.createElement('h1',null,'hi bhai'),
//     React.createElement('h2',null,"my name is sonnu ")
// );
// ==============================================================
// jsx : javascript xml:look like html(Bable)
//jsx-->react,createelement()-->ract element {js object}-->real dom (html)
//jsx--->react.createElement()

//const element=<h1 id="title">hello coder army</h1>//this in not understandablr by js
//js understand this line with the help of (bable)

// const element2 = (
//   <div>
//     <h1 id="tuf1">hello coder</h1>
//   </div>
// );
//jab kabhi ham koi tag use karetab ham kissi tag ke under wrap karke likhna jaruri hota hai

// react Component--->react component ek fuction hota hai bas!
//ex

// function app(name) {
//     return(
//         <h2>hii sonu bhai aur {name}</h2>
//     );
// }

// const a=app("dipu")

const element=<h>hello {"sonu"}</h>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
//or
// root.render(<h2>heeo2</h2>);
