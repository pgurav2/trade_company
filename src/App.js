import logo from "./logo.svg";
import "./App.css";

import HeaderFooter from "./components/header_footer";
import Herobanner from "./components/heroSection";
import Recommonded from "./components/recommonded";
import Personlize from "./components/personlize_contract";
import Portfolio from "./components/portfolio";
import OurClient from "./components/our_client";
import ContactUs from "./components/contact_us";
import Client from "./components/client";
import Value from "./components/value";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(()=>{
    Aos.init({once:true});
  },[])

  return (
    <div className="App">
      <HeaderFooter  />
      <Herobanner />
      <Recommonded />
      <Personlize />
      <Portfolio />
      <OurClient />
      <Value />
      <Client />
      <ContactUs />
      <HeaderFooter />
    </div>
  );
}

export default App;
