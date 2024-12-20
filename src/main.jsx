import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './stylesheet/index.css'
import './stylesheet/nav.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
