import {React} from "react";
import { Link } from "react-router-dom";
import img from "../img/pic1.jpg"
import Nav from "../components/Nav";
import Body from "../components/Body";
import Sidebar from "../components/Sidebar";
import { CartData } from "../App";
import img1 from "../img/cart.png"

const Home=()=>  {
   
    
    return(
        <div className="Shopview" >
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
           <div className="banner">
           
           <div className="banner-content">
           
           <div className="banner-text">
           <h1>new arrivals</h1>
           <p>jackets and classy tops , sweatshirt for the wet season
             <br/>cool leather jackets for any occasion
             shop for all things glam . 
           </p>
           <Link className="link" to="/Shop">
              <button  className="bannerBtn">Explore</button></Link>
            <button className="bannerBtn-2">Add to Cart</button>



           </div>
           <div className="discount">
                  <p>from</p>
                  <h6>$29</h6>
                  <p>shop now</p>
              </div>
           
            


           </div>
           

               </div> 

               <Body/>
            
        </div>
    )

}

export default Home