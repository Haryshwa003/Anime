import React, { Component } from 'react';
import './login.css';
import Carousel from 'react-bootstrap/Carousel';
import logo1 from '../login/120429.jpg'
import logo2 from '../login/2725441.jpg'
import logo3 from '../login/312635.jpg'
import logo4 from '../login/319121.jpg'
import logo5 from '../login/7779337.jpg'
import icon1 from '../login/google.svg'
import icon2 from '../login/instagram.svg'
import icon3 from '../login/facebook.svg'
import icon4 from '../login/twitter.svg'
import title from '../login/ANIME.svg'
import { Link } from 'react-router-dom';

export class Login extends Component {
  handleButtonClick() {
    console.log('Button clicked!');
    // Add any additional code you want to run when the button is clicked
  }
  
  render() {
    const loginStyle = {
      backgroundColor: ' black',
      width: '100%',
      height: '100vh',
      color: 'white',
      position: 'fixed',
      left: '0px',
    };
    const carouselStyle = {
       height:'90vh',
       animation: 'mymove 9s infinite',
       opacity: '1'
      };
      const textbox={
        backgroundColor: 'rgb(255 45 66 / 78%)',
    borderColor: '#000000',
    color: 'white'
      }
const a={
  color:'#ff3131',
  fontFamily: 'Consolas',
  fontSize: '20px'
}
// const button={
//   backgroundColor: 'darkred',
//   borderColor: 'darkred'
// }
const signinlink={
  color:'white',
  textDecoration: 'none'
}
const checkboxStyle = {
 
  borderColor: '#f50000', 
};
const titlefont={
  width:'150px',
  heigth:'50px'
}

 
    return (
      <div className="login" style={loginStyle}>
       
        <div className="outline" >
        <div className="carousel" >
        <Carousel interval={5000} pause={false} controls={false} touch={false} indicators={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={logo1}
              alt="First slide"
              style={carouselStyle}
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={logo2}
              alt="Second slide"
              style={carouselStyle}
            />
        
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={logo3}
              alt="Third slide"
              style={carouselStyle}
            />
 
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={logo4}
              alt="Forth slide"
              style={carouselStyle}
            />
           
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={logo5}
              alt="Fifth slide"
              style={carouselStyle}
            />
           
          </Carousel.Item>
         
        </Carousel>
        </div>
        </div>
        <form className="form">
 
 <div class="form-outline mb-4">
 <div class="text-center" >
 <img src={title} style={titlefont}/>
  </div>
  <br></br>
   <input type="email" id="form2Example1" class="form-control"  style={textbox} />
   <label class="form-label" for="form2Example1" style={a}>User Name</label>
 </div>


 <div class="form-outline mb-4">
   <input type="password" id="form2Example2" class="form-control" style={textbox}/>
   <label class="form-label" for="form2Example2" style={a}>Password</label>
 </div>


 <div class="row mb-4">
   <div class="col d-flex justify-content-center">
   <div class="text-center">
     <div class="form-check">
     <input
  className="form-check-input"
  type="checkbox"
  value=""
  id="form2Example31"
  style={checkboxStyle}
/>

       <label class="form-check-label" for="form2Example31" style={a}> Remember me </label>
       </div>
     </div>
   </div>

  
 </div>

 <div class="text-center">
 <script>

</script>
 <button type="button" class=" btn btn-danger btn-block mb-4 "  onClick={this.handleButtonClick} >
  <Link to="/Home" style={signinlink}>Sign in</Link></button>
 </div>

 <div class="text-center">
   
   <p style={a}>or sign up with:</p>
   <button type="button" class="btn btn-link btn-floating mx-1">
   <img src={icon1}/>
   </button>

   <button type="button" class="btn btn-link btn-floating mx-1">
   <img src={icon2}/>
   </button>

   <button type="button" class="btn btn-link btn-floating mx-1">
   <img src={icon3}/>
   </button>

   <button type="button" class="btn btn-link btn-floating mx-1">
   <img src={icon4}/>
   </button>
 </div>
</form>
      </div>
    );
  }
}
