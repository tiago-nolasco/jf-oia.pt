import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RenderHtml from "../shared/components/RenderHtml";
import apiService from "../shared/services/api/api.service";
import { ContentTagEnum } from "../shared/services/api/model/ContentTagEnum";
import { IContent } from "../shared/services/api/model/IContent";
import { IContentMedia } from "../shared/services/api/model/IContentMedia";
import { H1 } from "../styles/elements/elements";

const Message = styled.div`
  display: flex;
`;

const Text = styled.div`
  flex: 1;
`;

function Privacidade() {

  const [ title, setTitle ] = useState("");
  const [ message, setMessage ] = useState("");
  const [ documents, setDocuments ] = useState<IContentMedia[]>([]);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async (): Promise<void> => {
    const data: IContent = await apiService.getContent(ContentTagEnum.PRIVACY);

    setTitle(data.title);
    setMessage(data.description);
    setDocuments(data.documents || []);
  }

  return <>
    <H1>{title}</H1>
    <Message>
      <Text>
        <RenderHtml value={message} />
        {documents.map((doc) => <p><a href={doc.file} target="_blank">{doc.title}</a></p>)}
      </Text>
    </Message>
  </>;
}

export default Privacidade;
