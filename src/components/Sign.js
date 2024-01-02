import react from "react";
import '../App.css';
import '../main.css';
import { Link } from "react-router-dom";
import { CartData } from "../App";




export default function Sign(){
    return (
        <div className="">

<div className="nav-one">
            <h1><a href="/">cindys glam</a></h1> 
            <h2>...Defining your style</h2> 
            </div>

    {/* <!-- sec1 --> */}
    <div className="s-sec1-con">
        <h3>Did you sign-up via SMS or with an associate in-store?</h3>
        <a href="">complete your profile </a>
    </div>

    {/* <!-- input-form --> */}

    <div className="sign">

        <input className="one" placeholder="SIGN IN "/>

        <input className="two" placeholder="JOIN "/>

        
    </div>

    

    <div className="mb-3"> 
        <input type="text" className="form-control"  placeholder=" *Email address"/>
      </div>
      <div className="mb-3">
        <input type="text" className="form-control"  placeholder=" *Password"/>
      </div>

      <div className="check-box">
          <div className="cb1">
              <h3>keep me signin. </h3>
          </div>
          <div className="cb1">
            <h3 className="udl"> forgot Password ?</h3>
        </div>
      </div>

      <div className="cb3">
        <p>By checking this box you won't have to sign in as often on this device. For your security, we recommend only checking this box on your personal devices.</p>
    </div>

    <button className="btn"> SIGN IN</button>
 
        </div>
        
       
       
    )
}