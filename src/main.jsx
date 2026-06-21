import { StrictMode } from 'react'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const reactElement = createElement(
  "h1",
  null,
  "Hello Guys"
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {reactElement}
    <App />
   
  </StrictMode>
)