import { react, useState } from "react";
import { useParams } from "react-router-dom";
import { CartData } from "../App";
import Products from "../components/products";
import img from "../img/img3.jpg"


import Nav from "../components/Nav";

const Cart = (props) => {
    const { id } = useParams();
    return (
        <div className="Add2Cart">
            <Nav />
            <br />
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