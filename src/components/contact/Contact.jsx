import "./contact.scss";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="itemContainer">
        <AiFillPhone className="icon" />
        <span>+905413539181</span>
      </div>
      <div className="itemContainer">
        <AiOutlineMail className="icon" />
        <span>aligumuslaw@gmail.com</span>
      </div>
    </div>
  );
}
