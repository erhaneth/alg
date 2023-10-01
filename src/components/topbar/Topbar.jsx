import "./topbar.scss";

export default function Topbar({ isOpen, setIsOpen }) {
  return (
    <div className={"topbar " + (isOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            alg
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
