import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaGithub, 
  FaBolt,
  FaPuzzlePiece,
  FaChartBar,
  FaJsSquare,
  FaCode,
  FaPlug,
  FaRobot
} from 'react-icons/fa';
import '../styles/skills.css';

const Skills = () => {
  // Orbit 1 - Core Frontend
  const ring1Skills = [
    { icon: <FaReact />, label: 'React' },
    { icon: <FaJsSquare />, label: 'JavaScript' },
    { icon: <FaHtml5 />, label: 'HTML' },
    { icon: <FaCss3Alt />, label: 'CSS' },
  ];

  // Orbit 2 - Tools
  const ring2Skills = [
    { icon: <FaGitAlt />, label: 'Git' },
    { icon: <FaGithub />, label: 'GitHub' },
    { icon: <FaCode />, label: 'VS Code' },
    { icon: <FaPlug />, label: 'APIs' },
  ];

  // Orbit 3 - AI / Growth
  const ring3Skills = [
    { icon: <FaRobot />, label: 'AI/ML' },
    { icon: <FaChartBar />, label: 'Data' },
    { icon: <FaBolt />, label: 'Automation' },
    { icon: <FaPuzzlePiece />, label: 'Problem Solving' },
  ];

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <div key={index} className="orbit-skill">
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
        </motion.div>

        <motion.div
          className="orbit-system"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Central Core */}
          <div className="orbit-core">
            <span className="orbit-core-text">Core<br />Stack</span>
          </div>

          {/* Orbit Ring 1 - Core Frontend */}
          <div className="orbit-ring orbit-ring-1">
            {renderSkills(ring1Skills)}
          </div>

          {/* Orbit Ring 2 - Tools */}
          <div className="orbit-ring orbit-ring-2">
            {renderSkills(ring2Skills)}
          </div>

          {/* Orbit Ring 3 - AI / Growth */}
          <div className="orbit-ring orbit-ring-3">
            {renderSkills(ring3Skills)}
          </div>
        </motion.div>

        <motion.div
          className="skills-legend"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="legend-item">
            <span className="legend-dot ring-1" />
            <span>Core Frontend</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot ring-2" />
            <span>Tools</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot ring-3" />
            <span>AI / Growth</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
