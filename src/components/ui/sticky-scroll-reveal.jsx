import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { BsDatabaseFillGear } from "react-icons/bs";
import { FaExpeditedssl } from "react-icons/fa";
import { BiSolidConversation } from "react-icons/bi";
import Image from 'next/image';


export const StickyScroll = ({ content }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    console.log("Breakpoints:", cardsBreakpoints);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        console.log("Activating card:", index); // Debug activation
        setActiveCard(() => index);
      }
    });
  });

  // const backgroundColors = [
  //   "linear-gradient(to right, var(--slate-900), var(--slate-700))",
  //   "linear-gradient(to right, var(--black), var(--gray-900))",
  //   "linear-gradient(to right, var(--neutral-900), var(--neutral-700))"
  // ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--emerald-500), var(--cyan-500))",
    "linear-gradient(to top right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom left, var(--cyan-500), var(--emerald-500))",
  ];
  const images = [
    // <IoDocumentAttachSharp color="white" size={150} />,
    // <BsDatabaseFillGear color="white" size={150} />,
    // <FaExpeditedssl color="white" size={150} />,
    // <BiSolidConversation color="white" size={150} />,
    "/data.png",
    "/data1.png",
    "/data3.png",
    "/data.png",
  ];

  return (
    <motion.div
      animate={{
        background: linearGradients[activeCard % linearGradients.length],
        transition: "ease-in-out duration-1000",
      }}
      className="h-[40rem] overflow-y-auto flex justify-evenly relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-[20rem]">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-white max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      {/* <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className="hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden"
      ></motion.div> */}
      <motion.div className="hidden lg:flex h-80 w-[30rem] justify-center items-center rounded-md sticky top-10 overflow-hidden">
      {images[activeCard % images.length] && (
          <Image
            src={images[activeCard % images.length]}
            alt="Content Image"
            width={450} // Set your desired width
            height={450} // Set your desired height
            objectFit="cover" // Adjust according to your needs
          />
        )}
      </motion.div>
    </motion.div>
  );
};
