import { useState } from 'react';
import logo from '../../assets/logo-driveflow.png';
import './navbar.css';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className="bg-white w-full shadow-sm flex items-center justify-center ">
        <div className="w-full md:w-[90%] flex flex-wrap items-center justify-between px-6 py-5">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-12" alt="DriveFlow Logo" />
        </a>
        <button
          onClick={toggleMenu}
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" 
          aria-controls="navbar-default" 
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
          </svg>
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col rounded p-4 md:p-0 mt-4 border border-gray-200 bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
            <li className={activeSection === 'home' ? 'nav-link-active' : 'nav-link'}>
              <a 
                href="#home"
                onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                className="block py-3 px-4 md:bg-transparent md:p-0 cursor-pointer"
                aria-current={activeSection === 'home' ? 'page' : undefined}
              >
                Home
              </a>
            </li>
            <li className={activeSection === 'about' ? 'nav-link-active' : 'nav-link'}>
              <a 
                href="#about"
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                className="block py-3 px-4 md:bg-transparent md:border-0 md:p-0 cursor-pointer"
              >
                About
              </a>
            </li>
            <li className={activeSection === 'services' ? 'nav-link-active' : 'nav-link'}>
              <a 
                href="#services"
                onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                className="block py-3 px-4 md:bg-transparent md:border-0 md:p-0 cursor-pointer"
              >
                Services
              </a>
            </li>
            <li className={activeSection === 'pricing' ? 'nav-link-active' : 'nav-link'}>
              <a 
                href="#pricing"
                onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}
                className="block py-3 px-4 md:bg-transparent md:border-0 md:p-0 cursor-pointer"
              >
                Why DriveFlow?
              </a>
            </li>
            <li className={activeSection === 'contact' ? 'nav-link-active' : 'nav-link'}>
              <a 
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                className="block py-3 px-4 md:bg-transparent md:border-0 md:p-0 cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
  