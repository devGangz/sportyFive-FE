import ThemSanPhamComponent from "./D.SanPhamComponents/themSanPham"
import ThemThuocTinhSanPhamComponent from "./D.SanPhamComponents/themThuocTinh"
import SuaSanPhamComponent from "./D.SanPhamComponents/suaSanPham"
import XoaSanPham from "./D.SanPhamComponents/xoaSanPham"

import { useDispatch, useSelector } from "react-redux"
import {
    getProductPagination,
    pageChangePagination,
    openAddNewProductForm,
    openAddNewVariantsForm,
    getProductDetail,
    openConfirmDelete,
    getProductDetailDelete,
    closeConfirmDelete
} from './../../Redux/ActionsAdmin'
import { useEffect, useState } from "react"
import {
    Pagination,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material"


const QuanLySanPhamComponent = () => {
    const dispatch = useDispatch()
    const {
        allProduct, currentPage,
        noPage, limit,
        openDetailPrdForm,
        confirmDelete
    } = useSelector((reduxData) => reduxData.AdminReducer)


    // Update button
    const clickChiTietPrd = (paramElement) => {
        dispatch(getProductDetail(paramElement))
    }



    // Open variants form
    const openVariantsForm = () => {
        dispatch(openAddNewVariantsForm())
    }
    // Open product form
    const openProductForm = () => {
        dispatch(openAddNewProductForm())
    }

    // Pagination Product
    useEffect(() => {
        dispatch(getProductPagination(currentPage, limit))
    }, [currentPage])

    const onChangePagination = (event, value) => {
        dispatch(closeConfirmDelete())
        dispatch(pageChangePagination(value))
    }

    var productConvert = []

    const PageConvert = () => {
        let n1 = currentPage                    // 1 -> [0;4]  2-> [5-9] 3->[10-14] 4 
        let b1 = n1 * 6 - 6
        let b2 = n1 * 6 - 1
        allProduct.forEach((item, index) => {
            if (b1 <= index && index <= b2) { // 5 6 7 8 9 ; 
                productConvert.push(item)
            }
        })
    }
    PageConvert()
    // get stt in table
    const getStt = (paramElement) => {
        return allProduct.indexOf(paramElement) + 1
    }

    // Delete button
    const clickDeletePrd = (paramElement) => {
        dispatch(openConfirmDelete())
        dispatch(getProductDetailDelete(paramElement))
    }

    return (
        <>
            <div className="flex flex-col h-10 absolute right-4 top-3">
                <button onClick={openVariantsForm} className="text-start p-2 bg-black text-cyan-500 text-xs mb-1">
                    <i className="fa-sharp fa-solid fa-plus fa-xs"></i> &nbsp;
                    Thêm mới thuộc tính sản phẩm
                </button>
                <button onClick={openProductForm} className="text-start p-2 bg-black text-cyan-500 text-xs">
                    <i className="fa-sharp fa-solid fa-plus fa-xs"></i> &nbsp;
                    Thêm sản phẩm mới!
                </button>
            </div>
            <h2 className="mt-4">Sản phẩm hiện tại</h2>

            <div className="absolute w-[98%] top-[6rem]">
                <TableContainer component={Paper} className="mb-4">
                    <Table aria-label="simple table">
                        <TableHead style={{ backgroundColor: "#e7e7e7" }}>
                            <TableRow>
                                <TableCell className="border right text-center"><b>STT</b></TableCell>
                                <TableCell className="border right text-center"><b>Tên sản phẩm</b></TableCell>
                                <TableCell className="border right text-center"><b>Image</b></TableCell>
                                <TableCell className="border right text-center"><b>Hãng</b></TableCell>
                                <TableCell className="border right text-center"><b>Phân loại</b></TableCell>
                                <TableCell className="border right text-center"><b>Giá</b></TableCell>
                                <TableCell className="border right text-center"><b>Giảm giá</b></TableCell>
                                <TableCell className="border right text-center"><b>Màu sắc</b></TableCell>
                                <TableCell className="border right text-center"><b>Kích cỡ</b></TableCell>
                                <TableCell className="border right text-center"><b>Số lượng</b></TableCell>
                                <TableCell className="border right text-center"><b>Action</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                productConvert.map((element, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell className="text-center">{getStt(element)}</TableCell>
                                            <TableCell className="border right text-center">{element.tenSanPham}</TableCell>
                                            <TableCell className="border right text-center">
                                                <img className="w-[5rem] mx-auto" src={element.anhDaiDienSanPham} alt="" />
                                            </TableCell>
                                            <TableCell className="border right text-center">{element.nhanHieu}</TableCell>
                                            <TableCell className="border right text-center">{element.chungLoai}</TableCell>
                                            <TableCell className="border right text-center">{element.giaTien.toLocaleString("vi")} ₫</TableCell>
                                            <TableCell className="border right text-center">{element.giamGia} %</TableCell>
                                            <TableCell className="border right text-center">{element.mauSac}</TableCell>
                                            <TableCell className="border right text-center">{element.kichCo}</TableCell>
                                            <TableCell className="border right text-center">{element.tongSoLuong}</TableCell>
                                            <TableCell className="border right text-center">
                                                <button className="btn btn-primary btn-sm mr-1" onClick={() => clickChiTietPrd(element)}>Chi tiết</button>
                                                <button className="btn btn-danger btn-sm" onClick={() => clickDeletePrd(element)}>Xoá</button>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <div style={{ display: openDetailPrdForm ? "none" : [] }} className="flex justify-center ">
                    <Pagination className="fixed bottom-2" count={noPage}
                        page={currentPage} onChange={onChangePagination} />
                </div>
            </div>
            <ThemSanPhamComponent />
            <ThemThuocTinhSanPhamComponent />
            {openDetailPrdForm ?
                <SuaSanPhamComponent /> : []
            }

            {
                confirmDelete ?
                    <XoaSanPham /> : []
            }
        </>
    )
}

export default QuanLySanPhamComponent
