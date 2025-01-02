import styled from "styled-components";

export const WrapperPurchase = styled.div`
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    padding: 0px 25px;
`
export const WrapperPurchaseLeft = styled.div`
    background-color: #ffffff;
    padding: 20px;
    width: 60%;
     border-right: 2px solid #e0e0e0; /* Vertical separator */
`
export const WrapperPurchaseTitle = styled.div`
    font-size: 22px;
`
export const WrapperSearchBarContainer = styled.div`
  margin-top:10px;
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  &:hover .search-icon {
    color: #000000;
  }
`
export const SearchInput = styled.input`
  border: none;
  background: none;
  outline: none;
  font-size: 16px;
  width: 100%;

  &:focus + .search-icon {
    color: #000000;
  }
`;
export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 10px;

  tr {
    height: 33px;
    border-bottom: 1px solid #e0e0e0;
  }

  td {
    padding: 8px;
  }

  .left-purchase-table {
    font-size: 15px;
  }
`
export const RightPurchase = styled.div`
  background-color: #ffffff;
  padding: 20px;
  width: 40%;
`;
export const TableNeed = styled.table`
  width: 100%;
  margin-top: 10px;

  tr {
    height: 40px;
  }

  .tableNeedBuy {
    padding: 8px;
    border-bottom: 1px solid #e0e0e0;

    a {
      color: #53b1ee;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
