'use client';

const DifferencesCard = () => {
	const textos = [
		'Nós oferecemos cursos para primeira habilitação nas categorias A, B, AB e C',
		'Possuímos avaliação de 4,7 na internet.',
		'Aulas mais flexíveis, agora nossa grade de aula é completamente EAD com horários flexíveis para o seu tempo.',
		'Instrutores qualificados, experientes e pacientes, que garantem um aprendizado de qualidade.',
		'Atendimento personalizado a equipe da auto escola está sempre disponível para auxiliar os alunos em todas as etapas do processo de habilitação.'
	];
	return (
		<div className='flex flex-col items-center w-[80vw] mt-[30px]'>
			<p className='mb-16 text-3xl'>Nossos Diferenciais</p>
			<div className='grid grid-cols-2 gap-4 '>
				{textos &&
					textos.length > 0 &&
					textos?.map((texto) => (
						<div
							className='flex flex-row gap-2 h-[120px] border-solid-gray-300 border-4 p-2 rounded-[1rem]'
							key={texto}
						>
							<p className='text-[20px]'>{texto}</p>
						</div>
					))}
			</div>
		</div>
	);
};

export default DifferencesCard;
