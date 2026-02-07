import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/snehashirke221@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact: Message from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactItems = [
    { icon: '📧', label: 'snehashirke221@gmail.com', href: 'mailto:snehashirke221@gmail.com' },
    { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/in/sneha-shirke' },
    { icon: '🐙', label: 'GitHub', href: 'https://github.com/sneha-shirke' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <section id="contact" className="section contact">
      <div className="contact-container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="contact-info" variants={itemVariants}>
            <h2 className="section-title">Get In Touch</h2>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Feel free to reach out!
            </p>
            <div className="contact-details">
              {contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="contact-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact-item-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            variants={itemVariants}
            onSubmit={handleSubmit}
            action="https://formspree.io/f/snehashirke221@gmail.com"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>
            
            <button 
              type="submit" 
              className={`form-submit ${status}`}
              disabled={status === 'sending'}
            >
              {status === 'idle' && 'Send Message'}
              {status === 'sending' && 'Sending...'}
              {status === 'success' && '✓ Message Sent!'}
              {status === 'error' && 'Failed - Try Again'}
            </button>

            {status === 'success' && (
              <p className="form-status success">
                Thank you! Your message has been sent successfully.
              </p>
            )}
            {status === 'error' && (
              <p className="form-status error">
                Something went wrong. Please try again or email directly.
              </p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
