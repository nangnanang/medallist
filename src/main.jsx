import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Olympics from './components/Olympics/Olympics.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Olympics/>
  </StrictMode>,
)
