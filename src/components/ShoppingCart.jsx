import React from 'react';

const ShoppingCart = ({ cartItems, price }) => {

  return (
    <div className='bottom-1/2 fixed right-2.5 p-5 bg-gray-900 rounded-3xl text-cyan-100'>
      <h2 className='bg-slate-300 text-cyan-800 mx-auto text-center 
      w-40 mb-2 py-1 rounded-lg'>Shopping Cart</h2>
      <ul>
        {cartItems.map(({id, name, price}) => (
          <li key={id}>
            {name} - ${price} 
          </li>
        ))}
      </ul>
      <p>Total: ${price}</p>
      <button className='text-slate-300 uppercase bg-cyan-800 p-2 
      rounded-xl hover:text-cyan-800 hover:bg-slate-300 duration-300 transition font-bold mt-2'>Checkout</button>
    </div>
  )
};

export default ShoppingCart;
