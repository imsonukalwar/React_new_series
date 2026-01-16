import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import App from './App.jsx'
import List from './list.jsx'
import Food from './food.jsx'
import Clock from './clock.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <List/> */}
    {/* <Food/> */}
    <Clock/>
  </StrictMode>
)
