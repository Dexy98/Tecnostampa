import React from 'react';
import './Shop.css';



 
const handleAddToCart = (itemId) => {
  // Logica per aggiungere il prodotto al carrello
  console.log(`Aggiungi al carrello: ${itemId}`);
};



const Shop = (props) => {
  return (
    <div className="shop-container">
      {props.data.map(item => (
        <div key={item.id} className="card">
          <img src={item.image} alt={item.name} />
          <h3 className=' text-white text-lg shadow '>{item.name}</h3>
          <p className=' text-white text-sm '>Prezzo: € {item.price}</p>
          <button className=' bottom-10 p-4 bg-[#e3007c] border-spacing-4 border-red rounded-[18px] shadow' onClick={() => handleAddToCart(item.id)}>Aggiungi al carrello</button>
        </div>
      ))}
    </div>
  )
}

export default Shop
