import React from 'react';
import { motion } from 'framer-motion';
import '../styles/experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Vedant Info Edge Pvt. Ltd.',
      location: 'India',
      date: 'September 2025 – Present',
      isCurrent: true,
      description: [
        'Developing full stack web applications from scratch',
        'Building frontend interfaces using React.js',
        'Working with backend APIs and databases',
        'Actively contributing to Android application development',
        'Handling end-to-end feature implementation',
        'Collaborating across frontend, backend, and mobile development tasks',
      ],
      tech: ['React.js', 'JavaScript', 'Backend APIs', 'Databases', 'Android Development', 'Git'],
    },
    {
      role: 'Web Developer',
      company: 'BDIGITAU',
      location: 'Pune',
      date: 'July 2025 – September 2025',
      isCurrent: false,
      description: [
        'Built and maintained web pages using modern frontend technologies',
        'Implemented responsive layouts and UI improvements',
        'Worked on multiple client-facing web projects',
        'Ensured cross-browser compatibility and usability',
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Git'],
    },
    {
      role: 'React.js Developer',
      company: 'Nearby Rooms',
      location: 'Pune',
      date: 'January 2025 – June 2025',
      isCurrent: false,
      description: [
        'Developed responsive and reusable UI components using React.js',
        'Converted UI designs into clean, functional frontend code',
        'Integrated frontend with backend APIs',
        'Focused on performance optimization and code maintainability',
        'Collaborated with team members to deliver production-ready features',
      ],
      tech: ['React.js', 'JavaScript', 'HTML', 'CSS', 'APIs', 'Git'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="experience" className="section experience">
      <div className="experience-container">
        <motion.div
          className="experience-header-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="experience-subtitle">
            Hands-on Industry Experience in Frontend & Full Stack Development
          </p>
        </motion.div>

        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`experience-item ${exp.isCurrent ? 'current' : ''}`}
              variants={itemVariants}
            >
              <div className="experience-dot-container">
                <span className={`experience-dot ${exp.isCurrent ? 'active' : ''}`} />
                {index < experiences.length - 1 && <span className="experience-line" />}
              </div>
              
              <div className="experience-card">
                <div className="experience-card-header">
                  <div className="experience-title-group">
                    <h3 className="experience-role">{exp.role}</h3>
                    <div className="experience-company-info">
                      <span className="experience-company">{exp.company}</span>
                      <span className="experience-location">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="experience-date-badge">
                    {exp.isCurrent && <span className="current-badge">Current</span>}
                    <span className="experience-date">{exp.date}</span>
                  </div>
                </div>

                <ul className="experience-description">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>

                <div className="experience-tech">
                  {exp.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="experience-tech-item">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
