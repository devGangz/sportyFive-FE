import { useState } from "react"
import { useDispatch } from "react-redux"
import {
    handleTongQuan,
    handleQuanLyDonHang,
    handleQuanLyKhachHang,
    handleQuanLySanPham,
    handleQuanLyMedia,
    handleQuanLyVoucher,
    handleQuanLyHoatDong
} from "../../Admin/Redux/ActionsAdmin"

const admin = {
    imageAdmin: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=826&t=st=1690558568~exp=1690559168~hmac=d98df2251dcab10d279a9b924998e1fea42af42f0ed293a2d1c2b1ee29d87c92",
    name: "adminX"
}

const SideBar = () => {
    const dispatch = useDispatch()
    const [tongQuan, setTongQuan] = useState(false)
    const [quanLyDonHang, setQuanLyDonHang] = useState(false)
    const [quanLyKhachHang, setQuanLyKhachHang] = useState(false)
    const [quanLySanPham, setQuanLySanPham] = useState(false)
    const [quanLyVoucher, setQuanLyVoucher] = useState(false)
    const [quanLyMedia, setQuanLyMedia] = useState(false)
    const [quanLyHoatDong, setQuanLyHoatDong] = useState(false)

    const onClickXemTongQuan = () => {
        setTongQuan(!tongQuan)
        setQuanLyDonHang(false)
        setQuanLyKhachHang(false)
        setQuanLySanPham(false)
        setQuanLyMedia(false)
        setQuanLyVoucher(false)
        setQuanLyHoatDong(false)
        dispatch(handleTongQuan())
    }

    const onClickQuanLyDonHang = () => {
        setTongQuan(false)
        setQuanLyDonHang(!quanLyDonHang)
        setQuanLyKhachHang(false)
        setQuanLySanPham(false)
        setQuanLyMedia(false)
        setQuanLyVoucher(false)
        setQuanLyHoatDong(false)
        dispatch(handleQuanLyDonHang())
    }

    const onClickQuanLyKhachHang = () => {
        setTongQuan(false)
        setQuanLyDonHang(false)
        setQuanLyKhachHang(!quanLyKhachHang)
        setQuanLySanPham(false)
        setQuanLyMedia(false)
        setQuanLyVoucher(false)
        setQuanLyHoatDong(false)
        dispatch(handleQuanLyKhachHang())
    }

    const onClickQuanLySanPham = () => {
        setTongQuan(false)
        setQuanLyDonHang(false)
        setQuanLyKhachHang(false)
        setQuanLySanPham(!quanLySanPham)
        setQuanLyMedia(false)
        setQuanLyVoucher(false)
        setQuanLyHoatDong(false)
        dispatch(handleQuanLySanPham())
    }

    const onClickQuanLyHoatDong = () => {
        setTongQuan(false)
        setQuanLyDonHang(false)
        setQuanLyKhachHang(false)
        setQuanLySanPham(false)
        setQuanLyHoatDong(!quanLyHoatDong)
        setQuanLyMedia(false)
        setQuanLyVoucher(false)
        dispatch(handleQuanLyHoatDong())
    }

    const onClickQuanLyMedia = () => {
        setTongQuan(false)
        setQuanLyDonHang(false)
        setQuanLyKhachHang(false)
        setQuanLySanPham(false)
        setQuanLyHoatDong(false)
        setQuanLyMedia(!quanLyMedia)
        setQuanLyVoucher(false)
        dispatch(handleQuanLyMedia())
    }

    const onClickQuanLyVoucher = () => {
        setTongQuan(false)
        setQuanLyDonHang(false)
        setQuanLyKhachHang(false)
        setQuanLySanPham(false)
        setQuanLyMedia(false)
        setQuanLyHoatDong(false)
        setQuanLyVoucher(!quanLyVoucher)
        dispatch(handleQuanLyVoucher())
    }



    return (
        <>
            <div className="mt-[5vh] text-amber-50">
                <div className="px-2 w-[15rem] rounded">
                    <div className="w-20 h-20 rounded m-3 flex">
                        <img className="rounded" src={admin.imageAdmin} alt="" />
                        <p className="my-auto mx-3"><strong>{admin.name}</strong></p>
                    </div>
                </div>
                <hr />
                <div className="pt-3 z-10">
                    <button style={{ backgroundColor: tongQuan ? "#0891B2" : "" }}
                        onClick={onClickXemTongQuan} className="px-3 py-2 w-[100%] hover:bg-cyan-600 text-start">
                        <label htmlFor="">Tổng quan</label></button>
                </div>

                <div className="pt-2 z-10">
                    <button style={{ backgroundColor: quanLyDonHang ? "#0891B2" : "" }}
                        onClick={onClickQuanLyDonHang} className="px-3 py-2 w-[100%] hover:bg-cyan-600 text-start">
                        Quản lý đơn hàng</button>
                </div>

                <div className="pt-2 z-10">
                    <button style={{ backgroundColor: quanLyKhachHang ? "#0891B2" : "" }}
                        onClick={onClickQuanLyKhachHang} className="px-3 py-2 w-[100%] hover:bg-cyan-600 text-start">
                        Quản lý khách hàng</button>
                </div>

                <div className="pt-2 z-10 flex relative items-center">
                    <button style={{ backgroundColor: quanLySanPham ? "#0891B2" : "" }}
                        onClick={onClickQuanLySanPham} className="px-3 py-2 w-[100%] hover:bg-cyan-600 text-start">
                        Quản lý sản phẩm</button>
                </div>

                <div className="pt-2 z-10">
                    <button style={{ backgroundColor: quanLyHoatDong ? "#0891B2" : "" }}
                        onClick={onClickQuanLyHoatDong} className="px-3 py-2 w-[100%] text-start hover:bg-cyan-600">
                        Quản lý hoạt động</button>
                </div>

                <div className="pt-2 z-10">
                    <button style={{ backgroundColor: quanLyMedia ? "#0891B2" : "" }}
                        onClick={onClickQuanLyMedia} className="px-3 py-2 w-[100%] text-start hover:bg-cyan-600">
                        Quản lý Media</button>
                </div>

                <div className="pt-2 z-10">
                    <button style={{ backgroundColor: quanLyVoucher ? "#0891B2" : "" }}
                        onClick={onClickQuanLyVoucher} className="px-3 py-2 w-[100%] text-start hover:bg-cyan-600">
                        Quản lý mã giảm giá</button>
                </div>

            </div>

        </>

    )
}

export default SideBar