import "./menu.scss";
import CloseIcon from "@mui/icons-material/Close";
import React, { useRef } from "react";
import { useOutsideClick } from "../utils/useOutsideClick/useOutsideClick";

export default function Menu({ isOpen, setIsOpen }) {
  const menuRef = useRef();
  useOutsideClick(menuRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });
  return (
    <div ref={menuRef} className={"menu " + (isOpen ? "active" : "")}>
      <span className="closeIcon" onClick={() => setIsOpen(false)}>
        <CloseIcon />
      </span>
      <ul>
        <li onClick={() => setIsOpen(false)}>
          <a href="#intro">Anasayfa</a>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <a href="#about">Hakkimizda</a>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <a href="#works">Calisma Alanlari</a>
        </li>

        <li onClick={() => setIsOpen(false)}>
          <a href="#testimonials">Gorusler</a>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <a href="#contact">Iletisim</a>
        </li>
      </ul>
    </div>
  );
}
