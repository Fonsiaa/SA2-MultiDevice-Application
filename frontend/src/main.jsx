import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './app.jsx'
import "./style/font.scss"

// Create the root element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)