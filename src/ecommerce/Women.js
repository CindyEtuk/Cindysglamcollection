import {react, useState} from "react";
import Womenproducts from "../components/Womenproducts";
import { Ldata } from "../App";
import Sidebar from "../components/Sidebar";
import { CartData } from "../App";
import img1 from "../img/cart.png";
import { Link } from "react-router-dom";


import Nav from "../components/Nav";

const Women=()=> {
    
    return(
        <div className="Shopview">
            
            <Nav/>
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
               <br/>
               
               

</div>
</div>
            <br/>
            
           

         <Ldata.Consumer>

           {(womensdata)=>{
               return <Womenproducts womensdata={womensdata}/>
           }}

                
         </Ldata.Consumer>            
            
           


        </div>
    )

}

export default Women