import React from 'react'

// Footer.jsx

const Footer = () => {
    return (
      <footer className="bg-primary text-white py-6 mt-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} AutoAttend. All rights reserved.</p>
            </div>
            <div className="flex  flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <a href="#about" className="hover:text-accent text-white">About Us</a>
              <a href="#contact" className="hover:text-accent text-white">Contact</a>
              <a href="#privacy" className="hover:text-accent text-white">Privacy Policy</a>
              <a href="#terms" className="hover:text-accent text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  