import React from "react";
import styled from "styled-components";
import { Image } from "../styles/components/components";

interface ISliderProps {
  images: string[];
}

const Container = styled.div`
  width: 100%;
`;

function Slider(props: ISliderProps) {
  return (
    <Container>
      {props.images.map((img: string, index: number) => <Image key={`slider-image-${index}`} src={img} />)}
    </Container>
  );
}

export default Slider;
