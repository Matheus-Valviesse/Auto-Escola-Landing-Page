"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ReasonCard = () => {
  const textos = [
    "Nós oferecemos cursos para primeira habilitação nas categorias A, B, AB e C",
    "Possuímos avaliação de 4,7 na internet.",
    "Aulas mais flexíveis, agora nossa grade de aula é completamente EAD com horários flexíveis para o seu tempo.",
    "Instrutores qualificados, experientes e pacientes, que garantem um aprendizado de qualidade.",
    "Atendimento personalizado a equipe da auto escola está sempre disponível para auxiliar os alunos em todas as etapas do processo de habilitação.",
  ];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  // Use a ref para acessar o componente e detectar sua visibilidade
  const { ref, inView } = useInView({
    triggerOnce: true, // para disparar a animação apenas uma vez
    threshold: 1, // ajuste conforme necessário
  });

  return (
    <motion.div
      className="flex flex-col items-center w-[80vw] mb-[10rem]"
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Inicie a animação apenas quando o componente estiver visível
      ref={ref} // Associe a ref ao componente
    >
      <p className="mb-16 text-3xl">Mais por que nos escolher?</p>
      <div className="grid grid-cols-2 gap-4 ">
        {textos &&
          textos.length > 0 &&
          textos?.map((texto) => (
            <motion.div
              className="flex flex-row items-center gap-2 h-[100px]"
              key={texto}
              variants={item}
            >
              <div className="bg-gray-300 h-[100%]">
                <div className="opacity-0 text-[20px]">_</div>
              </div>
              <p className="text-[20px]">{texto}</p>
            </motion.div>
          ))}
      </div>
    </motion.div>
  );
};

export default ReasonCard;
