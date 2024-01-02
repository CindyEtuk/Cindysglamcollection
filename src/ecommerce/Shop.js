import {react, useState} from "react";
import Products from "../components/products";
import { Datas } from "../App";
import Footer from "../components/Footer";


import Nav from "../components/Nav";

const Shop=()=> {
    
    return(
        <div className="Shopview">
            
            <Nav/>
            <br/>
           

         <Datas.Consumer>

           {(productsdata)=>{
               return <Products productsdata={productsdata}/>
           }}

                
         </Datas.Consumer>            
            
           
           <Footer/>

        </div>
    )

}

export default Shop