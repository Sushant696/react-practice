
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
// import { ProductList } from './listingProducts/listing'
import NewHttpRequest from './httpRequests/newRequest'
// import { Login } from './Ant_design/login'




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Login/> */}
    {/* <ProductList/> */}
    <NewHttpRequest/>
  </React.StrictMode>,
)
  