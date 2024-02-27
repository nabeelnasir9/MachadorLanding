import { useState } from 'react';
import styles from './Render.module.css'; 
import { FaArrowRightLong } from "react-icons/fa6";

const faqs = [
  {
    id: 1,
    question: 'Add your data sets',
    answer: 'Start by adding your structured or unstructured data sets into the system.',
    image: '/oop.png',
  },
  {
    id: 2,
    question: 'Train the AI Now',
    answer: 'Use our tools to train the AI on your data, customizing it for your needs.',
    image: '/oop2.png',
  },
  {
    id: 3,
    question: 'Have your 24/7 Clone',
    answer: 'Once trained, your AI assistant is ready to work for you 24/7, handling tasks and queries.',
    image: '/oop3.png',
  },
  {
    id: 4,
    question: 'Monitor and Improve',
    answer: 'Continuously monitor performance and make improvements to keep your AI assistant at peak efficiency.',
    image: '/oop4.png',
  },
];

const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0); 

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index); 
  };

  return (
    <div className={styles.container}>
      <h1 className="text-xl font-semibold text-black dark:text-black mb-4">
        How it works <br />
        <span className="text-2xl md:text-[4rem] font-bold mt-1 mb-2 leading-none" style={{
          background: "linear-gradient(27deg, rgba(16,163,209,1) 0%, rgba(0,213,187,1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          Have your clone in minutes!
        </span>
      </h1>
      <div className={styles.content}>
        <div className={styles.faqSection}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem} onClick={() => toggleFAQ(index)}>
              <div className={styles.faqQuestions}>
                <div style={{display:'flex', gap:'30px'}}>
                  <div className={styles.IdNumber} style={{
                    background: "linear-gradient(27deg, rgba(16,163,209,1) 0%, rgba(0,213,187,1) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>{faq.id}</div>
                  <div className={styles.question}>{faq.question}</div>
                </div>
                <div>
                  <FaArrowRightLong />
                </div>
              </div>
              <div className={`${styles.answer} ${activeIndex === index ? styles.active : styles.inactive}`}>{faq.answer}</div>
            </div>
          ))}
          <div>
            <button className={styles.btn}><i className={styles.animation}></i>Get your assistant<i className={styles.animation}></i></button>
          </div>
        </div>
        <div className={styles.imageSection}>
          <img src={faqs[activeIndex !== null ? activeIndex : 0].image} alt="FAQ Illustration" className={styles.faqImage} />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
