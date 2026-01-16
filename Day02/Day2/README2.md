
---

# 🧠 Lecture 02 ko AASAN BHASHA me samjho

---

## 1️⃣ JSX asal me kya hota hai?

JSX **HTML nahi hai** ❌
JSX **string nahi hai** ❌

👉 JSX asal me **JavaScript ka special syntax** hai jo HTML jaisa dikhta hai.

```jsx
const element = <h1>Hello</h1>;
```

Ye browser ko directly samajh nahi aata.
Isse pehle **convert** hona padta hai.

---

## 2️⃣ JSX ka asli kaam (andar kya hota hai?)

JSX sirf ek **shortcut** hai taaki hume ye na likhna pade 👇

```js
React.createElement(...)
```

### Process samjho:

### Step 1: Tum JSX likhte ho

```jsx
<h1 id="title">Hello</h1>
```

### Step 2: Babel isse JavaScript banata hai

```js
React.createElement('h1', { id: 'title' }, 'Hello')
```

### Step 3: React Virtual DOM object banata hai

```js
{
  type: 'h1',
  props: {
    id: 'title',
    children: 'Hello'
  }
}
```

👉 Matlab:

> JSX = **React.createElement ko easy banana**

---

## 3️⃣ JSX ke basic rules (bahut important)

### ✅ Ek element

```jsx
<h1>Hello</h1>
```

### ✅ Attributes allowed

```jsx
<h1 id="title" className="heading">Hello</h1>
```

### ❗ JSX me sab tags close hone chahiye

```jsx
<img src="photo.jpg" />   // ✅
<input />                // ✅
<br />                   // ✅
```

HTML me chal jata hai bina `/`, JSX me ❌

---

## 4️⃣ Multi-line JSX ka rule

Jab JSX ek se zyada line me ho, to **brackets () use karo**

```jsx
const element = (
  <div>
    <h1>Title</h1>
    <p>Text</p>
  </div>
);
```

👉 Readable + safe

---

## 5️⃣ Sirf ONE root element kyun?

❌ Galat:

```jsx
<h1>Title</h1>
<p>Text</p>
```

✅ Sahi:

```jsx
<div>
  <h1>Title</h1>
  <p>Text</p>
</div>
```

👉 Reason:

* JSX ek hi `React.createElement()` banata hai
* Do alag elements ek variable me assign nahi ho sakte

---

## 6️⃣ JSX ke andar JavaScript kaise likhte hain?

👉 `{}` ke andar **sirf expressions** allowed hain

### ✅ Allowed cheezein:

```jsx
{name}
{a + b}
{getName()}
{age > 18 ? "Adult" : "Minor"}
{isLoggedIn && <p>Welcome</p>}
```

### ❌ Not allowed:

```jsx
if (x > 5) {}
for () {}
while () {}
```

👉 Kyun?

* Ye **statements** hain
* JSX ko **value** chahiye, logic nahi

---

## 7️⃣ JSX Attributes ke special rules

### ❗ `class` nahi, `className`

```jsx
<div className="box"></div>
```

### ❗ `for` nahi, `htmlFor`

```jsx
<label htmlFor="name"></label>
```

### ❗ Events camelCase me

```jsx
<button onClick={handleClick}></button>
```

---

## 8️⃣ JSX me style kaise likhte hain?

HTML ❌

```html
<h1 style="color:red"></h1>
```

JSX ✅

```jsx
<h1 style={{ color: 'red', fontSize: '20px' }}></h1>
```

👉 Double `{}` kyun?

* Outer `{}` → JavaScript
* Inner `{}` → Object

---

## 9️⃣ JSX me children ka matlab

Children = tag ke beech ka content

```jsx
<h1>Hello</h1>   // Hello = children
```

```jsx
<div>
  <h1>Title</h1>
  <p>Text</p>
</div>
```

Sab children hain.

---

## 🔟 Arrays JSX me kaise render hote hain?

```jsx
{numbers.map(num => <li key={num}>{num}</li>)}
```

👉 `key` React ko batata hai:

> “Kaunsa item change hua”

---

## 1️⃣1️⃣ Fragment kya hota hai?

Extra div se bachne ke liye:

```jsx
<>
  <h1>Title</h1>
  <p>Text</p>
</>
```

👉 DOM me extra element nahi aata

---

## 1️⃣2️⃣ true / false / null JSX me

Ye kuch bhi render nahi karte:

```jsx
{true}
{false}
{null}
{undefined}
```

👉 Isliye conditional rendering me kaam aate hain

---

# 🧩 React Component ko samjho

---

## 1️⃣ Component kya hota hai?

👉 **Component = JavaScript function jo JSX return kare**

```jsx
function Greeting() {
  return <h1>Hello</h1>;
}
```

Bas itna hi 👍

---

## 2️⃣ Component vs Normal function

Normal function:

```jsx
getGreeting()
```

Component:

```jsx
<Greeting />
```

👉 React khud function call karta hai

---

## 3️⃣ Capital letter kyun zaroori?

```jsx
<div />       // HTML tag
<Greeting />  // React component
```

👉 React pehchanta hai:

* lowercase → DOM
* Capital → Component

---

## 4️⃣ Component reuse kaise hota hai?

```jsx
<Welcome />
<Welcome />
<Welcome />
```

Har baar function call hota hai
Har baar JSX render hota hai

---

## 5️⃣ Component ke andar component (Composition)

```jsx
function App() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
```

👉 React tree banata hai
Parent → Child → Child

---

## 🎁 Props kya hota hai?

Props = **data jo component ko diya jaata hai**

```jsx
<Greeting name="Rohit" />
```

React internally karta hai:

```js
Greeting({ name: "Rohit" })
```

---

## 6️⃣ Props access kaise karte hain?

```jsx
function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}
```

Ya better:

```jsx
function Greeting({ name }) {
  return <h1>Hello {name}</h1>;
}
```

---

## 7️⃣ Props ke types

* String
* Number
* Boolean
* Array
* Object
* Function

Sab allowed 👍

---

## 8️⃣ Props read-only hote hain

❌ Galat:

```jsx
name = "Other";
```

👉 Props change nahi kar sakte
Change karna hai → **state use hota hai** (next lecture)

---

## 9️⃣ Default props

Agar value nahi mili:

```jsx
function Greeting({ name = "Guest" }) {
  return <h1>Hello {name}</h1>;
}
```

---

## 🔟 children prop (bahut important)

```jsx
<Card>
  <h2>Title</h2>
  <p>Text</p>
</Card>
```

👉 Ye sab `children` me aata hai

---

## 1️⃣1️⃣ Component kab banana chahiye?

Jab:

* Code repeat ho
* UI complex ho
* Logical parts alag ho

---

## 🧠 One-line me Lecture 02

> JSX = React.createElement ka shortcut
> Component = function returning JSX
> Props = component ko data dena

---

## ✅ FINAL SUMMARY

* JSX HTML nahi, JS hai
* Babel JSX ko JS banata hai
* JSX me ek root element
* `{}` me sirf expressions
* Component capital letter se
* Props = read-only data
* children = tag ke beech ka content

---

Agar chaho to next:

* 🔹 **JSX vs HTML table**
* 🔹 **Props vs State**
* 🔹 **Interview questions**
* 🔹 **Mini practice examples**

bhi karwa deta hoon 😊
