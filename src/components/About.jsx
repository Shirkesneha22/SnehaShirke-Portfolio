import React from 'react';
import { motion } from 'framer-motion';
import '../styles/about.css';

const About = () => {
  const highlights = [
    'Frontend Development',
    'React.js & Next.js',
    'AI / Machine Learning',
    'Python & NLP',
    'Cloud & Deployment',
    'REST APIs',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="section about">
      <div className="about-container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <h2 className="section-title">About Me</h2>
            
            <p>
              I'm a passionate <strong>Aspiring Full Stack Developer</strong> and a <strong>Fresher</strong> dedicated to 
              building modern, efficient, and user-centric web applications. With a solid foundation in 
              <strong> Frontend Development</strong> and a growing expertise in <strong>AI-powered solutions</strong>, 
              I enjoy turning complex problems into simple, functional code.
            </p>
            
            <p>
              I specialize in building applications that integrate <strong>AI and Machine Learning</strong> — 
              from document intelligence platforms to automated systems. I am particularly interested in 
              leveraging technologies like <strong>React, Python, and Cloud services</strong> to create 
              impactful digital experiences that solve real-world challenges.
            </p>

            <div className="about-highlight-line">
              <span className="highlight-icon">⚡</span>
              <span>I leverage modern tools and AI to rapidly build and ship features — focusing on quality and scalability.</span>
            </div>

            <div className="about-highlight">
              {highlights.map((item, index) => (
                <motion.span
                  key={index}
                  className="highlight-item"
                  variants={itemVariants}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div className="about-image" variants={itemVariants}>
            <div className="about-image-wrapper">
              <div className="wavy-border">
                <div className="wavy-border-inner"></div>
              </div>
              <img 
                src="/Profile.png" 
                alt="Profile" 
                className="about-avatar-img"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
