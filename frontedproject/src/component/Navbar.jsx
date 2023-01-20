import React from 'react'
import styles from "./ProductList.module.css";

const Navbar = () => {
  return (
    <div>
        <div className={styles.nav}>
            <div>TeeRexStore</div>
            <div ><img src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg" style={{width:"35px",height:"25px"}} alt="" /></div>
        </div>
    </div>
  )
}

export default Navbar