import React, { useState, useEffect } from 'react';
import Filtered from './Filtered';
import SearchBar from './SearchBar';
import styles from "./ProductList.module.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
        <SearchBar products={products} setFilteredProducts={setFilteredProducts} />
        <div className={styles.mainproduct}>
            <div>
               <Filtered products={products} setFilteredProducts={setFilteredProducts} />
            </div>
            <div className={styles.productcontainer} >
              {filteredProducts.map((product, index) => (
                <div key={index} className="product-card">
                 <h3>{product.name}</h3>
                 <img src={product.imageURL} alt={product.name} style={{width:"20%"}}  />
                 <p>{product.price}</p>
                 <button>Add to Cart</button>
                </div>
              ))}
            </div>
        </div>
    </div>
  );
}

export default ProductList;
