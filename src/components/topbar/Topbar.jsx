import "./topbar.scss";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export default function Topbar() {
  return (
    <div className="topbar active">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            alg
          </a>
          <div className="itemContainer">
            <BsFillPersonFill className="icon" />
            <span>+905413539181</span>
          </div>
          <div className="itemContainer">
            <AiOutlineMail className="icon" />
            <span>aligumus@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger">
            <span className="line1" ></span>
            <span className="line2" ></span>
            <span className="line3" ></span>
          </div>
        </div>
      </div>
    </div>
  );
}
