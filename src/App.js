import logo from './logo.svg';
import Shop from './ecommerce/Shop';
import Women from './ecommerce/Women';
import Cart from './ecommerce/Cart';
import img3 from "./img/img3.jpg";
import pic from "./img/pic6.jpg"
import React, { createContext, useState, useEffect} from "react";
import {Route, BrowserRouter,Routes} from 'react-router-dom';
import './App.css';
import ProductView from './ecommerce/ProductView';
import Home from './ecommerce/Home';
import Sign from './components/Sign';



const Datas=createContext()
const Ldata=createContext()
const CartData=createContext()


const App=()=> {
  const [cartArray, setCartArray]=useState([])

  const allDatas=[]
  const productsdata=[
    {
    "product_name":"zara-shoe",
    "img": img3,
    "price":"60",
    "description":"shirt for sale",
    "category":"clothing",
    "quantity":1,
    "sizes":[
      "small",
      "medium",
      "large",
      "x-large"
    ]

  },

  {
    "product_name":"zara hand bag",
    "img":img3,
    "price":"60",
    "description":"shirt for sale",
    "category":"clothing",
    "quantity":1,
    "sizes":[
      "small",
      "medium",
      "large",
      "x-large"
    ]
  },

  {
    "product_name":"watches",
    "img":img3,
    "price":"12",
    "description":"shirt for sale",
    "category":"clothing",
    "quantity":1,
    "sizes":[
      "small",
      "medium",
      "large",
      "x-large"
    ]
  },

  {
    "product_name":"laptop",
    "img":img3,
    "price":"56",
    "description":"shirt for sale",
    "category":"clothing",
    "quantity":1,
    "sizes":[
      "small",
      "medium",
      "large",
      "x-large"
    ]
  },

  {
    "product_name":"fenty lip balm",
    "img":img3,
    "price":"24",
    "description":"shirt for sale",
    "category":"clothing",
    "quantity":1,
    "sizes":[
      "small",
      "medium",
      "large",
      "x-large"
    ]
  },

  {
    "product_name":"polo",
    "img":img3,
    "price":"23",
    "description":"shirt for sale",
    "category":"clothing",
    "quantity":1,
    "sizes":[
      "small",
      "medium",
      "large",
      "x-large"
    ]
  }


]
const womensdata=[
  {
  "product_name":"jewelry",
  "img": img3,
  "price":"60",
  "description":"shirt for sale",
  "category":"clothing",
  "quantity":1,
  "sizes":[
    "small",
    "medium",
    "large",
    "x-large"
  ]

},

{
  "product_name":"zara hand bag",
  "img":pic,
  "price":"60",
  "description":"shirt for sale",
  "category":"clothing",
  "quantity":1,
  "sizes":[
    "small",
    "medium",
    "large",
    "x-large"
  ]
},

{
  "product_name":"watches",
  "img":img3,
  "price":"12",
  "description":"shirt for sale",
  "category":"clothing",
  "quantity":1,
  "sizes":[
    "small",
    "medium",
    "large",
    "x-large"
  ]
},

{
  "product_name":"laptop",
  "img":img3,
  "price":"56",
  "description":"shirt for sale",
  "category":"clothing",
  "quantity":1,
  "sizes":[
    "small",
    "medium",
    "large",
    "x-large"
  ]
},

{
  "product_name":"fenty lip balm",
  "img":img3,
  "price":"24",
  "description":"shirt for sale",
  "category":"clothing",
  "quantity":1,
  "sizes":[
    "small",
    "medium",
    "large",
    "x-large"
  ]
},

{
  "product_name":"polo",
  "img":img3,
  "price":"23",
  "description":"shirt for sale",
  "category":"clothing",
  "quantity":1,
  "sizes":[
    "small",
    "medium",
    "large",
    "x-large"
  ]
}


]

const addData=(data)=>{
  setCartArray([...cartArray,data])
}

const deleteCartItem=(index)=>{
  setCartArray(
    cartArray.filter((cart, i)=>i!==index)
  )
  
}

const updateQuantity=(index, newItem)=>{
  setCartArray(cartArray.map((item, i)=>(i===index?newItem:item)))
}

  return (
    <CartData.Provider value={cartArray}> 
    <Datas.Provider value={productsdata}>
    <Ldata.Provider value={womensdata}>
    <BrowserRouter>
    <Routes>

      <Route exact path='/Shop' element={<Shop />}/>
      <Route exact path='/Women' element={<Women />}/>
      <Route exact path='/ProductView/:id'
       element={<ProductView setItem={addData} />}/>
      <Route exact path='/Cart' element={<Cart
       deleteItem={deleteCartItem}
       updateQuantity={updateQuantity}/>}/>
       <Route exact path='/' element={<Home />}/>
       <Route exact path='/home' element={<Home />}/>
       <Route exact path='/Sign' element={<Sign />}/>
      </Routes>
    </BrowserRouter>
    </Ldata.Provider>
    </Datas.Provider>
    </CartData.Provider>
  );
}

export default App;
export {Ldata};
export {Datas};
export {CartData};
