import "./menu.scss";

export default function menu({isOpen, setIsOpen}) {
  return (
    <div className={"menu " + (isOpen && "active")}>
      <ul>
        <li onClick={()=>setIsOpen(false)}>
          <a href="#intro">Home</a>
        </li >
        <li onClick={()=>setIsOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={()=>setIsOpen(false)}>
          <a href="#works">Calisma Alanlari</a>
        </li>

        <li onClick={()=>setIsOpen(false)}>
          <a href="#testemonials">Gorusler</a>
        </li>
        <li onClick={()=>setIsOpen(false)}>
          <a href="#contact">Iletisim</a>
        </li>
      </ul>
    </div>
  );
}
