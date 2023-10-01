import "./works.scss";

import React from "react";

const Works = () => {
  return (
    <div className="services-container">
      <h1 className="services-header">Services</h1>
      <hr className="divider" />
      <p className="services-description">
        Description about the services offered...
      </p>

      <div className="images-container">
        <div className="left-container">
          <img
            src="/assets/works/home-practice-areas-business-litigation.jpg"
            className="large-image"
          />
        </div>
        <div className="right-container">
          <div className="top-row">
            <img src="path_to_small_image1.jpg" className="small-image" />
            <img src="path_to_small_image2.jpg" className="small-image" />
          </div>
          <div className="bottom-row">
            <img src="path_to_small_image3.jpg" className="small-image" />
            <img src="path_to_small_image4.jpg" className="small-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
