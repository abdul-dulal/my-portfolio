import Home from "./components/home/Home";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Home />
      <Navbar />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
