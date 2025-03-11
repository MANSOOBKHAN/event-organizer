import React, { useState } from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Heart, Calendar, ArrowRight, Plus, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import '../styles/home.css';


const Home = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>
            Connecting People Across Faiths & Interests
          </h1>
          <p>
            Join our vibrant community where people from all walks of life come together to share, learn, and grow.
          </p>
          <div class = "hero-content-btn">
            <Link to="/events" className="cta-button">
              Explore Events <ArrowRight className="icon" />
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <motion.div
          className="feature-grid"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="feature-card">
            <Users className="feature-icon" />
            <h3>Connect with Community</h3>
            <p>Meet like-minded individuals and build meaningful relationships.</p>
          </div>
          <div className="feature-card">
            <Heart className="feature-icon" />
            <h3>Share Your Faith</h3>
            <p>Express and explore different spiritual perspectives in a welcoming environment.</p>
          </div>
          <div className="feature-card">
            <Calendar className="feature-icon" />
            <h3>Join Events</h3>
            <p>Participate in diverse events from religious ceremonies to social gatherings.</p>
          </div>
        </motion.div>
      </section>

      <section className="testimonials">
        <h2>What Our Community Says</h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <p>"{testimonial.text}"</p>
              <h4>{testimonial.name}</h4>
              <span>{testimonial.role}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-container">
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="faq-item"
                initial={{ opacity: 0, y: 22}}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <button
                  className={`faq-question ${openQuestion === index ? 'active' : ''}`}
                  onClick={() => toggleQuestion(index)}
                >
                  {faq.question}
                  <Plus className={`icon ${openQuestion === index ? 'rotate' : ''}`} />
                </button>
                <div className={`faq-answer ${openQuestion === index ? 'show' : ''}`}>
                  {faq.answer}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Join Our Community?</h2>
          <p>Discover events, connect with others, and be part of something meaningful.</p>
          <Link to="/events" className="cta-button secondary">
            Get Started Today <ArrowRight className="icon" />
          </Link>
        </motion.div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <Heart className="footer-logo" />
              <h3>Communion</h3>
              <p>Discover the power of connection with Communion. Uniting diverse communities through spirituality and innovation, we foster inclusivity, collaboration, and social cohesion for a better world.</p>
              <div className="social-links">
                <a href="#" aria-label="Facebook"><Facebook /></a>
                <a href="#" aria-label="Twitter"><Twitter /></a>
                <a href="#" aria-label="Instagram"><Instagram /></a>
                <a href="#" aria-label="YouTube"><Youtube /></a>
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Company</h4>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/communities">Communities</Link></li>
                  <li><Link to="/events">Events</Link></li>
                  <li><Link to="/leaders">Leaders</Link></li>
                  <li><Link to="/support">Support</Link></li>
                  <li><Link to="/profile">Profile</Link></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Contact</h4>
                <p className="contact-email">mansoobk90@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>Copyright © {new Date().getFullYear()}. All rights reserved to Sarosh</p>
            <div className="footer-legal">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const testimonials = [
  {
    name: "Sarosh Khan",
    role: "Founder and CEO",
    text: "Communion has helped me connect with amazing people who share my values and interests.",
    image: "https://media.licdn.com/dms/image/v2/D4D35AQGAWDle1Qcbbw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1695541508686?e=1742295600&v=beta&t=zklsbsOMA0UPyCHCAO6maVnzU5fuqjbpX_xcY_o0xzY"
  },
  {
    name: "Michael Chen",
    role: "Event Organizer and Manager",
    text: "This platform makes it so easy to create and manage events that bring people together.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "George Giri",
    role: "Faith Leader",
    text: "A wonderful space for interfaith dialogue and community building.",
    image: "data:image/jpeg;base64,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"
  }
];

const faqs = [
  {
    question: "What is the Communion app?",
    answer: "Communion is a platform designed to bring people together across different faiths and interests. It provides tools for organizing events, building communities, and fostering meaningful connections in both digital and physical spaces."
  },
  {
    question: "How does it promote social cohesion?",
    answer: "Through organized events, community gatherings, and digital connections, Communion creates opportunities for people from different backgrounds to meet, share experiences, and build lasting relationships. We facilitate interfaith dialogue and cultural exchange."
  },
  {
    question: "Is it free to use?",
    answer: "Yes, Communion is completely free to use! We believe in making community building and connection accessible to everyone. Create an account and start exploring events and communities today."
  },
  {
    question: "Can I meet new people?",
    answer: "Absolutely! Communion offers various ways to meet new people through events, community groups, and shared interests. Our platform is designed to facilitate meaningful connections in a safe and welcoming environment."
  },
  {
    question: "What if I have more questions?",
    answer: "We're here to help! You can reach out to our support team at contact@communionhub.org, and we'll be happy to assist you with any questions or concerns you may have."
  }
];


export default Home;
