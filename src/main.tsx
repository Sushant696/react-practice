
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import "../tailwind.css"
import TempControl from './new_concepts/temp_control'
// import { ProductList } from './listingProducts/listing'
// import NewHttpRequest from './httpRequests/newRequest'
// import Navbar from './pages/responsiveNavbar'
// import { Login } from './Ant_design/login'




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Login/> */}
    {/* <ProductList/> */}
    {/* <Navbar/> */}
    {/* <NewHttpRequest/> */}
    <TempControl/>

  </React.StrictMode>,
)
  