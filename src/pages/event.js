import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Filter, Plus } from 'lucide-react';
import '../styles/event.css';

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [events, setEvents] = useState(initialEvents);

  const filteredEvents = selectedCategory === 'all'
    ? events
    : events.filter(event => event.category === selectedCategory);

  const handleAddEvent = (event: any) => {
    event.preventDefault();
    const newEvent = {
      id: events.length + 1,
      title: event.target.title.value,
      date: event.target.date.value,
      location: event.target.location.value,
      category: event.target.category.value,
      description: event.target.description.value,
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&h=450"
    };
    setEvents([...events, newEvent]);
    setShowForm(false);
  };

  return (
    <div className="events-page">
      <motion.div
        className="events-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Upcoming Events</h1>
        <button className="add-event-btn" onClick={() => setShowForm(true)}>
          <Plus size={20} /> Create Event
        </button>
      </motion.div>

      <div className="filters">
        <Filter size={20} />
        <button
          className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('all')}
        >
          All
        </button>
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        className="events-grid"
        layout
      >
        <AnimatePresence>
          {filteredEvents.map(event => (
            <motion.div
              key={event.id}
              className="event-card"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div className="event-image">
                <img src={event.image} alt={event.title} />
                <span className="event-category">{event.category}</span>
              </div>
              <div className="event-content">
                <h3>{event.title}</h3>
                <div className="event-details">
                  <p><Calendar size={16} /> {event.date}</p>
                  <p><MapPin size={16} /> {event.location}</p>
                </div>
                <p className="event-description">{event.description}</p>
                <button className="register-btn">Register Now</button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {showForm && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="event-form"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
          >
            <h2>Create New Event</h2>
            <form onSubmit={handleAddEvent}>
              <div className="form-group">
                <label htmlFor="title">Event Title</label>
                <input type="text" id="title" name="title" required />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" name="date" required />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input type="text" id="location" name="location" required />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select id="category" name="category" required>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" required></textarea>
              </div>
              <div className="form-actions">
                <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
                <button type="submit">Create Event</button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

const categories = ['Religious', 'Social', 'Charity', 'Educational', 'Cultural'];

const initialEvents = [
  {
    id: 1,
    title: "Interfaith Prayer Circle",
    date: "2025-03-15",
    location: "Community Center",
    category: "Religious",
    description: "Join us for an evening of shared prayer and meditation across different faiths.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&h=450"
  },
  {
    id: 2,
    title: "Community Food Drive",
    date: "2025-03-20",
    location: "Local Food Bank",
    category: "Charity",
    description: "Help us collect and distribute food to those in need in our community.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&h=450"
  },
  {
    id: 3,
    title: "Cultural Festival",
    date: "2025-03-25",
    location: "City Park",
    category: "Cultural",
    description: "Celebrate diversity through music, dance, food, and traditional performances.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&h=450"
  }
];

export default Events;
