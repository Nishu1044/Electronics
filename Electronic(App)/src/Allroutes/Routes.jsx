import {Routes,Route} from "react-router-dom"
import Laptop from "../Pages/Laptop"
import Home from "../Pages/Home"
import Logo from "../Pages/Logo"
import Phone from "../Pages/Phone"
import Products from "../Pages/Products"
import Login from "../Pages/Login"


function AllRoutes(){

    return (
<div>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Logo" element={<Logo/>}/>
  <Route path="/Products" element={<Products/>}/>
  <Route path="/laptop" element={<Laptop/>}/>
  <Route path="/phone" element={<Phone/>}/>
  <Route path="/Login" element={<Login/>}/>
  </Routes>
</div>
    )
  }
  
  export default AllRoutes;