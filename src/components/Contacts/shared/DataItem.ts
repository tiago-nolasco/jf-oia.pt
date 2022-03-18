import styled from "styled-components";

interface IDataItemProps {
  strict: boolean;
}
export const DataItem = styled.div<Partial<IDataItemProps>>`
  display: flex;
  flex: ${props => props.strict ? 0 : 1};

  & > svg {
    width: 14px;
    height: 14px;
    margin: 2px 5px 0 0;
  }
`;