import React from 'react';
import '../css/Product.css'; //imported my custom css with this line 

function Products(props) {
    const listProducts = props.products.map((product) => //using the map function to do something to each item in my array
    	<div className="card">
        <img className="aPic" src= {product.product_img} alt="a pic" />
        <div className="container">
          <h3>{product.product_name}</h3>
          <p className="info">{product.description}</p>
        </div>
      </div>
    );
    return (
    <div>
    {listProducts}
    </div>
);
}

//using the below command to export the component to App.js
export default Products;