import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Works from "./components/works/Works";
import Testemonials from "./components/testemonials/Testemonials";
import Contact from "./components/contact/Contact";
import "./app.scss";
import Menu from "./components/menu/Menu";
import { useState } from "react";
import Whatsapp from "./components/utils/whatsapp.jsx";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="app">
      <Topbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Whatsapp />
      <div className="sections">
        <Intro />
        <About />
        <Works />
        <Testemonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
