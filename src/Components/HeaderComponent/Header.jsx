import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faBell, faGear, faThLarge, faChevronDown, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { WrapperHeader, WrapperHeaderLeft, WrapperHeaderRight, WrapperIconEpro } from './style';

const Header = () => {

    const [tabActive, setTabActive] = React.useState(4);

    const listMenu = [
        { id: 1, label: "Trang chủ", subMenu: false },
        { id: 2, label: "Kế hoạch", subMenu: true },
        { id: 3, label: "Đề nghị mua", subMenu: false },
        { id: 4, label: "Phương án mua", subMenu: true },
        { id: 5, label: "Đơn hàng", subMenu: true },
        { id: 6, label: "Thanh toán", subMenu: true },
        { id: 7, label: "Biểu mẫu", subMenu: false },
        { id: 8, label: "Báo cáo", subMenu: false }
    ]

    return (
        
            <WrapperHeader>
                <WrapperHeaderLeft>
                    <WrapperIconEpro>
                        <FontAwesomeIcon icon={faCreditCard} />
                        <span style={{ marginLeft: '7px', fontWeight: '600' }}>eProcurement</span>
                        <div style={{ borderLeft: '2px solid white', height: '20px', margin: '0px 20px' }}></div>
                    </WrapperIconEpro>
                    <ul style={{ display: 'flex', listStyle: 'none', color: 'white', gap: '20px' }}>
                        {listMenu.map((item, index) => <li onClick={() => setTabActive(item.id)} key={index} style={{ display: "flex", alignItems: "center", gap: "5px", borderBottom: tabActive === item.id ? " 4px solid blue" : "none", padding: "13px 0px", cursor: "pointer" }}>
                            <span>{item.label}</span>
                            <span>{item.subMenu && <FontAwesomeIcon icon={faChevronDown} />}</span>
                        </li>)}
                    </ul>
                </WrapperHeaderLeft>
                <WrapperHeaderRight>
                    <ul style={{ display: 'flex', listStyle: 'none', color: 'white', gap: '20px' }}>
                        <li><FontAwesomeIcon icon={faBell} /></li>
                        <li><FontAwesomeIcon icon={faGear} /></li>
                        <li><FontAwesomeIcon icon={faCircleUser} /></li>
                        <li><FontAwesomeIcon icon={faThLarge} /></li>
                    </ul>
                </WrapperHeaderRight>
            </WrapperHeader>
       
    )
}

export default Header
