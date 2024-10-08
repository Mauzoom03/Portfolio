import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './css/App.css'
import './css/index.css'
import { BrowserRouter } from 'react-router-dom'
import './components/utils/i18n'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </React.StrictMode>,
)
