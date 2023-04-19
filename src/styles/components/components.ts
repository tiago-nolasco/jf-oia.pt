import styled from "styled-components";
import { Breakpoints } from "../settings/breakpoints";

export const Main = styled.div``;

export const Aside = styled.div``;

export const ViewContainer = styled.div`
  display: flex;

  & > ${Main} {
    width: 75%;
    padding-right: 20px;

    @media only screen and (max-width: ${Breakpoints.LG}) {
      width: 100%;
    }
  }
  & > ${Aside} {
    width: 25%;
    padding-left: 20px;

    @media only screen and (max-width: ${Breakpoints.LG}) {
      display: none;
    }
  }
`;

interface ISpacerProps {
  width?: number;
  height?: number;
}
export const Spacer = styled.div<Partial<ISpacerProps>>`
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  height: ${(props) => props.height || 20}px;
`;

interface IImageProps {
  src: string;
  fullImage?: boolean;
  width?: string;
  height?: number;
}
export const Image = styled.div<Partial<IImageProps>>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "250"}px;
  background: url(${(props) => props.src}) no-repeat center center;
  background-size: ${(props) => (props.fullImage ? "contain" : "cover")};
`;

interface IFlexProps {
  flowColumn?: boolean;
}
export const Flex = styled.div<Partial<IFlexProps>>`
  display: flex;
  flex-flow: ${(props) => (props.flowColumn && "column") || "row"};
`;
