import React, { useState } from 'react';

const PriceRangeFilter = ({ setPriceFilter }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleApplyFilter = () => {
    setPriceFilter( minPrice, maxPrice );
  };

  return (
    <div className='grid grid-cols-5'>
      <input className='mr-2 px-2 rounded-2xl' type="number" placeholder="Min price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
      <input className='px-2 rounded-2xl' type="number" placeholder="Max price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      <button className='text-slate-300 uppercase bg-cyan-800 p-2 
      rounded-xl hover:text-cyan-800 hover:bg-slate-300 duration-300 transition font-bold w-20 ml-2' onClick={handleApplyFilter}>Apply</button>
    </div>
  );
};

export default PriceRangeFilter;
