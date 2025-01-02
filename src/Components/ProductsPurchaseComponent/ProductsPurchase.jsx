import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faFile } from '@fortawesome/free-solid-svg-icons'
import { RightPurchase, SearchInput, StyledTable, TableNeed, WrapperPurchase, WrapperPurchaseLeft, WrapperPurchaseTitle, WrapperSearchBarContainer } from './style'

function ProductsPurchase() {
  return (
    <WrapperPurchase>
      <WrapperPurchaseLeft>
        <WrapperPurchaseTitle>Hàng hóa cần mua</WrapperPurchaseTitle>
        <span style={{ fontSize: '15px' }}>Lựa chọn các hàng hóa đang có nhu cầu cần mua tập trung</span>

        <WrapperSearchBarContainer>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" style={{ marginRight: '10px', color: '#928e8e' }} />
          <SearchInput type="text" placeholder="Tìm kiếm" />
        </WrapperSearchBarContainer>

        <StyledTable>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <p>
                <b>Vật tư hàng hóa</b>
              </p>
            </td>
            <td>
              <p>
                <b>Số lượng cần mua</b>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <p>Bơ, phô mai</p>
            </td>
            <td>
              <p>10,000 cái</p>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <p>Thực phẩm khô, gia vị</p>
            </td>
            <td>
              <p>10,000 cái</p>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <p>Thiết bị cân</p>
            </td>
            <td>
              <p>10,000 cái</p>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <p>Thiết bị cân</p>
            </td>
            <td>
              <p>10,000 cái</p>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <p>Thiết bị cân</p>
            </td>
            <td>
              <p>10,000 cái</p>
            </td>
          </tr>
        </StyledTable>
      </WrapperPurchaseLeft>
      <RightPurchase>
        <WrapperPurchaseTitle>Đề nghị mua</WrapperPurchaseTitle>
        <span>Tạo PAM cho 1 đề nghị</span>

        <WrapperSearchBarContainer>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" style={{ marginRight: '10px', color: '#928e8e' }} />
          <SearchInput type="text" placeholder="Tìm kiếm" />
        </WrapperSearchBarContainer>
        <StyledTable>
          <tr>
            <td className="tableNeedBuy"><b>Mã ĐNMS</b></td>
            <td className="tableNeedBuy"><b>Đơn vị</b></td>
          </tr>

          <tr>
            <td className="tableNeedBuy"><a href="">PR.2023.000001</a></td>
            <td className="tableNeedBuy">GGG-NH Gogi Tô Hiệu</td>
            <td className="tableNeedBuy"><FontAwesomeIcon icon={faFile} /></td>
          </tr>

          <tr>
            <td className="tableNeedBuy"><a href="">PR.2023.000002</a></td>
            <td className="tableNeedBuy">GGG-NH Gogi Ng Chí Thanh</td>
            <td className="tableNeedBuy"><FontAwesomeIcon icon={faFile} /></td>
          </tr>

          <tr>
            <td className="tableNeedBuy"><a href="">PR.2023.000003</a></td>
            <td className="tableNeedBuy">GGG-NH Gogi Ng Phong Sắc</td>
            <td className="tableNeedBuy"><FontAwesomeIcon icon={faFile} /></td>
          </tr>

          <tr>
            <td className="tableNeedBuy"><a href="">PR.2023.000004</a></td>
            <td className="tableNeedBuy">GGG-NH Sumo Ng Thị Đinh</td>
            <td className="tableNeedBuy"><FontAwesomeIcon icon={faFile} /></td>
          </tr>

          <tr>
            <td className="tableNeedBuy"><a href="">PR.2023.000005</a></td>
            <td className="tableNeedBuy">GGG-NH Phòng kế hoạch và đào tạo</td>
            <td className="tableNeedBuy"><FontAwesomeIcon icon={faFile} /></td>
          </tr>
        </StyledTable>
      </RightPurchase>
    </WrapperPurchase>
  )
}

export default ProductsPurchase
