import { useState } from 'react';
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { motion } from "framer-motion";


// const faqs = [
//   { id: 1,
//     question: 'Is Machador free to use?',
//     answer: 'We offer a free but limited version. You can get access to 50 messages per month and upgrade at any time if you need more.',
//     image: '/ico.png',
//   },
//   {id: 2,
//     question: 'How Accurate are the answers from Machador?',
//     answer: 'The accuracy of answers from Machador depends on the quality and relevance of the training data provided by you. With proper training, Machador can provide accurate responses to customer queries in seconds. However, its important to note that as an AI model, it may occasionally generate incorrect or incomplete answers, especially when faced with ambiguous or unfamiliar questions. Ongoing monitoring and updates to the training data can help improve the accuracy over time.',
//     image: '/ico1.png',
//   },
//   {id: 3,
//     question: 'Have your 24/7 assistant',
//     answer: 'Once trained, your AI assistant is ready to work for you 24/7, handling tasks and queries.',
//     image: '/ico2.png',
//   },
//   {id: 4,
//     question: 'Can i use GPT-4?',
//     answer: 'Yes, GPT-4 is available on the custom plan however we recommend sticking to GPT-3.5 for now as its faster and more accurate.',
//     image: '/log-1.png',
//   },
// ];

// const HowItWorks = () => {
//   const [activeIndex, setActiveIndex] = useState(null); // To track the active FAQ

//   const toggleFAQ = (index) => {
//     setActiveIndex(index === activeIndex ? null : index); // Toggle active FAQ
//   };

//   return (
//     <div className={styles.Faqscontainer}>
//         <h1
//               className="text-xl font-semibold text-black dark:text-black mb-4"
              
//             >
//             FREQUENTLY ASKED QUESTIONS <br />
//               <span className="text-2xl md:text-[4rem] font-bold mt-1 mb-2 leading-none" style={{
//                 background:
//                   "linear-gradient(27deg, rgba(16,163,209,1) 0%, rgba(0,213,187,1) 100%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}>
//                 Got Questions? Try Our Demo!
//               </span>
//               </h1>
//       <div className={styles.content}>
//         <div className={styles.faqSection}>
//           {faqs.map((faq, index) => (
//             <div key={index} className={styles.faqsItem} onClick={() => toggleFAQ(index)}>
//                 <div className={styles.faqQuestions}>
//                     <div style={{display:'flex', gap:'30px'}}>
               
//               <div className={styles.question}>{faq.question}</div>
//               </div>
//               <div>
//               <FaPlus />
//               </div>
//               </div>
//               <div className={`${styles.answers} ${activeIndex === index ? styles.active : styles.inactive}`}>{faq.answer}</div>            </div>
//           ))}
//           <div>
    
// </div>
//         </div>
       
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;

export default function HowItWorks() {
const defaultContent =
"Here is the content of the accordion. You can put any elements here.";
return (
<section className="relative max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8 flex flex-col justify-center items-center">
  <motion.div
    initial={{ y: 5, opacity: 0 }}
    whileInView={{
      y: 0,
      opacity: 1,
    }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay: 0.5 }}
    className="flex flex-col gap-3 justify-center items-center"
  >
    <h4 className="text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-black bg-clip-text">
      FAQ
    </h4>
    <p className="max-w-xl text-black text-center">
      Here are some of our frequently asked questions. If you have any other
      questions you’d like answered please feel free to email us.
    </p>
  </motion.div>
  <motion.div
    initial={{ y: 5, opacity: 0 }}
    whileInView={{
      y: 0,
      opacity: 1,
    }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay: 1 }}
    className="max-w-2xl w-full border border-foreground/50 rounded-md p-1 text-black text-left"
  >
    <Accordion
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            transition: {
              height: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 1,
              },
              opacity: {
                easings: "ease",
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            transition: {
              height: {
                easings: "ease",
                duration: 0.25,
              },
              opacity: {
                easings: "ease",
                duration: 0.3,
              },
            },
          },
        },
      }}
    >
      <AccordionItem key="1" aria-label="Hello Nabeel?" title="Hello Nabeel?" className="text-left">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="¿Why NextUI?" title="¿Why NextUI?" className="text-left">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="¿Why NextUI?" title="¿Why NextUI?" className="text-left">
        {defaultContent}
      </AccordionItem>
    </Accordion>
  </motion.div>
  <div className="absolute w-40 h-40 border bg-light -left-28 top-0 blur-[200px]"></div>
</section>
);
    }