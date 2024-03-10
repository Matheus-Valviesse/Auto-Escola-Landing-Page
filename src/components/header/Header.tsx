'use client';
import Link from 'next/link';

const Header = () => {
	return (
		<div className='fixed top-0 left-0 p-0 w-[100%] bg-white z-50 shadow-md mb-[10rem] '>
			<div className='container mx-auto px-4 py-6 flex justify-between items-center'>
				<Link href={`/`}>
					<h1 className='text-[30px]'>Auto Escola Méier</h1>
				</Link>

				<div className='flex gap-8'>
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
		</div>
	);
};

export default Header;
