"use client";
import styled from "styled-components";

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
      <Image src="https://example.com/image.jpg" />
      <Description>Descrição do Card</Description>
    </div>
  );
};

export default Card;
