import { createGlobalStyle, css } from "styled-components";
import { Colors } from "../settings/colors";
import { Fonts } from "../settings/fonts";

const globals = css`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: "${Fonts.PRIMARY}";
    font-weight: 300;
    font-size: 14px;
    color: ${Colors.GRAY_100};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  b{
    font-weight: 600;
  }
`;

const GenericStyles = createGlobalStyle`
  ${globals}
`;

export default GenericStyles;
