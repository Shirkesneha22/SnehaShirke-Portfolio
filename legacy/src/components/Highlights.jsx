import { motion } from 'framer-motion';
import { FaCode, FaCertificate, FaLaptopCode, FaRocket } from 'react-icons/fa';
import '../styles/highlights.css';
const stats = [{ value: '3+', label: 'Professional roles', icon: <FaLaptopCode /> }, { value: '4+', label: 'AI-focused projects', icon: <FaRocket /> }, { value: '15+', label: 'Technologies used', icon: <FaCode /> }, { value: '3', label: 'Certification areas', icon: <FaCertificate /> }];
export default function Highlights() { return <section className="highlights" aria-label="Career highlights"><div className="highlights-grid">{stats.map((stat, index) => <motion.div className="stat-card" key={stat.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }}><span className="stat-icon">{stat.icon}</span><div><strong>{stat.value}</strong><span>{stat.label}</span></div></motion.div>)}</div></section>; }
