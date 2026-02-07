import React from 'react';
import { motion } from 'framer-motion';
import '../styles/about.css';

const About = () => {
  const highlights = [
    'Full Stack Development',
    'React.js & React Native',
    'AI-Powered Applications',
    'Backend APIs & Databases',
    'NLP & Semantic Search',
    'RAG-based Systems',
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
              I'm a <strong>Full Stack Developer</strong> focused on building complete, 
              production-ready applications. With a strong foundation in <strong>React.js</strong> and 
              hands-on experience in backend APIs, databases, and <strong>React Native</strong> for 
              mobile development, I work across the entire stack to deliver real-world products.
            </p>
            
            <p>
              I specialize in building <strong>AI-powered applications</strong> — from resume analyzers 
              and job matching systems to document intelligence platforms. I have practical experience 
              with <strong>NLP, semantic search, RAG-based systems, and AI agents</strong>, applying 
              these concepts to solve real problems, not just as buzzwords.
            </p>

            <div className="about-highlight-line">
              <span className="highlight-icon">⚡</span>
              <span>I leverage modern AI tools to rapidly prototype and ship features — building products at the speed of ideas.</span>
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
