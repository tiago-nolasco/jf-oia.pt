import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RenderHtml from "../../shared/components/RenderHtml";
import { IContent } from "../../shared/services/api/model/IContent";
import { IContentMedia } from "../../shared/services/api/model/IContentMedia";
import { Image } from "../../styles/components/components";
import { H2 } from "../../styles/elements/elements";

interface ITeamMemberProps {
  member: IContent;
}

const TeamMemberContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  flex: 1;
  padding: 10px;
  min-width: 150px;
  flex-shrink: 0;
`;

const TeamMemberDescription = styled.div`
  text-align: right;

  & > ${H2} {
    font-size: 25px;
    font-weight: 200;
    margin: 0;
    text-transform: capitalize;
  }

  & p {
    margin: 0;
    font-size: 13px;
  }
`;

function TeamMember(props: ITeamMemberProps) {

  const [ image, setImage ] = useState({} as IContentMedia);

  useEffect(() => {
    loadMainImage();
  }, []);

  const loadMainImage = async (): Promise<void> => {
    const mainImage: IContentMedia = props.member.images?.find(
      (image: IContentMedia) => image.main
    );
    setImage(mainImage);
  }

  return <TeamMemberContainer>
    <Image src={image.file} fullImage={image.showFullImage} />
    <TeamMemberDescription>
      <H2>{props.member.title}</H2>
      <RenderHtml value={props.member.description} />
    </TeamMemberDescription>
  </TeamMemberContainer>;
}

export default TeamMember;
