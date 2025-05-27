import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { CursorProvider } from './context/CursorContext.jsx'
import CustomCursor from './component/CustomCursor.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CursorProvider>
        <App />
        <CustomCursor />
      </CursorProvider>
    </BrowserRouter>
  </StrictMode>,
)
