import React, { useState } from 'react';

function Filtered({ products, setFilteredProducts }) {
  const [genderFilter, setGenderFilter] = useState({Male: false, Women: false});


  const handleFilter = (e) => {
    setGenderFilter({ ...genderFilter, [e.target.value]: e.target.checked });
   
    let filteredProducts = products;
    if(genderFilter.Men === false && genderFilter.Women === false) {
        setFilteredProducts(products);
        return;
    }
    if(genderFilter.Men === true) {
        filteredProducts = filteredProducts.filter(product => product.gender === 'Men');
    }
    if(genderFilter.Women === true) {
        filteredProducts = filteredProducts.filter(product => product.gender === 'Women');
    }


    setFilteredProducts(filteredProducts);
 
  };
  
  return (
    <div>
      <h3>Filter by Gender</h3>
      <div>
        <input type="checkbox"  value="Men" onClick={handleFilter}/>
        <label >Men</label>
      </div>
      <div>
        <input type="checkbox" value="Women" onClick={handleFilter}/>
        <label>Women</label>
      </div>
    </div>
  );
}

export default Filtered;