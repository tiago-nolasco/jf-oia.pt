import React from "react";
import styled from "styled-components";
import News from "../components/News";
import Notices from "../components/Notices";
import PresidentMessage from "../components/PresidentMessage";
import ContentSidebar from "../shared/components/ContentSidebar";
import Slider from "../components/Slider";
import { ContentTagEnum } from "../shared/services/api/model/ContentTagEnum";
import { Aside, Main, Spacer, ViewContainer } from "../styles/components/components";
import Contacts from "../components/Contacts/Contacts";
import Team from "../components/Team/Team";
import Address from "../components/Address";

const MainSlider = styled(Slider)`
  margin: 10px 0;
`;

function Home() {

  const sliderImages: string[] = [
    "./assets/images/banner.jpg",
  ];

  return <>
    <MainSlider images={sliderImages} />
    <Spacer />
    <ViewContainer>
      <Main>
        <PresidentMessage />
        <Spacer />
        <News />
        <Spacer />
        <Notices />
      </Main>
      <Aside>
        <ContentSidebar tag={ContentTagEnum.VIDEO_INSTITUCIONAL} />
        <Spacer />
        <ContentSidebar tag={ContentTagEnum.BALCAO_VIRTUAL} />
        <Spacer />
        <ContentSidebar tag={ContentTagEnum.REPORTAR_INCIDENTE} />
      </Aside>
    </ViewContainer>
    <Spacer />
    <Team />
    <Spacer />
    <Contacts />
    <Spacer />
    <Address />
  </>;
}

export default Home;
