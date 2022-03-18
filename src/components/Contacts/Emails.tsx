import React from "react";
import styled from "styled-components";
import { IoMdMail } from 'react-icons/io';
import { Colors } from "../../styles/settings/colors";

interface IEmail {
  name?: string;
  email: string;
}

const Item = styled.div`
  display: grid;
  grid-template-columns: 120px 30px auto;
  grid-template-rows: auto;
  padding: 3px 0;
`;

const Name = styled.div`
  text-align: right;
  color: ${Colors.GRAY_60};
`;

const Icon = styled.div`
  text-align: center;
`;

function Emails() {
  const emails: IEmail[] = [
    {
      email: "geral@jf-oia.pt",
    },
    {
      name: "Bruno Seabra",
      email: "presidente@jf-oia.pt",
    },
    {
      name: "Obras",
      email: "valtermatos@jf-oia.pt",
    },
    {
      name: "Fiscalidade",
      email: "carladuarte@jf-oia.pt",
    },
    {
      name: "Cultura",
      email: "andreoliveira@jf-oia.pt",
    },
    {
      name: "Educação",
      email: "elisasa@jf-oia.pt",
    },
    {
      name: "Christian Simões",
      email: "presidente.assembleia@jf-oia.pt",
    }
  ];

  return <>
    {emails.map((email: IEmail, index: number) => 
      <Item key={`email-list-${index}`}>
        <Name>{email.name}</Name>
        <Icon><IoMdMail /></Icon>
        <div><a href={`mailto:${email.email}`}>{email.email}</a></div>
      </Item>
    )}
  </>;
}

export default Emails;
