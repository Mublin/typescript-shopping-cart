import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { CartProvider, initialState } from './context/CartContext'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
     <CartProvider cart={initialState.cart} userInfo={initialState.userInfo}>
    <App />
    </CartProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
