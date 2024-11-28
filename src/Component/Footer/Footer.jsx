import React, { useEffect } from 'react';

const Footer = () => {
  
    return (
        <footer className="bg-gray-900 text-white py-6">
        {/* Contact Information */}
        <div className="container mx-auto text-center">
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-400">Email: support@example.com</p>
          <p className="text-gray-400">Phone: +1 234 567 890</p>
          <p className="text-gray-400">Address: 123 Main Street, City, Country</p>
        </div>
  
       
        <div className="flex justify-center space-x-6 mt-4">
        <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500"
          >
            <i className="fab fa-facebook-f">Facebook</i>
          </a>
          <a
           href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400"
          >
            <i className="fab fa-twitter">Twitter</i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500"
          >
          <i className="fab fa-instagram">Instagram</i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-700"
          >
            <i className="fab fa-linkedin-in">LinkedIn</i>
          </a>
        </div>
  
       
        <div className="text-center mt-6 text-gray-500">
          © {new Date().getFullYear()} My Application. All rights reserved.
        </div>
      </footer>
    );
};

export default Footer;