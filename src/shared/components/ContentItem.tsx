import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Image } from "../../styles/components/components";
import { H2 } from "../../styles/elements/elements";
import { Colors } from "../../styles/settings/colors";
import { IContent } from "../services/api/model/IContent";
import { IContentMedia } from "../services/api/model/IContentMedia";
import RenderHtml from "./RenderHtml";

interface IHtmlProps {
  item: IContent;
}

const ItemContainer = styled.div`
  padding: 15px;
`;

const ItemImage = styled(Image)`
  border: 1px solid ${Colors.GRAY_100};
`;

function ContentItem(props: IHtmlProps) {

  const [image, setImage] = useState({} as IContentMedia);

  useEffect(() => {
    loadMainImage();
  }, [props.item]);

  const loadMainImage = (): void => {
    const mainImage: IContentMedia = props.item.images?.find(
      (image: IContentMedia) => image.main
    );
    setImage(mainImage);
  }

  const getImage = (): JSX.Element => {
    return image && <ItemImage src={image.file} fullImage={image.showFullImage} height={200} />;
  }

  return <>
    <ItemContainer>
      {getImage()}
      <H2>{props.item.title}</H2>
      <RenderHtml value={props.item.summary} />
    </ItemContainer>
    </>;
}

export default ContentItem;
