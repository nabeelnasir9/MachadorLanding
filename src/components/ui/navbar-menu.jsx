import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const MenuItem = ({ setActive, active, item, children }) => (
  <div onMouseEnter={() => setActive(item)} className="relative">
    <motion.p
      transition={{ duration: 0.3 }}
      className="cursor-pointer text-black hover:opacity-[0.9] dark:text-black font-semibold"
    >
      {item}
    </motion.p>
    {active !== null && (
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={transition}
      >
        {active === item && (
          <div className="absolute top-[calc(100%_+_1.7rem)] left-1/2 transform -translate-x-1/2">
            <motion.div
              transition={transition}
              layoutId="active"
              className="bg-gradient-to-r from-blue-400 to-teal-500 dark:bg-gradient-to-r from-blue-600 to-teal-400 backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
            >
              <motion.div layout className="w-max h-full p-4">
                {children}
              </motion.div>
            </motion.div>
          </div>
        )}
      </motion.div>
    )}
  </div>
);

const Menu = ({ setActive, children }) => (
  <nav
    onMouseLeave={() => setActive(null)}
    className="relative boder border-transparent dark:border-white/[0.2] shadow-input flex justify-around items-center space-x-4 px-8 py-3 bg-transparent shadow-md"
  >
    {children}
  </nav>
);

const ProductItem = ({ title, description, href, src }) => (
  <Link href={href} className="flex space-x-2">
    <Image
      src={src}
      width={140}
      height={70}
      alt={title}
      className="flex-shrink-0 rounded-md shadow-2xl"
    />
    <div>
      <h4 className="text-xl font-bold mb-1 text-white dark:text-white">
        {title}
      </h4>
      <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
        {description}
      </p>
    </div>
  </Link>
);

const HoveredLink = ({ children, ...rest }) => (
  <Link
    {...rest}
    className="text-neutral-700 dark:text-neutral-200 hover:text-black"
  >
    {children}
  </Link>
);

export { MenuItem, Menu, ProductItem, HoveredLink };
