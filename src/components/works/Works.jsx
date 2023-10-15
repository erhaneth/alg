import React from "react";
import "./works.scss";

export default function Works() {
  return (
    <div className="works" id="works">
      <h1 className="servicesHeader">Çalışma Alanları</h1>
      <p className="servicesDescription">
        Alg hukuk burosu olarak, gayrimenkul ve iş litigasyonu, vergi hukuku,
        güvence ve miraslar, fikri mülkiyet, varlık koruma ve işlem hukuku gibi
        tüm konularda uzman hukuki danışmanlıkla sizin yanınızdadır. Zorlu
        süreçleri profesyonel bir şekilde atlatmanız için sizlere en iyi hizmeti
        sunmayı amaçlıyoruz.
      </p>
      <hr className="divider" />
      <div className="servicesContainer">
        <div className="imagesContainer">
          <div className="leftContainer">
            <div className="imageWithText">
              <img
                src="/assets/works/works-practice-areas-re.jpg"
                className="largeImage"
                alt="Real Estate Image"
              />
              <span className="imageText">Emlak ve Gayrimenkul Hukuku</span>
            </div>
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
