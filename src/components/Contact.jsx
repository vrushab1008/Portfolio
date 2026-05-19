import { useState, useEffect, useRef } from 'react';
import './Contact.css';

export default function Contact() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) setIsVisible(true);
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: '', email: '', message: '' });
    };

    const contactInfo = [
        {
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            ),
            label: 'Email',
            value: 'lagamannavarvrushab@gmail.com',
            link: 'mailto:lagamannavarvrushab@gmail.com',
        },
        {
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            ),
            label: 'GitHub',
            value: 'vrushab',
            link: 'https://github.com/vrushab',
        },
        {
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            ),
            label: 'Location',
            value: 'Belagavi, Karnataka, India',
            link: null,
        },
    ];

    return (
        <section className="contact" id="contact" ref={sectionRef}>
            <div className="contact__container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">Have a question or want to work together? Drop a message!</p>

                <div className={`contact__grid ${isVisible ? 'contact__grid--visible' : ''}`}>
                    {/* Left - Info */}
                    <div className="contact__info">
                        <h3 className="contact__info-title">Let's Connect</h3>
                        <p className="contact__info-text">
                            I'm always open to discussing new projects, creative ideas,
                            or opportunities to be part of your vision.
                        </p>

                        <div className="contact__info-items">
                            {contactInfo.map((item, i) => (
                                <div key={i} className="contact__info-item">
                                    <div className="contact__info-icon">{item.icon}</div>
                                    <div>
                                        <span className="contact__info-label">{item.label}</span>
                                        {item.link ? (
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="contact__info-value">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <span className="contact__info-value">{item.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social links */}
                        <div className="contact__socials">
                            <a href="https://github.com/vrushab" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="GitHub">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                            </a>
                            <a href="https://linkedin.com/in/vrushab-lagamannavar" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                            </a>
                            <a href="mailto:lagamannavarvrushab@gmail.com" className="contact__social-link" aria-label="Email">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                            </a>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="contact__form-group">
                            <label htmlFor="name" className="contact__form-label">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                className="contact__form-input"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>
                        <div className="contact__form-group">
                            <label htmlFor="email" className="contact__form-label">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                className="contact__form-input"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                        <div className="contact__form-group">
                            <label htmlFor="message" className="contact__form-label">Message</label>
                            <textarea
                                id="message"
                                className="contact__form-input contact__form-textarea"
                                placeholder="Your message here..."
                                rows="5"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className={`contact__form-btn ${submitted ? 'contact__form-btn--sent' : ''}`}
                        >
                            {submitted ? '✓ Message Sent!' : 'Send Message →'}
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <div className="footer__inner">
                    <div className="footer__left">
                        <span className="footer__logo">Vrushab<span className="footer__logo-dot">.</span></span>
                        <p className="footer__text">Building digital experiences with passion.</p>
                    </div>
                    <div className="footer__right">
                        <p className="footer__copyright">
                            © 2026 Vrushab S Lagamannavar. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </section>
    );
}
