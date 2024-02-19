// import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { FaArrowCircleDown, FaBeer, FaAnchor } from 'react-icons/fa';
// import styles from './HowItWorks.module.css';

// const HowItWorks = () => {
//   const { ref, inView } = useInView({
//     threshold: 0.1,
//     triggerOnce: true,
//   });

//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.6, // Delay between each child animation
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 },
//     },
//   };

//   return (
//     <div ref={ref} className={styles.container}>
//       <motion.div className={styles.lineContainer}>
//         <motion.div
//           className={styles.line}
//           initial={{ width: 0 }}
//           animate={{ width: inView ? '100%' : '0%', transition: { duration: 1 } }}
//         />
//       </motion.div>
//       <AnimatePresence>
//         {inView && (
//           <motion.div
//             className={styles.items}
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             <motion.div className={styles.item} variants={itemVariants}>
//               <FaArrowCircleDown className={styles.icon} />
//               <p className={styles.text}>First Item</p>
//             </motion.div>
//             <motion.div className={styles.item} variants={itemVariants}>
//               <FaBeer className={styles.icon} />
//               <p className={styles.text}>Second Item</p>
//             </motion.div>
//             <motion.div className={styles.item} variants={itemVariants}>
//               <FaAnchor className={styles.icon} />
//               <p className={styles.text}>Third Item</p>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default HowItWorks;
import React from 'react'

const HowItWorks = () => {
  return (
    <div>HowItWorks</div>
  )
}

export default HowItWorks