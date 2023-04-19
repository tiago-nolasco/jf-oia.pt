import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ListItems from "../components/ListItems";
import PresidentMessage from "../components/PresidentMessage";
import ContentSidebar from "../shared/components/ContentSidebar";
import Slider from "../components/Slider";
import { ContentTagEnum } from "../shared/services/api/model/ContentTagEnum";
import {
  Aside,
  Main,
  Spacer,
  ViewContainer,
} from "../styles/components/components";
import Contacts from "../components/Contacts/Contacts";
import Team from "../components/Team/Team";
import Address from "../components/Address";
import apiService from "../shared/services/api/api.service";
import { FormattedMessage } from "react-intl";
import { IContent } from "../shared/services/api/model/IContent";
import { IContentMedia } from "../shared/services/api/model/IContentMedia";
import { Link } from "react-router-dom";

const MainSlider = styled(Slider)`
  margin: 10px 0;
`;

function Home() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async (): Promise<void> => {
    const data: IContent = await apiService.getContent(
      ContentTagEnum.HEADER_IMAGES
    );
    const mainImage: IContentMedia = data.images?.find(
      (image: IContentMedia) => image.main
    );

    setImages([mainImage.file]);
  };

  const defaultImages: string[] = ["./assets/images/banner.jpg"];

  return (
    <>
      {images.length > 0 ? (
        <MainSlider images={images} />
      ) : (
        <MainSlider images={defaultImages} />
      )}
      <Spacer />
      <ViewContainer>
        <Main>
          <PresidentMessage />
          <Spacer />
          <ListItems
            fn={apiService.getNews.bind(apiService)}
            title={
              <FormattedMessage id="last_news" defaultMessage="Notícias" />
            }
          />{" "}
          {/* News */}
          <Spacer />
          <ListItems
            fn={apiService.getNotices.bind(apiService)}
            title={
              <FormattedMessage id="last_notices" defaultMessage="Avisos" />
            }
          />{" "}
          {/* Notices */}
          <Spacer />
          <ListItems
            fn={apiService.getEvents.bind(apiService)}
            title={
              <FormattedMessage id="last_events" defaultMessage="Eventos" />
            }
          />{" "}
          {/* Events */}
        </Main>
        <Aside>
          <ContentSidebar tag={ContentTagEnum.VIDEO_INSTITUCIONAL} />
          <Spacer />
          <ContentSidebar tag={ContentTagEnum.BALCAO_VIRTUAL} />
          <Spacer />
          <Link to="/ocorrencias"><ContentSidebar tag={ContentTagEnum.REPORTAR_INCIDENTE} /></Link>
          <Spacer />
          <iframe src="https://jf-oia.pt/pages/app.html" width="100%" height="300px" frameBorder="0" />
        </Aside>
      </ViewContainer>
      <Spacer />
      <Team />
      <Spacer />
      <Contacts />
      <Spacer />
      <Address />
    </>
  );
}

export default Home;
