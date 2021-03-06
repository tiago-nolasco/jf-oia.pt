import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import ContentItem from "../shared/components/ContentItem";
import apiService from "../shared/services/api/api.service";
import { IContent } from "../shared/services/api/model/IContent";
import { H1 } from "../styles/elements/elements";

const NewsContainer = styled.div`
  display: flex;
`;

function News() {

  const [ news, setNews ] = useState([] as IContent[]);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async (): Promise<void> => {
    const data: IContent[] = await apiService.getNews();
    setNews(data);
  }

  return <>
    <H1><FormattedMessage id="last_news" defaultMessage="Notícias" /></H1>
    <NewsContainer>
      {news.map((item: IContent, index: number) => (
        <ContentItem key={`list-news-${index}`} item={item} />
      ))}
    </NewsContainer>
  </>;
}

export default News;
