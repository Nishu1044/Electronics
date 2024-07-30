import React,{useState} from 'react'
import { useEffect } from 'react'


const Cart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0)

    const handlePrice = ()=>{
        let ans =0
        cart.map((item)=>(
            ans+= item.amount * item.price
        ))
        setPrice(ans)
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id)
        setCart(arr)
        
    }

    useEffect(()=>{
        handlePrice()
    })

  return (
    <article>
        {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                    <img src={item.image} alt="image" />
                    <h3>Name : {item.name}</h3>
                    <h2>Company: {item.company}</h2>
                    <h2>Price -Rs {item.price}.00</h2>
                    <p>Description : {item.description}</p>
                    <h3>Category : {item.category}</h3>
            <button onClick={function(){
                return alert(`Order Confirmed Successfully And Paid Rs ${price}.00 Only-`)
            }}>Buy</button>
            
                    </div>
                    <div>
                        <button onClick={()=>handleChange(item, +1)}> + </button>
                        <button>{item.amount}</button>
                        <button onClick={()=>handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        
                        <button onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                </div>
            ))}
        <div className='total'>
        
            <h1 class="owntotal">Total Price of your Cart-Rs.{price}.00</h1>
            
        </div>
    </article>
  )
}

export default Cart