"use client";
import { motion } from "framer-motion";
const ImageTextCard = () => {
  const cardMotion = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="bg-gray-300 w-[100%] h-[450px] grid grid-cols-2 mb-8 pt-6"
      variants={cardMotion}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-[4.5rem] ml-10">
        Formando condutores a mais de 40 anos
      </h1>
    </motion.div>
  );
};

export default ImageTextCard;
