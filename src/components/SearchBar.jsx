import React, { useState } from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return <input className='mr-2 mb-2 px-2 rounded-2xl' type="text" placeholder="Search items..." onChange={handleChange} />;
};

export default SearchBar;
