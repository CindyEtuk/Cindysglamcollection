import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick"; 
import React, { Component } from 'react'  

 
import './App.css';  

export class SlickDemo extends Component {  
    render() {  
        var settings = {  
          dots: false,  
          infinite: true,  
          speed: 500,  
          autoplay:true,
          centerMode: false,  
          slidesToShow: 1,  
          slidesToScroll: 1  
          };  
          return (  
            <div>  
            <div class='container' >        
            <div className="row title" >        
                    
            </div>    
            </div>  
            <Slider className="slider-container" {...settings} >  
              <div className="wdt">  
              <img  className="img"   src= {'assets/pic1.jpg'} />  
              </div>  
              <div className="wdt">  
              <img className="img" src= {'assets/pic2.jpg'}/>  
              </div>  
              <div className="wdt">  
              <img  className="img" src= {'assets/pic3.jpg'}/>  
              </div>  
              <div className="wdt">  
              <img  className="img" src= {'assets/pic4.jpg'}/>  
              </div >  
              <div className="wdt">  
              <img  className="img" src= {'assets/pic5.jpg'} />  
              </div>  
              <div className="wdt">  
              <img  className="img" src= {'assets/pic6.jpg'} />  
              </div> 
              <div className="wdt">  
              <img  className="img" src= {'assets/img3.jpg'} />  
              </div> 
              <div className="wdt">  
              <img  className="img" src= {'assets/img4.jpg'} />  
              </div>  
            </Slider>  
            </div>  
          );  
        }  
      }  
  
export default SlickDemo