import React from 'react';

const Item = ({ name, description, price, addItem }) => {
  return (
    <div className='flex flex-col justify-center items-start p-4 m-2 w-60 border rounded-3xl text-cyan-800 bg-slate-300 hover:bg-slate-100 hover:text-slate-800 duration-300 transition'>
      <h3 className='mb-2 font-extrabold text-3xl'>{name}</h3>
      <p>{description}</p>
      <p className='my-2  font-bold text-xl'>${price}</p>
      <button onClick={addItem} className='text-slate-300 uppercase bg-cyan-800 p-2 rounded-xl hover:text-cyan-800 hover:bg-slate-300 duration-300 transition font-bold'>add to cart</button>
    </div>
  );
};

export default Item;
