import react from "react";
import '../App.css';
import '../main.css';
import { Link } from "react-router-dom";
import { CartData } from "../App";
import img from "../img/cart.jpg"
import login from "../img/login.jpg"
 



export default function Nav(props){
    
    return (

        <div className="navigation">

    <div className="Nav-bar">
            
            <div className="nav-one-container">
   
            <div className="nav-one">
               <h1><a href="#">cindys glam</a></h1> 
               <h2>...Defining your style</h2> 
               </div>
   
               <div className="box-con">
               <div className="box">
                           <svg width="22" height="22" class="_35lll _3FpBp _24pSQ" 
                           viewBox="0 0 32 32" version="1.1" aria-hidden="false">
                           <path d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5
                            10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path></svg>
                           <input type="text" placeholder=" search on cindys glam collection"  name=""  />
                           
   
                            <svg width="22" height="22" class="_1wN75 _3FpBp _24pSQ" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M6.7 25.3H12V28H6.7C5.2 28 4 26.8 4 25.3V20h2.7v5.3zm0-18.6H12V4H6.7C5.2 4 4 5.2 4 6.7V12h2.7V6.7zM25.3 4H20v2.7h5.3V12H28V6.7C28 5.2 26.8 4 25.3 4zm0 21.3H20V28h5.3c1.5 0 2.7-1.2 2.7-2.7V20h-2.7v5.3zm-4-9.3c0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3zm-2.6 0c0-1.5-1.2-2.7-2.7-2.7s-2.7 1.2-2.7 2.7 1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7z"></path></svg>
                       </div>
               </div>
   
               <div className="nav">
             
               <Link className="link" to="/Sign">Sign in or Create Account<img src={login} alt=""  /></Link>
              </div>
              <div className="nav-4">
               <Link className="link" to="/Cart">
                    
                    <CartData.Consumer>
                        {(cartData)=> {
                            return<div >
                               Shopping Cart /Wishlist <img src={img} alt=""  />  ({cartData.length})</div>}}
               </CartData.Consumer>
               </Link>
               </div>
                
            </div>
   
   
               <div className="nav-two">
               <Link className="link" to="/Home"> Home</Link>
               <Link className="link" to="/Shop" > Shop</Link>   
               <Link className="link" to="/Women">Women collection</Link>
               <Link className="link" to="/">Men collection</Link>
               <Link className="link" to="/">Kiddies Collection</Link>
               <Link className="link" to="/">Jewelry collection</Link>
               <Link className="link" to="/">Sales</Link>
               <Link className="link" to="/Home">Blogs</Link>
           </div>
   
   
   
   
           </div> 

    
        </div>
        
       
       
       
    )
}