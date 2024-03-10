'use client';
import styled from 'styled-components';

const CardStyle = styled.div`
	width: 300px;
	height: 200px;
	border: 1px solid #ccc;
	border-radius: 4px;
	padding: 16px;
	margin: 16px;
`;

const Title = styled.h2`
	font-size: 18px;
	font-weight: bold;
`;

const Image = styled.img`
	width: 100px;
	height: 100px;
`;

const Description = styled.p`
	font-size: 16px;
`;

const Card = () => {
	return (
		<div>
			<Title>Título do Card</Title>
			<Image src='https://example.com/image.jpg' />
			<Description>Descrição do Card</Description>
		</div>
	);
};

export default Card;
