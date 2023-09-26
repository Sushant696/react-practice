
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { ProductList } from './listingProducts/listing'
// import { Login } from './Ant_design/login'




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Login/> */}
    <ProductList/>
  </React.StrictMode>,
)
  