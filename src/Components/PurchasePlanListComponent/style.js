import styled from "styled-components";

export const TitleListBuy = styled.div`
    padding: 13px 25px 0px 25px;
`
export const ListBuy = styled.div`
    background-color: #ffffff;
    padding: 20px 0px 0px 20px;
    display: grid;
    margin-top: 20px;s
`
export const TitleList = styled.div`
        font-size: 22px;
`
export const View = styled.div`
    display: flex;
    font-size: 14px;
    margin-top: 20px;
    justify-content: space-between;
`
export const ViewLeft = styled.div`
    color: rgb(32, 142, 232);
`
export const ViewRight = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 16px;
`
export const CreateNew = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 16px;
    background-color: rgb(32, 142, 232);
    padding: 9px;
    margin-left: 8px;
    color: #ffffff;
`

export const TableList = styled.div`
  padding: 0px 25px 15px 25px;
  overflow-x: auto;
  table {
    width: 100%;
    border-collapse: collapse;
  }
  .menu {
    background-color: #e6e6e6;
    height: 40px;
    font-weight: 600;
    td {
        white-space: nowrap; 
        &.title-menuID{
        padding: 0px 12px; 
        }    
    }
  }
  .bodyTable {
    background-color: #ffffff;
    height: 30px;
    font-size: 14px;
    td {
        white-space: nowrap;
         
      &.menuID {
        color: #53b1ee;
        padding: 0px 12px;  
      }

      &.iconMore {
        padding: 0px 18px 0px 0px;
      }
    }

    .txtStatus {
      padding: 4px;
    }
  }
`;

export const TxtStatus = styled.span`
  padding: 4px;
`;
export const ResponsiveTable = styled.div`
  @media only screen and (min-width: 1048px) and (max-width: 1366px) {
    table {
      font-size: 14px;
    }

    .menu td,
    .bodyTable td {
      font-size: 12px;
    }
  }
`;