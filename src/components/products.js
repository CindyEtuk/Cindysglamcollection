import React from "react";
import { Link } from "react-router-dom";

const Products=(props)=>{
    const productsdata=props.productsdata

    const rows = productsdata.map((product, index)=>{
        console.log(product);
        return <div className="ProductView">
            <img src={product.img} alt="" className="Img" />
       <div className="Title">{product.product_name}</div>
       <div className="Price">${product.price}</div>
       <Link className="Btn" to={`/ProductView/${index}`}>view product </Link>

        </div>
        
    })

    return <div className="Products">{rows}</div>
    
}
export default Products