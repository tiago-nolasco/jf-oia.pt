import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RenderHtml from "../shared/components/RenderHtml";
import apiService from "../shared/services/api/api.service";
import { ContentTagEnum } from "../shared/services/api/model/ContentTagEnum";
import { IContent } from "../shared/services/api/model/IContent";
import { IContentMedia } from "../shared/services/api/model/IContentMedia";
import { Image } from "../styles/components/components";
import { H1 } from "../styles/elements/elements";

const Message = styled.div`
  display: flex;
`;

const Text = styled.div`
  flex: 1;
`;

const PresidentImage = styled(Image)`
  width: 250px;
  margin-right: 20px;
`;

function PresidentMessage() {

  const [ title, setTitle ] = useState("");
  const [ message, setMessage ] = useState("");
  const [ image, setImage ] = useState({} as IContentMedia);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async (): Promise<void> => {
    const data: IContent = await apiService.getContent(ContentTagEnum.PRESIDENT_MESSAGE);
    const mainImage: IContentMedia = data.images?.find((image: IContentMedia) => image.main);

    setTitle(data.title);
    setMessage(data.description);
    setImage(mainImage);
  }

  const getPresidentImage = (): JSX.Element => {
    return image && <PresidentImage src={image.file} fullImage={image.showFullImage} height={300} />;
  }

  return <>
    <H1>{title}</H1>
    <Message>
      {getPresidentImage()}
      <Text>
        <RenderHtml value={message} />
      </Text>
    </Message>
  </>;
}

export default PresidentMessage;
