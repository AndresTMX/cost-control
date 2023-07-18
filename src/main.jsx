import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Import our custom CSS
import '../src/scss/styles.scss'
//context
import { TransacctionsProvider } from './Context/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TransacctionsProvider>
      <App />
    </TransacctionsProvider>
  </React.StrictMode>,
)
