import React, { use, useState } from 'react';

const BurgerMenu = () => {
    const navItems = [
        { name: 'O mnie', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Kontakt', href: '#contact' },
    ];

    const [isOpen, setIsOpen] = useState(false);

    const BurgerIcon = () => {
        return (
            <a 
            className={`nav__burger-icon ${isOpen ? 'active' : ''}`} 
            onClick={() => setIsOpen(prev => !prev)}></a>
        )
    }

    return (
        <nav className="navbar navbar--mobile">
            <div className="nav__logo-container">
                <a href="/" className="nav__logo">{'<exmanek/>'}</a>
            </div>

            <BurgerIcon />

            <ul className={`nav__items nav__items--mobile ${isOpen ? 'nav__items--open' : ''}`}>
                {navItems.map((link, index) => (
                    <li key={index}>
                        <a href={link.href} className="nav__item">{link.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default BurgerMenu;