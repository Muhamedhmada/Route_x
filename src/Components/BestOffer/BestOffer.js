import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import leftImage from '../../Assets/Images/bestOfferLeftImage.png';
import planet from '../../Assets/Images/planet.png';
import './BestOffer.css';
import { ArrowRight } from '../../Assets/SVG\'s/SVG\'s';
import CountUp from 'react-countup';

function BestOffer() {
  const [isInView, setIsInView] = useState(false); // To track when numbers are in view

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the AOS animation
      once: false, // Animation happens only once
    });
  }, []);

  return (
    <div className="bestOffer-container">
      <div className="leftImage">
        <img src={leftImage} alt="" />
      </div>
      <div>
        <div>
          <div className="info">
            <div className="icon">
              <img src={planet} alt="" />
            </div>
            <h3>Get our best offers quickly</h3>
            <p>Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy</p>
            <button>
              Contact Us
              <ArrowRight width="20px" color="#034833" />
            </button>
          </div>
          <div className="image">
            <img src={leftImage} alt="" />
          </div>
        </div>

        {/* Numbers Section */}
        <div
          className="numbers"
          data-aos="fade-up" // AOS animation
          onAnimationStart={() => setIsInView(true)} // Trigger animation when AOS starts
        >
          <div>
            <h1>
              <CountUp
                start={isInView ? 0 : null} // Start only when in view
                end={10}
                duration={10}
                suffix="k+"
              />
            </h1>
            <p>Complete project</p>
          </div>
          <div>
            <h1>
              <CountUp
                start={isInView ? 0 : null} // Start only when in view
                end={20}
                duration={10}
                suffix="k+"
              />
            </h1>
            <p>Team member</p>
          </div>
          <div>
            <h1>
              <CountUp
                start={isInView ? 0 : null} // Start only when in view
                end={5}
                duration={10}
                suffix="k+"
              />
            </h1>
            <p>Winning award</p>
          </div>
          <div>
            <h1>
              <CountUp
                start={isInView ? 0 : null} // Start only when in view
                end={100}
                duration={10}
                suffix="k+"
              />
            </h1>
            <p>Happy clients</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestOffer;
