import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
// import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Error from "./pages/Error";
import Services from "./pages/Services";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Collections from "./pages/Collections";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="*" element={<Error />} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
