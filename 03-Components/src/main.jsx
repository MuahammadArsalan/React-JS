import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Components/Navbar.jsx'
import Card from './Components/Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    
    </StrictMode>,
)
