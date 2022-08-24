import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  // textRef is a ref to the text element
  const textRef = useRef();
  // usEffect is a hook that runs a function once
  // when the component is rendered
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Hizli Sonuc Getirir", "Sahip Cikar", "Sadiktir"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/intro.png" alt="" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h1>ALG hukuk burosu olarak,</h1>

          <h3>
            sizin davaniza:
            <span ref={textRef}></span>
          </h3>
          <h2>Avukat, Ali Gumus</h2>
        </div>
          <a href="#portfolio">
            <img src="assets/down.png" alt="/" />
          </a>
      </div>
    </div>
  );
}


// strings: ["hizli sonuc getirir", "sahip cikar", "sadiktir"],