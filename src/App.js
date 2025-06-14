import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HeroSection from './components/heroic';
import Products from './components/Products';
import React, { useState } from 'react';
import app from './assets/appstore.png';
import googleplay from './assets/googleplay.png';
import windows from './assets/windows.png';
import { Menu, X } from "lucide-react";
import Career from './components/Career';
import Blog from './components/Blog';
import Aboutus from './components/Aboutus';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div>
        <nav className="relative text-white z-10">
          <div className="flex items-center bg-[#0F172A] justify-between px-6 md:px-40 py-6 relative z-20">
            <div className="text-3xl font-semibold">Ajay Store</div>
            <div className="md:hidden">
              <Menu onClick={() => setIsOpen(true)} className="w-6 h-6 cursor-pointer" />
            </div>
            <div className="hidden md:flex items-center gap-6">
              <ul className="flex gap-6 text-base">
                <Link to="/">
                  <li className="hover:text-gray-200 cursor-pointer">Home</li>
                </Link>
                <Link to="/products-avaiable-for-now">
                  <li className="hover:text-gray-200 cursor-pointer">Products</li>
                </Link>
                <Link to="/jobs-for-career">
                  <li className="hover:text-gray-200 cursor-pointer">Careers</li>
                </Link>
                <Link to="/blog-content">
                  <li className="hover:text-gray-200 cursor-pointer">Blog</li>
                </Link>
                <Link to="/about-us">
                  <li className="hover:text-gray-200 cursor-pointer">About Us</li>
                </Link>
              </ul>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 h-full w-[60%] bg-[#0F172A] text-white z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
          >
            <div className="flex bg-[#0F172A] justify-between items-center px-6 py-4">
              <span className="text-2xl font-bold">Ajay Store</span>
              <X onClick={() => setIsOpen(false)} className="w-6 h-6 cursor-pointer" />
            </div>
            <ul className="flex flex-col gap-4 px-6 text-base">
              <Link to="/">
                <li className="hover:text-gray-200 cursor-pointer">Home</li>
              </Link>
              <Link to="/products-avaiable-for-now">
                <li className="hover:text-gray-200 cursor-pointer">Products</li>
              </Link>
              <Link to="/jobs-for-career">
                <li className="hover:text-gray-200 cursor-pointer">Careers</li>
              </Link>
              <Link to="/blog-content">
                <li className="hover:text-gray-200 cursor-pointer">Blog</li>
              </Link>
              <Link to="/about-us">
                <li className="hover:text-gray-200 cursor-pointer">About Us</li>
              </Link>
            </ul>
          </div>
          {isOpen && (
            <div
              className="fixed inset-0 bg-black opacity-30 z-40"
              onClick={() => setIsOpen(false)}
            />
          )}
        </nav>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/products-avaiable-for-now" element={<Products />} />
          <Route path="/jobs-for-career" element={<Career />} />
          <Route path="/blog-content" element={<Blog />} />
          <Route path="/about-us" element={<Aboutus />} />
        </Routes>
        <footer className="bg-gray-200 text-gray-800 pt-12">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
            <div>
              <h4 className="font-bold mb-4">OUR COMPANY</h4>
              <ul className="space-y-2">
                <li><a href="#">Delivery</a></li>
                <li><a href="#">Legal Notice</a></li>
                <li><a href="#">Terms & Condition</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">OUR ACCOUNT</h4>
              <ul className="space-y-2">
                <li><a href="#">Personal Info</a></li>
                <li><a href="#">Orders</a></li>
                <li><a href="#">Credit Slip</a></li>
                <li><a href="#">Address</a></li>
                <li><a href="#">My Wishlist</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">PRODUCTS</h4>
              <ul className="space-y-2">
                <li><a href="#">Price Drop</a></li>
                <li><a href="#">New Product</a></li>
                <li><a href="#">Best Sales</a></li>
                <li><a href="#">Latest Product</a></li>
                <li><a href="#">Discount</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">STORE INFORMATION</h4>
              <p className="mb-2">123 Main Street, Banjara Hills, Hyderabad, Telangana 500034</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">OPENING HOURS</h4>
              <ul className="space-y-2">
                <li>Mon - Fri: 8AM - 10PM</li>
                <li>Sat - Sun: 9AM - 12PM</li>
                <li>Discounts <span className="bg-gray-200 text-black px-2 py-0.5 rounded">On sunday</span></li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12 mb-8">
            <h2 className="text-3xl font-bold text-purple-700 mb-4">⚡ Ajay Store</h2>
            <div className="flex justify-center space-x-4">
              <img src={app} alt="App Store" className="w-20 h-10" />
              <img src={googleplay} alt="Google Play" className=" w-20 h-10" />
              <img src={windows} alt="Windows Store" className="w-20 h-10" />
            </div>
          </div>
          <div className="bg-[#2e2d5a] text-white text-sm py-3 px-6 flex justify-center items-center text-center">
            <p>Copyright © 2023 - Ecommerce software</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
