
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Product from '../pages/product';
import Contact from '../pages/contact';
import About from '../pages/about';
import ScrollToSection from './ScrollToSection';
import ScrollToTop from './ScrollToTop';
import './index.css';


const Main = () => {
  return (
    <BrowserRouter>
  <ScrollToTop />
  <ScrollToSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}


export default Main;
