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
      className="bg-gray-300 w-[100%] h-[600px] grid grid-cols-3 mt-2 mb-[10rem] pt-[6.5rem]"
      variants={cardMotion}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-[3.5rem] ml-10 mt-20">
        Formando condutores do futuro
      </h1>
    </motion.div>
  );
};

export default ImageTextCard;
