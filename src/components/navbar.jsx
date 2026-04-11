import React, { useState } from 'react';

const Navbar = () => {

  const navItems = [
    { name: 'O mnie', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Kontakt', href: '#contact' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav__logo-container">
        <a href="/" className="nav__logo">{'<exmanek/>'}</a>
      </div>

      <a 
        className={`nav__burger-icon ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(prev => !prev)}></a>

      <ul className="nav__items">
        {navItems.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="nav__item">{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;