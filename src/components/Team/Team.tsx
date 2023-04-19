import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import apiService from "../../shared/services/api/api.service";
import { IContent } from "../../shared/services/api/model/IContent";
import { H1 } from "../../styles/elements/elements";
import { Colors } from "../../styles/settings/colors";
import TeamMember from "./TeamMember";

const TeamH1 = styled(H1)`
  position: relative;
  display: block;
  background: ${Colors.SALOMIE};
  border: 0;
  font-size: 28px;
  font-weight: 300;
  text-align: right;
  max-height: 28px;
  padding: 10px 90px 0 0;
`;

const TeamList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding-bottom: 30px;
`;

function Team() {

  const [ team, setTeam ] = useState([] as IContent[]);

  useEffect(() => {
    loadTeam();
  }, []);

  const loadTeam = async (): Promise<void> => {
    const data: IContent[] = await apiService.getTeam();
    setTeam(data);
  }

  return <>
    <TeamH1><FormattedMessage id="team" defaultMessage="Executivo" /></TeamH1>
    <TeamList>
      {team.map((member: IContent, index: number) =>
        <TeamMember key={`team-member-${index}`} member={member} />
      )}
    </TeamList>
  </>;
}

export default Team;
