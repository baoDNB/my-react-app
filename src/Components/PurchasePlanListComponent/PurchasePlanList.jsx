import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faChevronDown, faMagnifyingGlass, faFilter, faPlus, faCircleNotch, faEllipsisVertical, faClock, faRotateRight, faBan } from '@fortawesome/free-solid-svg-icons'
import { BodyTable, CreateNew, ListBuy, ResponsiveTable, TableList, TitleList, TitleListBuy, TxtStatus, View, ViewLeft, ViewRight } from './style'

function PurchasePlanList() {
    return (
        <>

            <TitleListBuy>
                <ListBuy>
                    <TitleList>Danh sách phương án mua</TitleList>
                    <span>Danh sách các Phương án mua(PAM) được tạo ra trên hệ thống mà người dùng được phân quyền truy xuất</span>

                    <View>
                        <ViewLeft>
                            <FontAwesomeIcon icon={faEye} />
                            <span>View: View all</span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </ViewLeft>
                        <ViewRight>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <FontAwesomeIcon icon={faFilter} />
                            <CreateNew>
                                <p>Tạo mới PAM</p>
                                <FontAwesomeIcon icon={faPlus} />
                            </CreateNew>
                        </ViewRight>
                    </View>
                </ListBuy>
            </TitleListBuy>

            <ResponsiveTable>
                <TableList>
                    <table>
                        <tr className="menu">
                            <td className='title-menuID'>Mã PAM #</td>
                            <td >Tên PAM</td>
                            <td >Người tạo</td>
                            <td >Ngày tạo</td>
                            <td >Loại sự kiện</td>
                            <td >Ngày bắt đầu báo giá</td>
                            <td >Ngày kết thúc báo giá</td>
                            <td>Số lượng phản hồi </td>
                            <td>Trạng thái</td>
                            <td></td>
                        </tr>

                        <tr className="bodyTable">
                            <td className='menuID'>SE.2023.000001</td>
                            <td>Sự kiện chào giá cá hồi Nauy</td>
                            <td>Nguyễn Văn ABC</td>
                            <td>06-03-2023</td>
                            <td>RFQ</td>
                            <td>06-03-2023</td>
                            <td>06-03-2023</td>
                            <td>0 phản hồi</td>
                            <td>
                                <FontAwesomeIcon icon={faCircleNotch} />
                                <TxtStatus>Mới tạo</TxtStatus>
                            </td>
                            <td className='iconMore'><FontAwesomeIcon icon={faEllipsisVertical} /></td>
                        </tr>

                        <tr className="bodyTable">
                            <td className='menuID'>SE.2023.000002</td>
                            <td>Sự kiện đấu thầu lò nướng 2023</td>
                            <td>Nguyễn Văn ABC</td>
                            <td>06-03-2023</td>
                            <td>RFQ</td>
                            <td>06-03-2023</td>
                            <td>06-03-2023</td>
                            <td>0 phản hồi</td>
                            <td>
                                <FontAwesomeIcon icon={faClock} />
                                <TxtStatus>Chờ duyệt sự kiện</TxtStatus>
                            </td>
                            <td><FontAwesomeIcon icon={faEllipsisVertical} /></td>
                        </tr>

                        <tr className="bodyTable">
                            <td className='menuID'>SE.2023.000002</td>
                            <td>Sự kiện chào giá sản phẩm sữa</td>
                            <td>Nguyễn Văn ABC</td>
                            <td>06-03-2023</td>
                            <td>RFP</td>
                            <td>06-03-2023</td>
                            <td>06-03-2023</td>
                            <td>0 phản hồi</td>
                            <td>
                                <FontAwesomeIcon icon={faRotateRight} />
                                <TxtStatus>Chờ diễn ra</TxtStatus>
                            </td>
                            <td><FontAwesomeIcon icon={faEllipsisVertical} /></td>
                        </tr>

                        <tr className="bodyTable">
                            <td className='menuID'>SE.2023.000002</td>
                            <td>Sự kiện lò nướng công nghệ</td>
                            <td>Nguyễn Văn ABC</td>
                            <td>06-03-2023</td>
                            <td>RFP</td>
                            <td>06-03-2023</td>
                            <td>06-03-2023</td>
                            <td>0 phản hồi</td>
                            <td>
                                <FontAwesomeIcon icon={faBan} />
                                <TxtStatus>Đã hủy</TxtStatus>
                            </td>
                            <td><FontAwesomeIcon icon={faEllipsisVertical} /></td>
                        </tr>
                    </table>
                </TableList>
            </ResponsiveTable>
        </>
    )
}

export default PurchasePlanList
