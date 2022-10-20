import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { IContentMedia } from "../shared/services/api/model/IContentMedia";
import { IDocument } from "../shared/services/api/model/IDocument";
import { H1 } from "../styles/elements/elements";
import { Colors } from "../styles/settings/colors";

interface IListFilesProps {
  // title: JSX.Element;
  fn: () => Promise<IDocument[]>;
}

interface IDocumentByCat {
  [catName: string]: IDocument[];
}

interface IToggleImageStylesProps {
  opened: boolean;
}

const sharedToggleStyles = css<Partial<IToggleImageStylesProps>>`
  background-image: ${props => `url('./assets/icons/${props.opened ? "iCON MENOS - Gray70" : "iCON MAIS - Gray70"}.svg')`};
  background-position: center right 5px;
  background-repeat: no-repeat;
  background-size: auto 24px;
`;

const ComponentWrapper = styled.div``;
const DocumentWrapper = styled.div``;

const CatH1 = styled(H1)<Partial<IToggleImageStylesProps>>`
  position: relative;
  background-color: ${Colors.FRENCH_PASS} ;
  color: ${Colors.GRAY_90};
  padding: 5px 30px;
  border: 0;
  cursor: pointer;
  ${sharedToggleStyles}
`;

const Doc = styled.div<Partial<IToggleImageStylesProps>>`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  margin: 0 20px;
  background-color: ${Colors.GRAY_20};
  border-bottom: 1px solid ${Colors.GRAY_60};
  cursor: pointer;
  ${sharedToggleStyles}

  &:hover {
    background-color: ${Colors.GRAY_30};
  }
`;

const File = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  padding: 10px 0;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

function ListFiles(props: IListFilesProps) {

  const [ documents, setDocuments ] = useState({} as IDocumentByCat);
  const [ categories, setCategories ] = useState([] as string[]);

  const [ selectedCat, setSelectedCat ] = useState("");
  const [ selectedDoc, setSelectedDoc ] = useState("");

  useEffect(() => {
    loadDocuments();
  }, []);

  const loadDocuments = async (): Promise<void> => {
    const data: IDocument[] = await props.fn();

    const documentByCat = data.reduce((acc: IDocumentByCat, doc: IDocument) => {
      acc[doc.subCatName] = [
        ...acc[doc.subCatName] || [],
        doc,
      ];
      return acc;
    }, {});

    setCategories(Object.keys(documentByCat));
    setDocuments(documentByCat);
  }

  return <ComponentWrapper>

    {categories?.map((cat: string, idxCat: number) => {

      const isCatOpened = selectedCat === cat;
      const docs = documents[cat]?.map((doc: IDocument, idxDoc: number) => {

        const isDocOpened = selectedDoc === doc.code;
        const files = doc.documents?.map((file: IContentMedia, idxFile: number) => {
          return <File key={"file-" + idxFile}>
            <Icon alt="folder" src="./assets/icons/iCON PDF - Gray70.svg" /><a href={file.file} target="_blanc">{file.title || "no-name-pdf"}</a>
          </File>;
        });

        return <div key={"doc-" + idxDoc}>
          <Doc
            opened={isDocOpened}
            onClick={() => setSelectedDoc(doc.code)}>
              <Icon alt="folder" src="./assets/icons/iCON FolderClosed - Gray70.svg" />{doc.name}
          </Doc>
          {isDocOpened && files}
        </div>;
      });

      return <DocumentWrapper key={"cat-" + idxCat}>
        <CatH1 opened={isCatOpened} onClick={() => setSelectedCat(cat)}>{cat}</CatH1>
        {isCatOpened && docs}
      </DocumentWrapper>;
    })}
  </ComponentWrapper>;
}

export default ListFiles;
