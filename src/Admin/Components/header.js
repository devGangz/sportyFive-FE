import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const HeaderAdminPage = () => {
    const {
        clickedXemTongQuan,
        clickedQuanLyDonHang,
        clickedQuanLyKhachHang,
        clickedQuanLySanPham,
        clickedQuanLyHoatDong,
        clickedQuanLyMedia,
        clickedQuanLyVoucher
    } = useSelector((reduxData) => reduxData.AdminReducer)
    const [breadcum, setBreadcum] = useState("")
    useEffect(() => {
        if (clickedXemTongQuan) {
            setBreadcum(" Tổng quan")
        } else if (clickedQuanLyDonHang) {
            setBreadcum(" Quản lý đơn hàng")
        } else if (clickedQuanLyKhachHang) {
            setBreadcum(" Quản lý khách hàng")
        } else if (clickedQuanLySanPham) {
            setBreadcum(" Quản lý sản phẩm")
        } else if (clickedQuanLyHoatDong) {
            setBreadcum(" Quan lý hoạt động")
        } else if (clickedQuanLyMedia) {
            setBreadcum(" Quản lý media")
        } else if (clickedQuanLyVoucher) {
            setBreadcum(" Quản lý mã giảm giá")
        } else {
            setBreadcum(" Tổng quan")
        }
    })




    return (
        <div className="my-auto text-amber-50">
            <h3 className="text-start mx-3 mt-1">Dashboard/{breadcum}</h3>
        </div>
    )
}


export default HeaderAdminPage