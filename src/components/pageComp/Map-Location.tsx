import { FaWhatsapp } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
const MapLocation = () => {
	return (
		<div className='w-[100vw] bg-gray-200 flex flex-col items-center'>
			<div className=' w-[80vw]  flex p-4 gap-10 mt-[60px] mb-[60px]'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.610172650703!2d-43.33908672380493!3d-22.96457953994081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd9299b397579%3A0xfa29f5b7bb31ee7e!2sAutoescola%20Anil%20%7C%20Mr%20Rocha!5e0!3m2!1spt-BR!2sbr!4v1710271879546!5m2!1spt-BR!2sbr'
					width='400'
					height='350'
					loading='lazy'
				></iframe>
				<div className='flex-1'>
					<p className='text-3xl'>Como nos encontrar?</p>

					<p className='mt-8 mb-4'>
						Estamos endereçados na xxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxx
						xxxxx xx xxx xxxxxxxxxxxxxxxxxxx xxxxxxxxx xxxxxxxxxx xxxxxxx .
					</p>

					<p>
						Caso esteja usando o celular só clicar no mapa para ter a nossa
						localização exata.
					</p>
					<div className='mt-4 w-[100%]'>
						<p className='text-2xl'>Contato</p>
						<div className='flex flex-col mt-4 gap-2 '>
							<div className='flex items-center bg-green-400 cursor-pointer p-2 rounded-[0.6rem] max-w-[16rem]'>
								<FaWhatsapp className='text-[2.1rem] text-green-100 mr-2' />
								<p className='text-[1.4rem] text-white'> 21 99999-9999</p>
							</div>

							<div className='flex items-center bg-red-500 cursor-pointer p-2 rounded-[0.6rem] max-w-[16rem]'>
								<FaInstagram className='text-[2.1rem] text-red-100 mr-2' />
								<p className='text-[1.4rem] text-white'> @autoescolaMR</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MapLocation;
