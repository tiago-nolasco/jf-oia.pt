import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import ContentItem from "../shared/components/ContentItem";
import apiService from "../shared/services/api/api.service";
import { IContent } from "../shared/services/api/model/IContent";
import { H1 } from "../styles/elements/elements";

const NewsContainer = styled.div`
  display: flex;
  margin: 0 -10px;
`;

function News() {

  const [ news, setNews ] = useState([] as IContent[]);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async (page = 1): Promise<void> => {
    const data: IContent[] = await apiService.getNews();

    const limit = 3;
    const start = (page - 1) * limit;
    const paged = data.splice(start, limit);
    setNews(paged);
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
