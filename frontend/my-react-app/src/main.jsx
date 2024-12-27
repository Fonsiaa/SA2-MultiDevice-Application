import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './story.jsx' // Import the App component

// Create the root element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)