import React from 'react';
// import './style/cards.css';


const Cards = ({item, handleClick}) => {
    const { name, price, image, company, category, description} = item;
  return (
    <div className='Allcards'>
    <div className="cards">
            <img src={image} alt="image" />
            <h3>Name : {name}</h3>
            <h2>Company: {company}</h2>
            <h2>Price -Rs {price}.00</h2>
            <p>Description : {description}</p>
            <h3>Category : {category}</h3>
            <button onClick={()=>handleClick(item)} >Add to Cart</button>
        
        </div>
    </div>
  )
}


// <img className="productimage" src={ElectroPro.image} alt={ElectroPro.name} />






export default Cards