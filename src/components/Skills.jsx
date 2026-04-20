import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaNodeJs, 
  FaPython, 
  FaAws, 
  FaGithub, 
  FaCode, 
  FaFigma,
  FaServer,
  FaCloud,
  FaRobot,
  FaBrain,
  FaProjectDiagram
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiBootstrap, 
  SiFastapi, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiMysql, 
  SiAmazondynamodb, 
  SiPostman, 
  SiOpenai,
  SiFramer
} from 'react-icons/si';
import '../styles/skills.css';

const Skills = () => {
  // Orbit Ring 1 - Frontend Core
  const ring1Skills = [
    { icon: <FaReact />, label: 'React' },
    { icon: <SiNextdotjs />, label: 'Next.js' },
    { icon: <FaJsSquare />, label: 'JavaScript' },
    { icon: <FaHtml5 />, label: 'HTML5' },
  ];

  // Orbit Ring 2 - Backend & AI
  const ring2Skills = [
    { icon: <FaNodeJs />, label: 'Node.js' },
    { icon: <SiFastapi />, label: 'FastAPI' },
    { icon: <FaPython />, label: 'Python' },
    { icon: <SiPostgresql />, label: 'PostgreSQL' },
    { icon: <SiMongodb />, label: 'MongoDB' },
  ];

  // Orbit Ring 3 - Tools & Cloud
  const ring3Skills = [
    { icon: <FaAws />, label: 'AWS' },
    { icon: <FaGithub />, label: 'GitHub' },
    { icon: <SiOpenai />, label: 'OpenAI' },
    { icon: <FaFigma />, label: 'Figma' },
    { icon: <SiPostman />, label: 'Postman' },
    { icon: <SiFramer />, label: 'Framer' },
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      description: "My Core Strength",
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript (ES6+)", icon: <FaJsSquare /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "Framer Motion", icon: <SiFramer /> }
      ]
    },
    {
      title: "Backend Development",
      description: "Server-side & Logic",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "FastAPI", icon: <SiFastapi /> }
      ]
    },
    {
      title: "AI / Machine Learning",
      description: "My Differentiator 🚀",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "NLP", icon: <FaBrain /> },
        { name: "RAG", icon: <FaRobot /> },
        { name: "Machine Learning", icon: <FaBrain /> },
        { name: "Data Analysis", icon: <FaProjectDiagram /> },
        { name: "OpenAI APIs", icon: <SiOpenai /> }
      ]
    },
    {
      title: "Databases",
      description: "Data Persistence",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "DynamoDB", icon: <SiAmazondynamodb /> }
      ]
    },
    {
      title: "Cloud & Deployment",
      description: "Infrastructure & APIs",
      skills: [
        { name: "AWS Services", icon: <FaAws /> },
        { name: "REST APIs", icon: <FaServer /> },
        { name: "Git & GitHub", icon: <FaGithub /> },
        { name: "CI/CD basics", icon: <FaCloud /> }
      ]
    },
    {
      title: "Tools & Others",
      description: "Productivity",
      skills: [
        { name: "VS Code", icon: <FaCode /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Figma", icon: <FaFigma /> }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const renderOrbitSkills = (skills) =>
    skills.map((skill, index) => (
      <div key={index} className="orbit-skill" title={skill.label}>
        <span className="orbit-skill-icon">{skill.icon}</span>
        <span className="orbit-skill-label">{skill.label}</span>
      </div>
    ));

  return (
    <section id="skills" className="section skills">
      <div className="skills-container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Visualizing my tech stack from core to specialized tools</p>
        </motion.div>

        {/* Orbit System - Visual Representation */}
        <motion.div
          className="orbit-system-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="orbit-system">
            <div className="orbit-core">
              <span className="orbit-core-text">Tech<br />Stack</span>
            </div>

            <div className="orbit-ring orbit-ring-1">
              {renderOrbitSkills(ring1Skills)}
            </div>

            <div className="orbit-ring orbit-ring-2">
              {renderOrbitSkills(ring2Skills)}
            </div>

            <div className="orbit-ring orbit-ring-3">
              {renderOrbitSkills(ring3Skills)}
            </div>
          </div>
        </motion.div>

        {/* Categories Grid - Detailed Information */}
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              className="skill-category-card"
              variants={itemVariants}
            >
              <div className="category-header">
                <h3 className="category-title">{category.title}</h3>
                <span className="category-desc">{category.description}</span>
              </div>
              <div className="category-skills-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item-tag">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
