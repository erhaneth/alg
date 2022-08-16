import "./menu.scss";

export default function menu({isOpen, setIsOpen}) {
  return (
    <div className={"menu " + (isOpen && "active")}>
      <ul>
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#works">Calisma Alanlari</a>
        </li>

        <li>
          <a href="#testemonials">Gorusler</a>
        </li>
        <li>
          <a href="#contact">Iletisim</a>
        </li>
      </ul>
    </div>
  );
}
