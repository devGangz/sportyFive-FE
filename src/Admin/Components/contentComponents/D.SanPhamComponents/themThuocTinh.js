import NhanHangComponent from "./ThuocTinhSanPham/1.themNhanHieu";
import ChungLoaiComponent from "./ThuocTinhSanPham/2.themChungLoai";
import BoSuuTapComponent from "./ThuocTinhSanPham/3.themBoSuuTap";
import MauSacComponent from "./ThuocTinhSanPham/4.themMauSac";
import KichCoComponent from "./ThuocTinhSanPham/5.themKichCo";
import { closeAddNewVariantsForm } from '../../../Redux/ActionsAdmin'
import { useDispatch, useSelector } from 'react-redux'



const ThemThuocTinhSanPhamComponent = () => {
    const {
        openThemThuocTinh
    } = useSelector((reduxData) => reduxData.AdminReducer)


    const dispatch = useDispatch()
    // Close add variant form
    const toggleVariantForm = () => {
        dispatch(closeAddNewVariantsForm())
    }
    return (
        <>
            <div style={{ display: openThemThuocTinh ? "block" : "none" }}
                className="flex flex-col bg-orange-400 mx-auto absolute w-[45rem] p-4  mt-3 rounded">
                <div className=" mx-auto relative">
                    <h3 className="text-center">TẠO MỚI THUỘC TÍNH SẢN PHẨM</h3>
                    <i onClick={toggleVariantForm}
                        className="fa-regular fa-circle-xmark fa-2xl absolute top-2 right-0 hover:scale-105 cursor-pointer"></i>
                </div>

                <NhanHangComponent />
                <ChungLoaiComponent />
                <BoSuuTapComponent />
                <MauSacComponent />
                <KichCoComponent />
            </div>

        </>
    )
}

export default ThemThuocTinhSanPhamComponent