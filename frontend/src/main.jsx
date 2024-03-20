import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import mainProvider from './context/mainProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
    <mainProvider>
    <App />
    </mainProvider>
    </BrowserRouter>
  </React.StrictMode>,

)
