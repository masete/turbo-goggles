import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  return (
    <>
    <div name='portfolio' className="bg-gradient-to-b from-black to-gray-800 w-full text-white md: h-screen">

      <div>
        <div>
          <p>Portfolio</p>
          <p>Checkout Some of my work right here</p>
        </div>

        <div>

          <div>
            <img src={reactWeather} alt="react weather" />

            <div>
              <button>Demo</button>
              <button>Code</button>
            </div>

          </div>
        </div>

      </div>

    </div>
    </>
  )
}

export default Portfolio