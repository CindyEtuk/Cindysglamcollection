import react from "react";
import '../App.css';
import '../main.css';
import { Link } from "react-router-dom";
import { CartData } from "../App";
import kids from "../img/glam-kids/4.jpg"
import img3 from "../img/img3.jpg"
import img4 from "../img/img4.jpg"
import jean1 from "../img/glam jean/1.jpg"
import men from "../img/glam-men/1.jpg"
import jewelry from "../img/jewelry/1.jpg"
import jewelry2 from "../img/jewelry/2.jpg"
import pic3 from "../img/pic3.jpg"
import pic5 from "../img/pic5.jpg"
import pic2 from "../img/pic2.jpg"
import login from "../img/cindysglam-logo.jpg"
import SlickDemo from "../SlickDemo";
 



export default function Body(){
    return (
        <div className="">
 {/* section-one */}
<div className="sec1-container">
    <h1>explore the best shopping online experience </h1>
    <div className="sec1-grid">
        <div  className="sec1">
        <img src={kids} alt=""  />
            <h1>kids section</h1>
        </div>
        <div  className="sec1">
        <img src={img3} alt=""  />
            <h1>women collection</h1>
        </div>
        <div  className="sec1">
        <img src={men} alt=""  />
            <h1>men collection</h1>
        </div>
        <div  className="sec1">
        <img src={jewelry} alt=""  />
            <h1>custum jewelry</h1>
        </div>
    </div>
    
</div>


<div className="sec1b">
    <SlickDemo/>
    <h1>make it bold</h1>
    <h3>create your ultimate stylish situation</h3>
    <button className="btn-1" >Shop Now</button>

</div>

{/* section-two */}



<div className="sec2-container">
    {/* <h1>make it bold</h1>
    <h3>create your ultimate stylish situation</h3>
    <button>Shop Now</button> */}

    <div className="sec2-grid">
        <div className="sec2">
        <img src={jean1} alt=""  />
            <h3>demin & casual</h3>
            <p> New and trending millenuiens looks favorites are here for brunch!</p>
           <a href="">shop now</a> 
            </div>

            <div className="sec2">
            <img src={jewelry2} alt=""  />
                <h3>A necklace Primer</h3>
                <p> Instantly update your jewelry set with stylish, colorful neck-piece </p>
                <a href="">learn more</a>
                </div>

                <div className="sec2">
                <img src={img4} alt=""  />
                    <h3>gowns heels sets</h3>
                    <p>These stylish, sturdy gowns handle any lifestyle and go right into the occassion</p>
                    <a href="">shop now</a>
                    </div>
    </div>
</div>



{/* <!-- <section-three --> */}
<div className="sec3-container">
    <div className="sec3-grid">
        <div className="sec3">
        <img src={pic2} alt=""  />
        <h1> Disigners Collection Handbags</h1>
            <h3> Discover Various Top-Designed handbags , Cruch Purses & More</h3>  
            <button> Shop Now</button>
        </div>

        <div className="sec3">
        <img src={pic5} alt=""  />
        <h1> Happy Shopping At Home</h1>
           <h3>Throw in your Shopping card with Unique Shoes and Essentials Looks for your Closet </h3> 
             <button> Shop Now</button>
         </div>
    </div>
</div>


{/* <!-- /* section-six */}
<div className="sec6-container">
    <div className="sec6">
        <h3>need help? 
            <span>  <a href=""> call us </a> </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
           
           
            <span> <a href=""> email us </a> </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
              </svg>
           
     
          
         </h3>
       
    </div>
</div>

{/* <!-- section -seven --> */}

<div className="sec7-container">
    <div className="sec7-grid">
        <div className="sec7">
            <h2>about market</h2>
            <div className="sec5-blk">

                <a href="">who we are </a>
              <a href="">careers </a>
            <a href="">site maps </a>
      <a href="">safety, security, privacy </a>
            </div>
        </div>

        <div className="sec7">
            <h2>customer service</h2>
            <div className="sec5-blk">

           <a href="">online payment </a>
           <a href=""> request </a>
           <h2>contact us</h2>
         <a href=""> +2349072047771 </a>
             <a href="">email us </a>
            </div>
        </div>

        <div className="sec7">
        

             <h2>ways to save</h2>
                <a href="">world market reward </a>
              <a href="">designers discount </a>
            <a href="">world market coupons </a>
      <a href="">every day hero discount </a>
             
            <div className="sec5-blk">
                <p>join world market reward</p>
                <p>exclusive coupons & perks</p>
                
                
           
            </div>
        </div>

    </div>
</div>


{/* <!-- section -eight --> */}
<div className="sec8-container">
    <div className="sec8-grid">
        <div className="sec8">
        <img src={login} alt=""  />
        </div>

        <div className="sec8">
            <h3>follow us </h3>
            <div className="sec8-blk">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-pinterest" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"/>
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
            </div>
        </div>


        <div className="sec8">
            <button> Join Now </button>
        </div>
    </div>
</div>
        </div>
        
       
       
    )
}