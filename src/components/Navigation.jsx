import { useState, useEffect } from 'react';
import './Navigation.css';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active link based on scroll position
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            for (const id of sections.reverse()) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= 120) {
                    setActiveLink(id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        setActiveLink(id);
        setMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'qualification', label: 'Qualification' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner">
                <a href="#home" className="navbar__logo" onClick={(e) => handleNavClick(e, 'home')}>
                    <span className="navbar__logo-icon">V</span>
                    <span className="navbar__logo-text">rushab<span className="navbar__logo-dot">.</span></span>
                </a>

                <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={`navbar__link ${activeLink === link.id ? 'navbar__link--active' : ''}`}
                            onClick={(e) => handleNavClick(e, link.id)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="navbar__cta"
                        onClick={(e) => handleNavClick(e, 'contact')}
                    >
                        Let's Talk
                    </a>
                </nav>

                <button
                    className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}
