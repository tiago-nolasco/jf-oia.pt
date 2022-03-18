import styled from "styled-components";
import { Colors } from "../settings/colors";

export const H1 = styled.h1`
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  border-bottom: 1px solid ${Colors.GRAY_90};
  line-height: 100%;
`;

export const H2 = styled.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Hr = styled.hr`
  border: 0;
  border-bottom: 1px solid ${Colors.GRAY_20};
  margin: 10px 0;
`;
