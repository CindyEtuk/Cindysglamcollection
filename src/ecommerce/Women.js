import {react, useState} from "react";
import Womenproducts from "../components/Womenproducts";
import { Ldata } from "../App";


import Nav from "../components/Nav";

const Women=()=> {
    
    return(
        <div className="Shopview">
            
            <Nav/>
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