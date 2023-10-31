import React from "react";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import "./scss/app.scss";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Projects from "./Components/Projects/Projects";
import Teams from "./Components/Teams/Teams";
import Contact from "./Components/Contact/Contact";
import Testimoniales from "./Components/Testimoniales/Testimoniales";
import Pricing from "./Components/Pricing/Pricing";
const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <About/>
      <Services/>
      <Projects/>
      <Teams/>
      <Pricing/>
      <Testimoniales/>
      <Contact/>
      <Footer />
    </>
  );
};

export default App;
