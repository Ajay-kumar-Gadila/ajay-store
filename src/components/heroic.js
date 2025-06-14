import React, { useRef, useState, useEffect } from 'react';
import '../App.css';
import { Typewriter } from 'react-simple-typewriter'
import landingImg from '../assets/ic5-Photoroom.png';
import service from '../assets/service.svg';
import support from '../assets/support.svg';
import secure from '../assets/secure.svg';
import brand from '../assets/brand.svg';
import carousel1 from '../assets/carousel1.jpeg';
import carousel2 from '../assets/carousel2.jpeg';
import carousel3 from '../assets/carousel3.jpeg';
import FAQSection from "./FAQSection";
import emailjs from "emailjs-com";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaPhoneAlt

} from 'react-icons/fa';
import classroom from '../assets/classroom.svg';
import Img1 from '../assets/classroom.svg';
import Img2 from '../assets/classroom.svg';
import Img3 from '../assets/classroom.svg';



import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';
const images = [Img1, Img2, Img3];

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const carouselRef = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1c9ixfl1",
        "template_1sfd6kk",
        form.current,
        "5oSzI2s5S8TAYMbCT"
      )
      .then(
        (result) => {
          console.log("Message sent successfully:", result.text);
          alert("Message sent!");
          form.current.reset();
        },
        (error) => {
          console.error("Error sending message:", error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div>
      <main>
        <div className="flex flex-col-reverse md:flex-row justify-around items-center px-6 md:px-0 relative z-0">
          <div className="text-white max-w-4xl px-6 py-24">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-black text-Slate-100 ">
              Empowering the Future of <br />
              <span className="text-Stone-400">
                <Typewriter
                  words={['Electronics', 'Smart ICs', 'Semiconductors', 'Embedded Systems']}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h1>
            <p className="mt-6 text-lg   text-black">
              At Ajay Store, we build high-performance IC and semiconductor solutions
              tailored for smart systems, AI hardware, and mission-critical applications.
            </p>
            <button className="mt-6 px-6 py-3 bg-[#0F172A] text-cyan-600 font-bold rounded-full shadow-md hover:bg-cyan-100 text-white transition duration-300">
              Explore Our Services
            </button>
          </div>
          <div className="max-w-xs md:max-w-md mb-6 md:mb-0">
            <img src={landingImg} alt="Landing page illustration" className="w-[40rem] h-[20rem]" />
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-center mt-10">
          <div className="lg:px-24 bg-white text-center space-y-12">
            <div>
              <h2 className="font-bold text-gray-900 mb-12 text-4xl">
                What is  Ajay Store?
              </h2>
              <p className="max-w-3xl mx-auto text-gray-600 text-xl">
                Ajay Store is a cutting-edge electronics company focused on designing and developing integrated circuits (ICs) and semiconductor solutions for smart systems, AI hardware, and industrial-grade applications.
                We partner with technology leaders to create mission-critical components powering everything from automotive ECUs to next-gen IoT devices. Our R&D-led innovation and commitment to quality help shape a smarter, connected, and more efficient world.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center text-center ">
            <h1 className="text-4xl font-semibold ">Our Clients</h1>
            <div>
              <img src={brand} alt="Client Brand" />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl text-center p-12 font-bold text-gray-900 mb-4">
            Together, We Build Your <span className="text-[#60B5FF]">Needs</span>
          </h2>
          <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-xl shadow-lg">

            <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {[
                  {
                    title: "Fundamentals First",
                    subtitle: "Strong basics lead to powerful creations.",
                    img: carousel3,
                    alt: "Foundation Course",
                  },
                  {
                    title: "Core Electronics",
                    subtitle: "Master circuits, signals, and embedded systems.",
                    img: carousel1,
                    alt: "Advanced Course",
                  }, {
                    title: "Hands-on Projects",
                    subtitle: "Build, test, and innovate with real-world hardware.",
                    img: carousel2,
                    alt: "Placement Help",
                  }].map(({ title, subtitle, img, alt }, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 h-[420px] md:h-[420px] sm:h-[320px] xs:h-[260px] flex flex-col md:flex-row items-center justify-between bg-white px-6"
                    >
                      <div className="w-full md:w-1/2 pr-4 md:ml-20 text-center md:text-left">
                        <h2 className="text-4xl md:text-[52px] font-bold mb-2">{title}</h2>
                        <p className="text-2xl md:text-[36px] text-gray-700">{subtitle}</p>
                      </div>
                      <img
                        src={img}
                        alt={alt}
                        className="w-full md:w-1/2 h-48 md:h-full object-cover rounded-md mt-4 md:mt-0"
                      />
                    </div>
                  ))}
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={`w-3 h-3 rounded-full ${current === i ? "bg-blue-600" : "bg-gray-300"
                      } transition-all duration-300`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
                  <div className="mb-4">
                    <img src={service} alt="Free Shipping" className="w-16 h-16" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Free Shipping on Orders</h3>
                  <p className="text-gray-600">
                    Get fast, free delivery on all eligible orders — no minimum value required.
                  </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
                  <div className="mb-4">
                    <img src={support} alt="24/7 Support" className="w-16 h-16" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Customer Support</h3>
                  <p className="text-gray-600">
                    Our expert team is available round-the-clock to assist with all your queries.
                  </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
                  <div className="mb-4">
                    <img src={secure} alt="Secure Payment" className="w-16 h-16" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Payment</h3>
                  <p className="text-gray-600">
                    We use encrypted gateways to ensure your transactions are always safe and secure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FAQSection />
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8   text-center">
            Contact US
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-purple-700 mb-4">Get In Touch</h3>
              <p className="text-gray-600 mb-6">
                Have a question or want to work together? Drop me a message and I'll get back to you as soon as possible.
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 bg-purple-100 text-pink-600 rounded-full flex items-center justify-center">
                  📍
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Location</h4>
                  <p className="text-gray-600">Telangana, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-10 h-10 bg-purple-100 text-blue-600 rounded-full flex items-center justify-center">
                  📧
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-purple-600">info@ajaygroups.com</p>
                </div>
              </div>
              <h4 className="text-gray-800 font-medium mb-2">Connect with me</h4>
              <div className="flex space-x-4 text-xl">
                <a href="#" className="text-black hover:text-purple-400"><FaGithub /></a>
                <a href="#" className="text-black hover:text-purple-400"><FaLinkedin /></a>
                <a href="#" className="text-black hover:text-purple-400"><FaTwitter /></a>
                <a href="#" className="text-black hover:text-purple-400"><FaInstagram /></a>
                <a href="#" className="text-black hover:text-purple-400"><FaFacebook /></a>
                <a href="#" className="text-black hover:text-purple-400"><FaWhatsapp /></a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Send Me a Message</h3>
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your name"
                  required
                  className="w-full border border-purple-100 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your email"
                  required
                  className="w-full border border-purple-100 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full border border-purple-100 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Type your message here..."
                  className="w-full border border-purple-100 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
