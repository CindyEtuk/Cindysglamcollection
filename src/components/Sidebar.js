import React from 'react';import '../App.css';
import '../main.css';
import { slide as Menu } from 'react-burger-menu';
import img from "../img/menu.png"
import { Link } from 'react-router-dom';

const CustomBurgerIcon = () => <img src={img} alt=" " />;

const Sidebar = () => {
  return (
    <div className="menu-icon" >

    
    <Menu customBurgerIcon={ <CustomBurgerIcon /> }>
    <Link className="link" to="/Home"> Home</Link>
               <Link className="link" to="/Shop" > Shop</Link>   
               <Link className="link" to="/Women">Women</Link>
               <Link className="link" to="/">Men</Link>
               <Link className="link" to="/">Kid</Link>
               <Link className="link" to="/">Jewelry</Link>
               <Link className="link" to="/">Sales</Link>
               <Link className="link" to="/Home">Blogs</Link>
               
    </Menu>
    </div>
  );
};

export default Sidebar;