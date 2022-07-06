import Home from "./components/home/Home";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Modal from "./components/portfolio/Modal";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/button/:id" element={<Modal />} />
      </Routes>
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
