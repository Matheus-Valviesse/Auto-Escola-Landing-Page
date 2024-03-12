"use client";
import Link from "next/link";
import { motion } from "framer-motion";
const Nav = () => {
  const cardMotion = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 p-0 w-[100%] bg-white z-50 shadow-md mb-[10rem] "
      variants={cardMotion}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href={`/`}>
          <h1 className="text-[30px]">MR Rocha Auto Escola</h1>
        </Link>

        <div className="flex gap-8">
          <Link href={``}>
            <p>Unidade</p>
          </Link>
          <Link href={``}>
            <p>Sobre nós</p>
          </Link>
          <Link href={``}>
            <p>Contato</p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
