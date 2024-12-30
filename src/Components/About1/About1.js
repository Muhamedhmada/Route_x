import './About1.css'
import img from '../../Assets/Images/About1Image.png'

import img2 from '../../Assets/Images/AboutImage2.png'
import img3 from '../../Assets/Images/AboutImage1.png'
import imgLogo from '../../Assets/Images/AboutImageLogo.png'
import { ArrowRight , Call, CheckRight } from '../../Assets/SVG\'s/SVG\'s';
import browser from '../../Assets/Images/about1RadioImage.png'
import camp from '../../Assets/Images/about1CampImage.png'
function About1(){
  return (
    <div className='about1-container'>
      <div className='one'>
        <div className="left">
          <div className="image">
            <img src={img3} alt="" />
          </div>
          <div className="image">
            <img src={imgLogo} alt="" />
          </div>
        </div>
        <div className="right">
          <div>
              <h1>25</h1>
            <h4>
              Years Of experience
            </h4>
          </div>
            <img src={img2} alt="" />
        </div>
      </div>
      <div className='two'>
        <div className="header">
        <h6>
          <img src={img} alt='' />
          Why Choose Us
        </h6>
        <h1>
          Where Wanderlust Meets <span> Dream Destinations</span>
        </h1>
        </div>
        <p>
          Et purus duis sollicitudin dignissim habitant. Egestas nulla quis
          venenatis cras sed eu massa Et purus duis sollicitudin dignissim
          habitant. Egestas nulla quis venenatis cras sed eu massa Et purus duis
          sollicitudin dignissim habitant. Egestas nulla
        </p>
        <div className="cards">
          <div className="card">
            <h3>
              <div className="icon">
                <img src={browser} alt="" />
              </div>
              Passport Plus
            </h3>
            <ul>
              <li> <CheckRight width="20px" color="#83CD20"/> Beyond Border Immigration</li>
              <li><CheckRight width="20px" color="#83CD20"/> Worldwide Visa Assistance</li>
            </ul>
          </div>
          <div className="card">
            <h3>
              <div className="icon">
                <img src={camp} alt="" />
              </div>
              Global Entry
            </h3>
            <ul>
              <li> <CheckRight width="20px" color="#83CD20"/> GlobeTrot Visa Services</li>
              <li><CheckRight width="20px" color="#83CD20"/> Infinity Visa Solutions</li>
            </ul>
          </div>
        </div>
        <div className="btns">
          <button>
            read more
            <ArrowRight color="#034833" width="20px"/>
          </button>
          <button>
            <Call width="20px" color="white"/>
          </button>
          <button>
            <p>Need help?</p>
            <h4>(808) 555-0111</h4>
          </button>
        </div>
      </div>
    </div>
  );
}
export default About1