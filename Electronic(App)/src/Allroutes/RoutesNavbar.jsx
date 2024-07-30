
import {Link} from "react-router-dom"
import Logo from "../Pages/Logo"


function RoutesNavbar(){
  return(
    <div class="Navbar">
        <Link to="/Logo"><Logo/></Link>
        <Link to="/">Home</Link>
        <Link to="/laptop">Laptop</Link>
        <Link to="/Products">Electronic Products</Link>
        <Link to="/phone">Phone</Link>
        <Link to="/aboutt">About</Link>
        <Link to="/Login">Login</Link>
    </div>
  ) 
}

  export default RoutesNavbar;