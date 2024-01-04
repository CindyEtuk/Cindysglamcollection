import {react, useState} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Datas , Ldata } from "../App";
import img from "../img/img3.jpg";
import Sidebar from "../components/Sidebar";
import { CartData } from "../App";
import img1 from "../img/cart.png"
import Footer from "../components/Footer";

import Nav from "../components/Nav";


const ProductView=(props)=> { 
    const {id}=useParams();
    const [size, setSize]=useState("")

    const setItemsBtn=(data)=>{
        props.setItem(data)
    }
    return(

        
        <div className="Add2Cart">

            
            <Nav/>
            <div className="topnav-container">
            <div className="topnav">
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
               <Sidebar/>

</div>
</div>
            <br/>
            <Datas.Consumer>
            
            {(allproducts)=>{
                    return <div className="add2cart-view">
                        <div className="img-card">
                        <img src={img} alt="" className="Img3" />
                        </div>
                     
                     <div className="view-text">
                     <h2> sophiticated designers<br></br> luxury shoe with 100% leather </h2>
                  
                     <h1>Item name: {allproducts[id].product_name}</h1>
                    <h2>Quantity:{allproducts[id].quantity}</h2>
                   <h2> Price: $ {allproducts[id].price}</h2>
                   <select className="Btn" onChange={(event)=>{
                       setSize(event.target.value)
                   }}>
                       <option  value="">select sizes</option>
                       {
                           allproducts[id].sizes!=null?
                         allproducts[id].sizes.map((size,i)=>{
                              return<option value={size}>{size}</option>

                           }) :
                           <div></div>
                       }
                   </select>
                   <br/>
                   <button className="Btn" onClick={()=>{

                       allproducts[id].size=size

                       setItemsBtn(allproducts[id]) 
                   }}>Add to cart</button>

                     </div>
                  


                    </div>
                }}
            </Datas.Consumer>
           
         <Footer/>   
           
   </div>

  
    )

}

export default ProductView