import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testemonials from "./components/testemonials/Testemonials";
import Contact from "./components/contact/Contact";
import "./app.scss";
import Menu from "./components/menu/Menu";
import {useState} from "react";
function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="app">
       <Topbar isOpen={ isOpen } setIsOpen={ setIsOpen}/>
       <Menu isOpen={ isOpen } setIsOpen={ setIsOpen}/>
       <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testemonials />
        <Contact />

       </div>
        
    </div>
  );
}

export default App;
