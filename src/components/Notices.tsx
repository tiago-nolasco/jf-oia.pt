import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import ContentItem from "../shared/components/ContentItem";
import apiService from "../shared/services/api/api.service";
import { IContent } from "../shared/services/api/model/IContent";
import { H1 } from "../styles/elements/elements";

const NoticesContent = styled.div`
  display: flex;
`;

function Notices() {

  const [ notices, setNotices ] = useState([] as IContent[]);

  useEffect(() => {
    loadNotices();
  }, []);

  const loadNotices = async (): Promise<void> => {
    const data: IContent[] = await apiService.getNotices();
    setNotices(data);
  }

  return <>
    <H1><FormattedMessage id="notices_edicts" defaultMessage="Avisos" /></H1>
    <NoticesContent>
      {notices.map((item: IContent, index: number) => (
        <ContentItem key={`list-news-${index}`} item={item} />
      ))}
    </NoticesContent>
  </>;
}

export default Notices;
