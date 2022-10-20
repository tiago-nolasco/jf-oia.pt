import React from "react";
import styled from "styled-components";
import ListItems from "../components/ListItems";
import PresidentMessage from "../components/PresidentMessage";
import ContentSidebar from "../shared/components/ContentSidebar";
import Slider from "../components/Slider";
import { ContentTagEnum } from "../shared/services/api/model/ContentTagEnum";
import { Aside, Main, Spacer, ViewContainer } from "../styles/components/components";
import Contacts from "../components/Contacts/Contacts";
import Team from "../components/Team/Team";
import Address from "../components/Address";
import apiService from "../shared/services/api/api.service";
import { FormattedMessage } from "react-intl";

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
        <ListItems fn={apiService.getNews.bind(apiService)} title={<FormattedMessage id="last_news" defaultMessage="Notícias" />} /> {/* News */}
        <Spacer />
        <ListItems fn={apiService.getNotices.bind(apiService)} title={<FormattedMessage id="last_notices" defaultMessage="Avisos" />} /> {/* Notices */}
        <Spacer />
        <ListItems fn={apiService.getEvents.bind(apiService)} title={<FormattedMessage id="last_events" defaultMessage="Eventos" />} /> {/* Events */}
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
