import React from "react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Image from "next/image";

export function ThreeDCardDemo() {
  // Dummy data for five cards
  const cardsData = [
    {
      title: "Make things float in air",
      description: "Hover over this card to unleash the power of CSS perspective",
      imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Make things float in air",
        description: "Hover over this card to unleash the power of CSS perspective",
        imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Make things float in air",
        description: "Hover over this card to unleash the power of CSS perspective",
        imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Make things float in air",
        description: "Hover over this card to unleash the power of CSS perspective",
        imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Make things float in air",
        description: "Hover over this card to unleash the power of CSS perspective",
        imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                  <Image src={card.imageUrl} height="300" width="300" layout="responsive" className="object-cover rounded-xl" alt="thumbnail" />
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
