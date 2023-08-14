import { useDispatch, useSelector } from "react-redux";
import TongQuanComponent from "./contentComponents/A.xemTongQuan";
import QuanLyDonHangComponent from "./contentComponents/B.quanLyDonHang";
import QuanLyKhachHangComponent from "./contentComponents/C.quanLykhachHang";
import QuanLySanPhamComponent from "./contentComponents/D.quanLySanPham";
import QuanLyHoatDongComponent from "./contentComponents/E.quanLyHoatDong";
import QuanLyMediaComponent from "./contentComponents/F.quanLyMedia";
import QuanLyVoucherComponent from "./contentComponents/G.quanLyVoucher";

const Content = () => {
    const {
        clickedXemTongQuan,
        clickedQuanLyDonHang,
        clickedQuanLyKhachHang,
        clickedQuanLySanPham,
        clickedQuanLyHoatDong,
        clickedQuanLyMedia,
        clickedQuanLyVoucher
    } = useSelector((reduxData) => reduxData.AdminReducer)

    return (
        <>
            {
                clickedXemTongQuan ? <TongQuanComponent /> :
                    clickedQuanLyDonHang ? <QuanLyDonHangComponent /> :
                        clickedQuanLyKhachHang ? <QuanLyKhachHangComponent /> :
                            clickedQuanLySanPham ? <QuanLySanPhamComponent /> :
                                clickedQuanLyHoatDong ? <QuanLyHoatDongComponent /> :
                                    clickedQuanLyMedia ? <QuanLyMediaComponent /> :
                                        clickedQuanLyVoucher ? <QuanLyVoucherComponent /> :
                                            []

            }
        </>
    )
}

export default Content