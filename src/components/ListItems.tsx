import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ContentItem from "../shared/components/ContentItem";
import { IContent } from "../shared/services/api/model/IContent";
import { H1 } from "../styles/elements/elements";
import { Colors } from "../styles/settings/colors";

interface IListItemsProps {
  title: JSX.Element;
  size?: number;
  fn: () => Promise<IContent[]>;
}

interface IPagination {
  size: number;
  totalItems: number;
  totalPages: number;
}

const ItemsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;

const Pagination = styled.div`
  display: flex;
  margin-left: auto;

  & > div {
    background: ${Colors.GRAY_50};
    color: ${Colors.WHITE};
    padding: 5px 10px;
    margin: 0 1px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
`;

function ListItems(props: IListItemsProps) {
  const [items, setItems] = useState([] as IContent[]);
  const [visibleItems, setVisibleItems] = useState([] as IContent[]);

  const [currentPage, setCurrentPage] = useState(0);
  const [pagination, setPagination] = useState({} as IPagination);

  useEffect(() => {
    if (!currentPage) return;

    const size = pagination.size;
    const start = (currentPage - 1) * size;

    setVisibleItems([...items].splice(start, size));
  }, [currentPage]);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async (): Promise<void> => {
    const size = props.size || 3;
    const data: IContent[] = await props.fn();
    setItems(data);

    setPagination({
      size,
      totalItems: data.length,
      totalPages: Math.ceil(data.length / size),
    });
    setCurrentPage(1);
  };

  const changePage = (page: number): void => {
    if (page >= 1 && page <= pagination.totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <H1>
        {props.title}
        <Pagination>
          <div onClick={() => changePage(currentPage - 1)}>«</div>
          <div onClick={() => changePage(currentPage + 1)}>»</div>
        </Pagination>
      </H1>
      <ItemsContent>
        {visibleItems.map((item: IContent, index: number) => (
          <ContentItem key={`list-items-${index}`} item={item} />
        ))}
      </ItemsContent>
    </>
  );
}

export default ListItems;
