import React from "react";
import "./works.scss";

export default function Works() {
  return (
    <div className="works" id="works">
      <div className="servicesContainer">
        <h1 className="servicesHeader">Services</h1>
        <hr className="divider" />
        <p className="serviceDescription">
          Description about the services offered...
        </p>

        <div className="imagesContainer">
          <div className="leftContainer">
            <img
              src="/assets/works/works-practice-areas-re.jpg"
              className="largeImage"
              alt=""
            />
          </div>
          <div className="rightContainer">
            <div className="topRow">
              <img
                src="/assets/works/works-practice-areas-tax.jpg"
                className="smallImage"
              />
              <img
                src="/assets/works/works-practice-areas-transactions.jpg"
                className="smallImage"
              />
            </div>

            <div className="bottomRow">
              <img
                src="/assets/works/works-practice-areas-trusts.jpg"
                className="smallImage"
              />
              <img
                src="/assets/works/works-practice-areas-business-litigation.jpg"
                className="smallImage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
