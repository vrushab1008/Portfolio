import { useEffect, useRef, useState } from 'react';
import './Skills.css';

const skillsData = [
    {
        name: 'Java',
        level: 85,
        color: '#f89820',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        category: 'language',
    },
    {
        name: 'HTML5',
        level: 95,
        color: '#e34f26',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        category: 'frontend',
    },
    {
        name: 'CSS3',
        level: 90,
        color: '#1572b6',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        category: 'frontend',
    },
    {
        name: 'JavaScript',
        level: 80,
        color: '#f7df1e',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        category: 'language',
    },
    {
        name: 'React',
        level: 75,
        color: '#61dafb',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        category: 'frontend',
    },
    {
        name: 'Hibernate',
        level: 70,
        color: '#59666c',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg',
        category: 'backend',
    },
    {
        name: 'MySQL',
        level: 75,
        color: '#00758f',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        category: 'backend',
    },
    {
        name: 'Git',
        level: 80,
        color: '#f05032',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        category: 'tools',
    },
];

function Skills() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [activeFilter, setActiveFilter] = useState('all');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const filters = ['all', 'frontend', 'language', 'backend', 'tools'];
    const filteredSkills = activeFilter === 'all'
        ? skillsData
        : skillsData.filter(s => s.category === activeFilter);

    return (
        <section className="skills" id="skills" ref={sectionRef}>
            <div className="skills__container">
                <h2 className="section-title">Skills & Expertise</h2>
                <p className="section-subtitle">Technologies I work with to build amazing things</p>

                {/* Filters */}
                <div className="skills__filters">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={`skills__filter ${activeFilter === filter ? 'skills__filter--active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter.charAt(0).toUpperCase() + filter.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Skills grid */}
                <div className="skills__grid">
                    {filteredSkills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className={`skills__card ${isVisible ? 'skills__card--visible' : ''}`}
                            style={{ '--delay': `${index * 0.1}s`, '--skill-color': skill.color }}
                        >
                            <div className="skills__card-icon">
                                <img src={skill.icon} alt={skill.name} onError={(e) => { e.target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'; }} />
                            </div>
                            <h3 className="skills__card-name">{skill.name}</h3>
                            <div className="skills__card-bar">
                                <div
                                    className="skills__card-progress"
                                    style={{ '--progress': `${isVisible ? skill.level : 0}%` }}
                                ></div>
                            </div>
                            <span className="skills__card-level">{skill.level}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
