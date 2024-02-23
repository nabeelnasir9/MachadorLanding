// components/FAQ.js
import React, { useState } from 'react';

const faqs = [
  { question: 'What is Next.js?', answer: 'Next.js is a React framework for production.' },
  { question: 'Why use Next.js?', answer: 'Next.js provides features like server-side rendering and generating static websites for React based web applications.' },
  // Add more FAQs here
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={styles.faqContainer}>
      {faqs.map((faq, index) => (
        <div key={index} style={styles.faqItem}>
          <div onClick={() => toggleFAQ(index)} style={styles.question}>
            {faq.question}
            <span style={styles.icon}>{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && <div style={styles.answer}>{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

// Basic styles
const styles = {
  faqContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
  },
  faqItem: {
    marginBottom: '10px',
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px',
    color: 'black'
  },
  question: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
    color:'black'
  },
  answer: {
    paddingTop: '10px',
  },
  icon: {
    fontSize: '24px',
  },
};

export default FAQ;
