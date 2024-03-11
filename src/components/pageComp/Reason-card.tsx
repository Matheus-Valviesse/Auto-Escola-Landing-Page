"use client";
import { useRef } from "react";

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
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    console.log("aqui");
    let scrollTop;
    if (containerRef.current != null)
      scrollTop = containerRef.current.scrollTop;
    console.log("Valor do scroll vertical:", scrollTop);
  };

  return (
    <div
      className="flex flex-col items-center w-[80vw]"
      ref={containerRef}
      onScroll={handleScroll}
    >
      <p className="mb-16 text-3xl">Mais por que nos escolher?</p>
      <div className="grid grid-cols-2 gap-4 ">
        {textos &&
          textos.length > 0 &&
          textos?.map((texto) => (
            <div
              className="flex flex-row items-center gap-2 h-[100px]"
              key={texto}
            >
              <div className="bg-gray-300 h-[100%]">
                <div className="opacity-0 text-[20px]">_</div>
              </div>
              <p className="text-[20px]">{texto}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReasonCard;
