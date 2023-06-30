
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './index.css'

function Features(props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="home-second-bg-card">
        <div className="d-flex flex-row justify-content-center m-5">
          <div>
            <img className="home-second-bg-card-img mt-4" src="images/tools img.png" alt="" />
          </div>
          <div>
            <h6>Easy To Customise</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aliquam saepe sunt repellat accusantium</p>
          </div>
        </div>
      </div>

      <div className="home-second-bg-card">
        <div className="d-flex flex-row justify-content-center m-5">
          <div>
            <img className="home-second-bg-card-img mt-4" src="images/design-process.png" alt="" />
          </div>
          <div>
            <h6>Easy To Customise</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aliquam saepe sunt repellat accusantium</p>
          </div>
        </div>
      </div>

      <div className="home-second-bg-card">
        <div className="d-flex flex-row justify-content-center m-5">
          <div>
            <img className="home-second-bg-card-img mt-4" src="images/headphones-background.png" alt="" />
          </div>
          <div>
            <h6>Easy To Customise</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aliquam saepe sunt repellat accusantium</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
