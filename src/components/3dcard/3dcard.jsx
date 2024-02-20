import React from "react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Image from "next/image";

export function ThreeDCardDemo() {
  // Dummy data for five cards
  const cardsData = [
    {
      title: "Accelerate User Growth",
      description: "AI-driven insights and personalization power exponential growth in your user base, ensuring rapid scaling of your SaaS platform.",
      imageUrl: "/log1.png",
    },
    {
        title: "Cut Onboarding Time",
        description: "Reduce the median time to onboard users drastically, thanks to intuitive AI-guided processes that make initial setup a breeze.",
        imageUrl: "/log2.png",
      },
      {
        title: "Actionable Analytics",
        description: "Leverage the power of AI to gain real-time insights into user behavior, enhancing decision-making and strategy planning.",
        imageUrl: "/log6.png",
      },
      {
        title: "Boost User Engagement",
        description: "Enhance user engagement through AI-powered customization and interactive onboarding experiences tailored to each user.",
        imageUrl: "/log3.png",
      },
      {
        title: "Improve Retention Rates",
        description: "AI Onboarding helps in retaining users by offering continuous learning and adaptation to user needs, significantly improving retention rates",
        imageUrl: "/log4.png",
      },
      {
        title: "Decrease Support Queries",
        description: "Minimize the need for user support by solving common queries with an AI-driven knowledge base, reducing support tickets drastically",
        imageUrl: "/log5.png",
      },
      
    // Add 4 more card data objects here...
  ];

  return (
   <div className="overflow-hidden">
      <motion.div
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }} // Adjust based on the total width of your cards
        className="flex cursor-grab select-none"
        style={{ width: "fit-content" }}
      >
        {cardsData.map((card, index) => (
          <motion.div key={index} className="min-w-[300px] mx-2 p-4" style={{ flex: "0 0 auto" }}>
            <CardContainer>
              <CardBody className="bg-gray-50 relative group dark:hover:shadow-2xl dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border shadow-lg">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  {card.title}
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  {card.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image src={card.imageUrl} height="100" width="100" layout="responsive" className="object-cover rounded-xl" alt="thumbnail" />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                    Try now →
                  </CardItem>
                  <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
