import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import ProgressBar from "react-progressbar-on-scroll";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Routes>
      <Route
        path={"/portfolio"}
        element={
          <div
            className="App"
            style={{
              background: darkMode ? "black" : "",
              color: darkMode ? "white" : "",
              // zIndex: ;
            }}
          >
            <ProgressBar color="#09f6c7" />
            <Navbar />
            <Intro />
            <Services />
            <Experience />
            {/* <Works /> */}
            <Portfolio />
            {/* <Testimonial /> */}
            <Contact />
            <Footer />
            <ToastContainer />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
