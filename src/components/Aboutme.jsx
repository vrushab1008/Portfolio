import { useEffect, useRef } from 'react';
import vrushabImg from '../assets/vrushab.jpg';
import './Aboutme.css';

export default function Aboutme() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('about--visible');
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const stats = [
        { number: '3+', label: 'Projects', icon: '📁' },
        { number: '8+', label: 'Technologies', icon: '⚙️' },
        { number: '6 Months', label: 'Coding', icon: '💻' },
    ];

    const highlights = [
        { icon: '🎯', title: 'Problem Solving', text: 'Analytical thinking with creative solutions' },
        { icon: '🚀', title: 'Fast Learner', text: 'Quick to adapt and master new technologies' },
        { icon: '🤝', title: 'Team Player', text: 'Collaborative mindset with strong communication' },
    ];

    return (
        <section className="about" id="about" ref={sectionRef}>
            <div className="about__container">
                <h2 className="section-title">About Me</h2>
                <p className="section-subtitle">Get to know the developer behind the code</p>

                <div className="about__grid">
                    {/* Left - ID Card */}
                    <div className="about__card-wrapper">
                        <div className="about__idcard">
                            <div className="about__idcard-shine"></div>
                            <div className="about__idcard-header">
                                <div className="about__idcard-logo">DEV</div>
                                <span className="about__idcard-type">Developer ID</span>
                            </div>
                            <div className="about__idcard-photo-wrap">
                                <img src={vrushabImg} alt="Vrushab S Lagamannavar" className="about__idcard-photo" />
                            </div>
                            <div className="about__idcard-info">
                                <h3 className="about__idcard-name">Vrushab S Lagamannavar</h3>
                                <div className="about__idcard-roles">
                                    <span className="about__role-tag">Full Stack</span>
                                    <span className="about__role-tag">Java</span>
                                    <span className="about__role-tag">React</span>
                                </div>
                                <div className="about__idcard-barcode">
                                    {[...Array(14)].map((_, i) => (
                                        <div key={i} className="about__barcode-line"></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Text content */}
                    <div className="about__text">
                        <div className="about__badge">
                            <span className="about__badge-dot"></span>
                            <span>Who am I?</span>
                        </div>
                        <h3 className="about__heading">
                            Passionate Developer &<br />
                            <span className="about__highlight">Problem Solver</span>
                        </h3>
                        <p className="about__description">
                            Highly motivated Engineering graduate with a strong foundation in full-stack web development, Core Java, and database-driven applications. Equipped with problem-solving abilities and a collaborative mindset, seeking opportunities to contribute to technology-driven solutions while continuously learning and growing.
                        </p>

                        {/* Stats */}
                        <div className="about__stats">
                            {stats.map((stat, i) => (
                                <div key={i} className="about__stat">
                                    <span className="about__stat-icon">{stat.icon}</span>
                                    <span className="about__stat-number">{stat.number}</span>
                                    <span className="about__stat-label">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Highlight cards */}
                <div className="about__highlights">
                    {highlights.map((item, i) => (
                        <div key={i} className="about__highlight-card" style={{ '--delay': `${0.1 * i}s` }}>
                            <span className="about__highlight-icon">{item.icon}</span>
                            <h4 className="about__highlight-title">{item.title}</h4>
                            <p className="about__highlight-text">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
