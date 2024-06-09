import React from 'react';
import './Slider.css'; // Import the CSS file

const Slider = () => {
  return (
    <div className="container">
      <div id="content-slider">
        <div id="slider">
          <div id="mask">
            <ul>
              <li id="first" className="firstanimation">
                <a href="#"><img className="img-fluid" src="http://placehold.it/680x320" alt="Cougar" /></a>
               
                
              </li>
              <li id="second" className="secondanimation">
                <a href="#"><img className="img-fluid" src="https://richlanddubai.com/wp-content/uploads/2017/07/cover-2.jpg" alt="Lions" /></a>
                
              </li>
              <li id="third" className="thirdanimation">
                <a href="#"><img className="img-fluid" src="http://placehold.it/680x320" alt="Snowalker" /></a>
                
              </li>
              <li id="fourth" className="fourthanimation">
                <a href="#"><img className="img-fluid" src="http://placehold.it/680x320" alt="Howling" /></a>
                
              </li>
              <li id="fifth" className="fifthanimation">
                <a href="#"><img className="img-fluid" src="http://placehold.it/680x320" alt="Sunbathing" /></a>
                
              </li>
            </ul>
          </div>
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
