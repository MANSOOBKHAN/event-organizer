import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Globe, Sparkles, Award, Rocket } from 'lucide-react';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Our Mission & Vision</h1>
          <p>Building bridges across communities, fostering understanding, and creating meaningful connections.</p>
        </motion.div>
      </section>

      <section className="about-stats">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="about-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="value-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {value.icon}
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="about-story">
        <div className="story-content">
          <motion.div
            className="story-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Story</h2>
            <p>Founded in 2025, Communion emerged from a vision to create a platform where people from all walks of life could come together, share experiences, and build meaningful connections. We recognized the need for a space that transcends traditional boundaries and fosters genuine understanding among diverse communities.</p>
            <p>Today, we're proud to facilitate connections that bridge cultural gaps, promote interfaith dialogue, and create lasting friendships. Our journey is driven by the belief that when people come together with open hearts and minds, remarkable things happen.</p>
          </motion.div>
          <motion.div
            className="story-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&h=600" alt="Community gathering" />
          </motion.div>
        </div>
      </section>

      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="team-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="bio">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="about-join">
        <motion.div
          className="join-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Join Our Community</h2>
          <p>Be part of a growing movement that's bringing people together and making a difference.</p>
          <button className="join-button">Get Started Today</button>
        </motion.div>
      </section>
    </div>
  );
};

const stats = [
  { value: '50,000+', label: 'Active Members' },
  { value: '1,000+', label: 'Events Hosted' },
  { value: '100+', label: 'Communities' },
  { value: '30+', label: 'Countries Reached' }
];

const values = [
  {
    icon: <Heart className="value-icon" />,
    title: 'Inclusivity',
    description: 'We welcome everyone, celebrating our differences and finding common ground.'
  },
  {
    icon: <Users className="value-icon" />,
    title: 'Community',
    description: 'Building strong, supportive networks that enrich lives and foster growth.'
  },
  {
    icon: <Globe className="value-icon" />,
    title: 'Global Impact',
    description: 'Creating positive change that reaches across borders and cultures.'
  },
  {
    icon: <Sparkles className="value-icon" />,
    title: 'Innovation',
    description: 'Embracing new ideas and technologies to better serve our community.'
  },
  {
    icon: <Award className="value-icon" />,
    title: 'Excellence',
    description: 'Striving for the highest quality in everything we do.'
  },
  {
    icon: <Rocket className="value-icon" />,
    title: 'Growth',
    description: 'Fostering personal and collective development through shared experiences.'
  }
];

const team = [
  {
    name: 'Sarosh Khan',
    role: 'Founder & CEO',
    bio: 'Passionate about bringing communities together and fostering meaningful connections.',
    image: 'https://media.licdn.com/dms/image/v2/D4D35AQGAWDle1Qcbbw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1695541508686?e=1742295600&v=beta&t=zklsbsOMA0UPyCHCAO6maVnzU5fuqjbpX_xcY_o0xzY'
  },
  {
    name: 'Michael Chen',
    role: 'Event Organizer and manager ',
    bio: 'Dedicated to creating spaces where diverse voices can be heard and celebrated.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300'
  },
  {
    name: 'George Giri',
    role: '',
    bio: 'Expert in creating memorable experiences that bring people together.',
    image: 'data:image/jpeg;base64,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'
  }
];

export default About;
