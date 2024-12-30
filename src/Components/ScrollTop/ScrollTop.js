import React, { useState, useEffect } from "react";
import { Rocket } from "../../Assets/SVG's/SVG's";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
      <div className="upIcon"
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "50px",
        right: "50px",
        color: "white",
        border: "none",
        borderRadius: "50%",
        padding: "10px",
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
      
      
      
      >
      <Rocket width="50px" color="#83CD20"/>
      </div>

      )}
    </div>
  );
};

export default ScrollToTop;
