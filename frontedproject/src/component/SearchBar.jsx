import React, { useState } from 'react';


function SearchBar({ products, setFilteredProducts }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if(!searchQuery) {
        setFilteredProducts([]);
        return;
    }
    let filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        product.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.type.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name, color, type"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
