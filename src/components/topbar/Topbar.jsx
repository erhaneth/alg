import "./topbar.scss";
import {AiFillPhone} from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

export default function Topbar({isOpen, setIsOpen}) {
  return (
    <div className={"topbar " + (isOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            alg
          </a>
          <div className="itemContainer">
            <AiFillPhone className="icon" />
            <span>+905413539181</span>
          </div>
          <div className="itemContainer">
            <AiOutlineMail className="icon" />
            <span>aligumus@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=> setIsOpen(!isOpen) }>
            <span className="line1" ></span>
            <span className="line2" ></span>
            <span className="line3" ></span>
          </div>
        </div>
      </div>
    </div>
  );
}
