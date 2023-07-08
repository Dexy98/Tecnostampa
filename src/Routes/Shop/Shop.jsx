import React from 'react'
import './Shop.css'



 
const handleAddToCart = (productId) => {
  // Logica per aggiungere il prodotto al carrello
  console.log(`Aggiungi al carrello: ${productId}`);
};



const Servizi = () => {
  const products = [
    {
      id: 1,
      name: 'Prodotto 1',
      price: 9.99,
      image: 'path/to/image1.jpg'
    },
    {
      id: 2,
      name: 'Prodotto 2',
      price: 14.99,
      image: 'path/to/image2.jpg'
    },
    // Aggiungi altri prodotti qui...
  ];
  return (
    <div className="shop-container">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Prezzo: ${product.price}</p>
          <button onClick={() => handleAddToCart(product.id)}>Aggiungi al carrello</button>
        </div>
      ))}
    </div>
  )
}

export default Servizi
