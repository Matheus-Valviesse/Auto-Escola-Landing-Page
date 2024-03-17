'use client';
import { motion } from 'framer-motion';
const ImageTextCard = () => {
	const cardMotion = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1
		}
	};

	return (
		<motion.div
			className='bg-gray-300 w-[100%] h-[600px] grid grid-cols-2 mt-2 mb-[10rem] pt-[6.5rem]'
			variants={cardMotion}
			initial='hidden'
			animate='visible'
		>
			<div className='ml-10 flex flex-col gap-6'>
				<h1 className='text-[3.5rem]  mt-10'>Formando condutores do futuro!</h1>
				<p className='text-[1.rem]'>
					Tire sua habilitação na RM e conquiste sua liberdade.
				</p>
				<div className='flex w-{100}'>
					<button className='bg-blue-300 px-6 py-2 rounded-[0.6rem]'>
						Matricule-se agora
					</button>
				</div>
			</div>
		</motion.div>
	);
};

export default ImageTextCard;
