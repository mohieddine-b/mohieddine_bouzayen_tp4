import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import EX from './EX2.jsx'
import EX1 from './EX1.jsx'
import EX4 from './EX4.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <EX />
    <EX1 />
    <EX4 />
  </StrictMode>,
)
