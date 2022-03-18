import styled from "styled-components";

interface IItemImageProps {
  width: number;
}

export const ItemImage = styled.img<Partial<IItemImageProps>>`
  width: 100%;
  max-width: ${props => props.width || 100}px;
`;
