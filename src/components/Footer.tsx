import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootStateType } from "../store/model/RootStateType";
import { Spacer } from "../styles/components/components";
// import { Image } from "../styles/components/components";
import { Colors } from "../styles/settings/colors";

const FooterContainer = styled.div`
  position: relative;
  padding: 10px 0;
  font-size: 12px;
  text-align: center;
  background: ${Colors.GRAY_100};
  color: ${Colors.GRAY_20};
`;

const UnderConstruction = styled.div`
  position: relative;
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  background: linear-gradient(45deg, ${Colors.HOKEY_POKEY}, ${Colors.SALOMIE}, ${Colors.HOKEY_POKEY});
  color: ${Colors.GRAY_100};
`;

// const I9design = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   height: 0;
// `;

function Footer() {

  const i18n = useSelector((state: RootStateType) => state.i18n);

  return <>
    <FooterContainer>
      {i18n.signature}
      {/* <I9design>
        2021/2022
        <Image />
      </I9design> */}
    </FooterContainer>
    <Spacer height={10} />
    <UnderConstruction>WEBSITE EM CONSTRUÇÃO</UnderConstruction>
  </>;
}

export default Footer;
