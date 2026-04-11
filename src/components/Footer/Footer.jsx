import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { 
      name: "LinkedIn",
      icon: <FaLinkedin />, 
      link: "https://www.linkedin.com/in/spnsujit205" 
    },
    { 
      name: "GitHub",
      icon: <FaGithub />, 
      link: "https://github.com/spn-sujit" 
    },
    { 
      name: "LeetCode",
      icon: <SiLeetcode />, 
      link: "https://leetcode.com/u/Sujit12345678/" 
    },
    { 
      name: "Instagram",
      icon: <FaInstagram />, 
      link: "https://www.instagram.com/sujit_spn/" 
    },
    { 
      name: "Email",
      icon: <FaEnvelope />, 
      link: "mailto:nagasujitsoorneedi@gmail.com", 
      isEmail: true 
    },
  ];

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "work" },
    { name: "Education", id: "education" },
  ];

  return (
    <footer className="text-white py-12 px-[10vw] md:px-[7vw] lg:px-[20vw] bg-transparent">
      <div className="container mx-auto text-center">
        
        {/* Name / Logo */}
        <h2 className="text-2xl font-bold text-purple-500 tracking-tight">
          Naga Sujit Soorneedi
        </h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-6">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="text-gray-300 hover:text-purple-400 text-sm sm:text-base font-medium transition-all duration-300"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              // This logic is key: Email should NOT use _blank
              target={item.isEmail ? "_self" : "_blank"}
              rel="noopener noreferrer"
              title={item.isEmail ? "nagasujitsoorneedi@gmail.com" : item.name}
              className="text-2xl text-gray-400 hover:text-purple-500 transition-all duration-300 transform hover:scale-125"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <div className="mt-10 pt-8 border-t border-gray-800/50">
          <p className="text-sm text-gray-500">
            © {currentYear} Naga Sujit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;