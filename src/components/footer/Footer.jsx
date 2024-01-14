import "./footer.scss";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            Provide a brief description of your firm or practice here. Mention
            your mission, values, or what makes you unique.
          </p>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          {/* <ul>
            <li>
              <AiFillPhone /> +905413539181
            </li>
            <li>
              <AiOutlineMail /> aligumuslaw@gmail.com
            </li>
            <li>
              <AiOutlineEnvironment /> Your Office Address Here
            </li>
          </ul> */}
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="socials">
            // Replace these with your social media icons and links
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2023 Your Firm Name | Designed by Your Name
      </div>
    </div>
  );
}
