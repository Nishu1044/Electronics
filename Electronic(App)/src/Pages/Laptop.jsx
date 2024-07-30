import React , {useState} from 'react';
import Navbar from '../Components/Navbar';
import MyApp from '../Components/MyApp';
import Cart from '../Components/Cart';
import { AuthContext } from "../AuthContext/AuthContextProvider"
import { Navigate } from "react-router-dom"
import { useContext } from "react"





const Laptop = () => {
	const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
	const [warning, setWarning] = useState(false);

	const handleClick = (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
		setCart([...cart, item]);
	}

	const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}








    const {isLoggedin}=useContext(AuthContext)

    if(!isLoggedin){
        return <Navigate to="/Login"/>
    }






	

  return (
	<>
		<Navbar size={cart.length} setShow={setShow} />
		{
			show ? <MyApp handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
		}
		{
			warning && alert("Item is already added to your cart")
		}
	</>
  )
}

export default Laptop;