//let's create element with the help of javascript 

// const element1=document.createElement('h1');
// element1.textContent="hello coder army";
// element1.className='element';
// element1.id='first'
// element1.style.backgroundColor="orange";
// element1.style.fontSize="150px"

// const r=document.getElementById('root');
// r.append(element1);


//i want to create new same type of element , so what should i do ?>>>we are doing same method again


// const element2=document.createElement('h1');
// element2.textContent="hello coder army";
// element2.className='element';
// element2.id='first'
// element2.style.backgroundColor="orange";
// element2.style.fontSize="150px"


// r.append(element2);

//yaha ek bat notice karne wali hai ki agar hame 100 element crete karna ho to 100  timees likhna 
//sahi nahi rahega so ham is cretion ka function bana dena chahiye


// const react={
//     createElement:function (tag,attributes,children) {
//     const element=document.createElement(tag);
//     element.textContent=children;
//     for (const key in attributes) {
//         if(key==='style'){
//             Object.assign(element.style,attributes.style)
//         }else{
//             element[key]=attributes[key];
//         }
//     }
// return element;
// }
// }
// const rectDom={
//     render:function(parent,child){
//         parent.append(child)
// }
// }
//both react and reactDom is cusrum build react
//yadi ham chahe to ye sabhi react ke main function se bina in dono code
//ko likhe bhi access kar saktey hai uske lia rect ke CDN limk ko html me pest karna padega ;


const el1=React.createElement('h1',{className:'element',id:'first'},"hello sonu");
//aap attributes  ek object hai aap chahe to iske under aur bhi arguement pass kar saktey hai like style property bbhi
const el2=React.createElement('h2',{className:'element',id:'first',style:{fontSize:"100px",backgroundColor:"orange",color:"blue"}},"strike is lounch");
const root=document.getElementById('root');
// root.append(el1);
// root.append(el12)

ReactDOM.render(el1, root);
// ReactDOM.render(el2, root)
//ham yaha jab bhi render ka use karte hai to render pahle pade sare context ko clean kar dega /
//aur jo new render ke under hoga wo print ho jayega is lia ek sath dono element print nahi ho raha hai