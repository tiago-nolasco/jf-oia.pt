import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ContentItem from "../shared/components/ContentItem";
import apiService from "../shared/services/api/api.service";
import { IContent } from "../shared/services/api/model/IContent";
import { AppStateType } from "../store/model/AppStateType";
import { H1 } from "../styles/elements/elements";

const NewsContainer = styled.div`
  display: flex;
`;

function News() {

  const i18n = useSelector((state: AppStateType) => state.i18n);
  const [ news, setNews ] = useState([] as IContent[]);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async (): Promise<void> => {
    const data: IContent[] = await apiService.getNews();
    setNews(data);
  }

  return <>
    <H1>{i18n.last_news}</H1>
    <NewsContainer>
      {news.map((item: IContent, index: number) => (
        <ContentItem key={`list-news-${index}`} item={item} />
      ))}
    </NewsContainer>
  </>;
}

export default News;
