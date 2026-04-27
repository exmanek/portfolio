import { p } from 'motion/react-client';
import React, { useState, useEffect } from 'react';

const Navbar = () => {

  const navItems = [
    { name: 'O mnie', href: '#aboutme' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Kontakt', href: '#contact' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [transparent, setTransparent] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 200);
      setTransparent(currentScrollPos < 400)
      setPrevScrollPos(currentScrollPos);
      setIsOpen(false)
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);


  return (
    <nav className={`navbar ${visible ? '' : 'navbar--hidden'} ${transparent ? 'navbar--transparent' : ''}`}>
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