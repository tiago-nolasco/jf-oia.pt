import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RenderHtml from "./RenderHtml";
import apiService from "../services/api/api.service";
import { ContentTagEnum } from "../services/api/model/ContentTagEnum";
import { IContent } from "../services/api/model/IContent";
import { H1 } from "../../styles/elements/elements";

interface IContentSidebarProps {
  tag: ContentTagEnum;
}

const Content = styled.div`
  & img {
    width: 100%;
    height: auto;
  }
`;

function ContentSidebar(props: IContentSidebarProps) {

  const [ title, setTitle ] = useState("");
  const [ message, setMessage ] = useState("");

  useEffect(() => {
    loadContent();
  });

  const loadContent = async (): Promise<void> => {
    const data: IContent = await apiService.getContent(props.tag);
    setTitle(data.title);
    setMessage(data.description);
  }

  return <>
    <H1>{title}</H1>
    <Content>
      <RenderHtml value={message} />
    </Content>
  </>;
}

export default ContentSidebar;
