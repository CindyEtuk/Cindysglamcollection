import { react, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../components/products";
import img from "../img/img3.jpg"
import Sidebar from "../components/Sidebar";
import { CartData } from "../App";
import img1 from "../img/cart.png";
import { Link } from "react-router-dom";


import Nav from "../components/Nav";

const Cart = (props) => {
    const { id } = useParams();
    return (
        <div className="Add2Cart">
            <Nav />
            <div className="topnav-container">
    
            <div className="topnav">

            <Sidebar/>
            
  <a href="index.html" >
  <div className="nav-one">
               <h1><a href="/home">cindys glam</a></h1> 
               <h2>...Defining your style</h2> 
               </div> 
     </a>

     

<div className="nav-4">
               <Link className="link" to="/Cart">
                    
                    <CartData.Consumer>
                        {(cartData)=> {
                            return<div >
                         <img src={img1} alt=""  />  ({cartData.length})</div>}}
               </CartData.Consumer>
               </Link>
               </div>
            
               
               

</div>
</div>
            <div className="cart-row">
                <div className="col">
                    <h1>Shoping cart</h1>
                    <hr/>
                    <h4><u>TOTAL PRICE :</u></h4>

                    <CartData.Consumer>
                          {
                              (allCartData)=>{
                        
                                let totalPrice=0
                                let productQuantity=0

                                allCartData.forEach(item => {

                                    totalPrice=totalPrice + parseFloat(item.price)
                                   
                                    if(item.quantity==""){
                                        productQuantity=0
                                       
                                     }else{
                                         
                                    productQuantity=productQuantity+parseInt(item.quantity)

                                     }

                                });
                                return<div>
                                    <h1> price:N {totalPrice}</h1>
                                    <h1>Quantity: {productQuantity} Items</h1>
                                </div>

                              }
                          }

                        </CartData.Consumer>



                </div>
                
                <div className="col">
                    <div className="cartview">
                        <CartData.Consumer>
                          {
                              (allCartData)=>{
                                  return allCartData.map((aProduct,index)=>{
                                      return <div className="view">
                                      <img src={aProduct.img} alt="" />
                                      <div className="descp">
                                <h4>{aProduct.product_name}</h4>
                                <hr />
                                <p>N {aProduct.price}</p>
                                <p>Size: {aProduct.size}</p>
                                </div>
                                <input type="number" placeholder="value"
                                 value={aProduct.quantity} 
                                 onChange={(event)=>{
                                   
                                     props.updateQuantity(index, aProduct)
                                     aProduct.quantity=event.target.value

                                 }} />
                              <div className="closeBtn" onClick={()=>{
                                  props.deleteItem(index)
                              }}>X</div>
                               </div>
                                  })
                              }
                          }

                        </CartData.Consumer>



                       
                    </div>
                </div>
            </div>






        </div>
    )

}

export default Cart