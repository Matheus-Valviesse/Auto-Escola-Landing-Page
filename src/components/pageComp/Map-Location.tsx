const MapLocation = () => {
  return (
    <div className="w-[100vw] bg-gray-200 flex flex-col items-center mt-20">
      <div className=" w-[80vw]  flex p-4 gap-10 mt-[30px] mb-[30px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1837.659701741716!2d-43.28088427066428!3d-22.901587000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997dba8d0f8907%3A0xadeb4739270baada!2sAuto%20Escola%20M%C3%A9ier!5e0!3m2!1spt-PT!2sbr!4v1710102383287!5m2!1spt-PT!2sbr"
          className="w-[500px] h-[400px] flex-1"
          loading="lazy"
        ></iframe>
        <div className="flex-1">
          <p className="text-3xl">Como nos encontrar?</p>

          <p className="mt-8 mb-4">
            Estamos endereçados na Rua silva Rabêlo n° 10 no segundo danda do
            Edificio Cidade do Méier, ao lado a da estção de trem Méier.
          </p>

          <p>
            Caso esteja usando o celular só clicar no mapa para ter a
            localização exata.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapLocation;
