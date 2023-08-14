import { useEffect, useRef, useState } from 'react'
import {
    getVariantProduct,
    offProductDetail,
    handleUpdateProduct,
    resetUpdateState,
    getProductPagination
} from '../../../Redux/ActionsAdmin'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import spinner from '../../../../Assets/Spinning/Spinner-1s-200px.svg'


const SuaSanPhamComponent = () => {
    const dispatch = useDispatch()
    const {
        allBrand,
        allCategory,
        allCollection,
        allColor,
        allSize,
        productDetail,
        productUpdated
    } = useSelector((reduxData) => reduxData.AdminReducer)

    // Load brand, category, collection, color, size
    useEffect(() => {
        if (productDetail !== undefined) {
            dispatch(getVariantProduct())
        }
    }, [])


    const RefTenSanPham = useRef(null)
    const RefNhanHieu = useRef(null)
    const RefChungLoai = useRef(null)
    const RefBoSuuTap = useRef(null)
    const RefMauSac = useRef(null)
    const RefKichCo = useRef(null)
    const RefTongSoLuong = useRef(null)
    const RefGiaTien = useRef(null)
    const RefGiamGia = useRef(null)
    const RefMoTa1 = useRef(null)
    const RefMoTa2 = useRef(null)
    const RefMoTa3 = useRef(null)
    const RefMoTa4 = useRef(null)
    const RefMoTa5 = useRef(null)
    const RefMoTaChiTiet = useRef(null)



    // Modify the link avatar product
    const [linkImgAvt, setLinkImgAvt] = useState("")
    const [avtFile, setAvtFile] = useState(null)
    const [spinLoadAvt, setSpinLoad] = useState(false)
    const onChangeAvtPrd = (e) => {
        const avt = e.target.files[0]
        if (avt !== undefined) {
            setAvtFile(avt)
        } else { }
    }

    useEffect(() => {
        if (avtFile !== null) {
            setSpinLoad(true)
            const formData = new FormData();
            const apiLink = process.env.REACT_APP_API_LINK
            const PRESET_NAME = process.env.REACT_APP_PRESET_NAME
            formData.append('upload_preset', PRESET_NAME)
            formData.append('folder', "AVT_PRODUCT")
            formData.append('file', avtFile)

            axios.post(apiLink, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            }).then(response => {
                if (response.data.url) {
                    setLinkImgAvt(response.data.url)
                    setSpinLoad(false)
                }
            })
        }
    }, [avtFile])

    // Modify the link image product 01
    const [linkImg01, setlinkImg01] = useState("")
    const [fileLinkImg01, setfileLinkImg01] = useState(null)
    const [spinImg01, setSpinImg01] = useState(false)
    const onChangeImg01 = (e) => {
        const img01 = e.target.files[0]
        if (img01 !== undefined) {
            setfileLinkImg01(img01)
        } else { }
    }

    useEffect(() => {
        if (fileLinkImg01 !== null) {
            setSpinImg01(true)
            const formData = new FormData();
            const apiLink = process.env.REACT_APP_API_LINK
            const PRESET_NAME = process.env.REACT_APP_PRESET_NAME
            formData.append('upload_preset', PRESET_NAME)
            formData.append('folder', "AVT_PRODUCT")
            formData.append('file', fileLinkImg01)

            axios.post(apiLink, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            }).then(response => {
                if (response.data.url) {
                    console.log("img_01", response.data.url);
                    setlinkImg01(response.data.url)
                    setSpinImg01(false)
                }
            })
        }
    }, [fileLinkImg01])


    // Modify the link image product 02
    const [linkImg02, setlinkImg02] = useState("")
    const [fileLinkImg02, setfileLinkImg02] = useState(null)
    const [spinImg02, setSpinImg02] = useState(false)
    const onChangeImg02 = (e) => {
        const img02 = e.target.files[0]
        if (img02 !== undefined) {
            setfileLinkImg02(img02)
        } else { }
    }

    useEffect(() => {
        if (fileLinkImg02 !== null) {
            setSpinImg02(true)
            const formData = new FormData();
            const apiLink = process.env.REACT_APP_API_LINK
            const PRESET_NAME = process.env.REACT_APP_PRESET_NAME
            formData.append('upload_preset', PRESET_NAME)
            formData.append('folder', "AVT_PRODUCT")
            formData.append('file', fileLinkImg02)

            axios.post(apiLink, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            }).then(response => {
                if (response.data.url) {
                    console.log("img_02", response.data.url);
                    setlinkImg02(response.data.url)
                    setSpinImg02(false)
                }
            })
        }
    }, [fileLinkImg02])

    // Modify the link image product 03
    const [linkImg03, setlinkImg03] = useState("")
    const [fileLinkImg03, setfileLinkImg03] = useState(null)
    const [spinImg03, setSpinImg03] = useState(false)
    const onChangeImg03 = (e) => {
        const img03 = e.target.files[0]
        if (img03 !== undefined) {
            setfileLinkImg03(img03)
        } else { }
    }

    useEffect(() => {
        if (fileLinkImg03 !== null) {
            setSpinImg03(true)
            const formData = new FormData();
            const apiLink = process.env.REACT_APP_API_LINK
            const PRESET_NAME = process.env.REACT_APP_PRESET_NAME
            formData.append('upload_preset', PRESET_NAME)
            formData.append('folder', "AVT_PRODUCT")
            formData.append('file', fileLinkImg03)

            axios.post(apiLink, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            }).then(response => {
                if (response.data.url) {
                    console.log("img_03", response.data.url);
                    setlinkImg03(response.data.url)
                    setSpinImg03(false)
                }
            })
        }
    }, [fileLinkImg03])



    const [showAlert, setShowAlert] = useState(false)
    const [mesAlert, setMesAlert] = useState("")
    const onClickCloseAlert = () => {
        setShowAlert(false)
    }

    const onClickUpdateProduct = () => {

        let newProduct = {
            idPrd: productDetail._id,
            tenSanPham: "",
            anhDaiDienSanPham: "",
            anhSanPham: productDetail.anhSanPham,
            nhanHieu: RefNhanHieu.current.value,
            chungLoai: RefChungLoai.current.value,
            boSuuTap: RefBoSuuTap.current.value,
            mauSac: RefMauSac.current.value,
            kichCo: RefKichCo.current.value,
            tongSoLuong: 0,
            giaTien: 0,
            giamGia: 0,
            moTa1: "",
            moTa2: "",
            moTa3: "",
            moTa4: "",
            moTa5: "",
            moTaChiTiet: ""
        }

        // modify ten san pham
        if (RefTenSanPham.current.value.trim() == "") {
            setShowAlert(true)
            setMesAlert("Tên sản phẩm lấy giá trị ban đầu")
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
            newProduct.tenSanPham = productDetail.tenSanPham
            RefTenSanPham.current.value = productDetail.tenSanPham
            return RefTenSanPham.current.focus()
        } else {
            newProduct.tenSanPham = RefTenSanPham.current.value.trim()

        }
        // modify tong so luong
        if (RefTongSoLuong.current.value.trim() == "") {
            setShowAlert(true)
            setMesAlert("Tổng số lượng lấy giá trị ban đầu")
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
            newProduct.tongSoLuong = productDetail.tongSoLuong
            RefTongSoLuong.current.value = productDetail.tongSoLuong
            return RefTongSoLuong.current.focus()
        } else {
            newProduct.tongSoLuong = Number(RefTongSoLuong.current.value.trim())
        }
        // modify gia tien
        if (RefGiaTien.current.value.trim() == "") {
            setShowAlert(true)
            setMesAlert("Giá tiền lấy giá trị ban đầu")
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
            newProduct.giaTien = productDetail.giaTien
            RefGiaTien.current.value = productDetail.giaTien
            return RefGiaTien.current.focus()
        } else {
            newProduct.giaTien = Number(RefGiaTien.current.value.trim())
        }
        // modify giam gia
        if (RefGiamGia.current.value.trim() == "") {
            setShowAlert(true)
            setMesAlert("% giảm giá lấy giá trị ban đầu")
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
            newProduct.giamGia = productDetail.giamGia
            RefGiamGia.current.value = productDetail.giamGia
            return RefGiamGia.current.focus()
        } else {
            newProduct.giamGia = Number(RefGiamGia.current.value.trim())
        }

        // modify mo ta 1
        if (RefMoTa1.current.value.trim() == "") {
            setShowAlert(true)
            setMesAlert("Mô tả 1 lấy giá trị ban đầu")
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
            newProduct.moTa1 = productDetail.moTa1
            RefMoTa1.current.value = productDetail.moTa1
            return RefMoTa1.current.focus()
        } else {
            newProduct.moTa1 = RefMoTa1.current.value.trim()
        }

        // modify mo ta 2
        if (RefMoTa2.current.value.trim() == "") {
            setShowAlert(true)
            setMesAlert("Mô tả 2 lấy giá trị ban đầu")
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
            newProduct.moTa2 = productDetail.moTa2
            RefMoTa2.current.value = productDetail.moTa2
            return RefMoTa2.current.focus()
        } else {
            newProduct.moTa2 = RefMoTa2.current.value.trim()
        }
        // modify mo ta 3
        if (RefMoTa3.current.value.trim() == "") {
            setShowAlert(true)
            setMesAlert("Mô tả 3 lấy giá trị ban đầu")
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
            newProduct.moTa3 = productDetail.moTa3
            RefMoTa3.current.value = productDetail.moTa3
            return RefMoTa3.current.focus()
        } else {
            newProduct.moTa3 = RefMoTa3.current.value.trim()
        }
        // modify mo ta 4
        if (RefMoTa4.current.value.trim() == "") {
            setShowAlert(true)
            setMesAlert("Mô tả 4 lấy giá trị ban đầu")
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
            newProduct.moTa4 = productDetail.moTa4
            RefMoTa4.current.value = productDetail.moTa4
            return RefMoTa4.current.focus()
        } else {
            newProduct.moTa4 = RefMoTa4.current.value.trim()
        }
        // modify mo ta 5
        if (RefMoTa5.current.value.trim() == "") {
            setShowAlert(true)
            setMesAlert("Mô tả 5 lấy giá trị ban đầu")
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
            newProduct.moTa5 = productDetail.moTa5
            RefMoTa5.current.value = productDetail.moTa5
            return RefMoTa5.current.focus()
        } else {
            newProduct.moTa5 = RefMoTa5.current.value.trim()
        }
        // modify mo ta chi tiet
        if (RefMoTaChiTiet.current.value.trim() == "") {
            setShowAlert(true)
            setMesAlert("Mô tả chi tiết lấy giá trị ban đầu")
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
            newProduct.moTa5 = productDetail.moTaChiTiet
            RefMoTaChiTiet.current.value = productDetail.moTaChiTiet
            return RefMoTaChiTiet.current.focus()
        } else {
            newProduct.moTaChiTiet = RefMoTaChiTiet.current.value.trim()
        }
        // modyfy avatar product
        if (linkImgAvt == "") {
            newProduct.anhDaiDienSanPham = productDetail.anhDaiDienSanPham
        } else {
            newProduct.anhDaiDienSanPham = linkImgAvt
        }
        // modify product image
        if (linkImg01 !== "") {
            productDetail.anhSanPham[0] = linkImg01
        } else { }
        if (linkImg02 !== "") {
            productDetail.anhSanPham[1] = linkImg02
        } else { }
        if (linkImg03 !== "") {
            productDetail.anhSanPham[2] = linkImg03
        } else { }
        return dispatch(handleUpdateProduct(newProduct))
    }

    // Close product form
    const toggleProductForm = () => {
        dispatch(offProductDetail())
    }

    // alert update product successed
    const [isProductUpdate, setProductUpdate] = useState(false)
    const [showAlertSuccess, setShowAlertSuccess] = useState(false)

    const onClickCloseUpdateAlert = () => {
        setShowAlertSuccess(false)
    }

    // update table after product change
    useEffect(() => {
        if (showAlertSuccess) {
            setTimeout(() => {
                setShowAlertSuccess(false)
            }, 2000);
        }
        dispatch(getProductPagination())
    })

    // show spinner and banner alert
    useEffect(() => {
        console.log(productUpdated);
        if (productUpdated) {
            setProductUpdate(true)
            setTimeout(() => {
                setProductUpdate(false)
                dispatch(resetUpdateState())
                setShowAlertSuccess(true)
            }, 2000);
        } else { }
    }, [productUpdated])


    return (

        <>
            <div style={{ display: showAlert ? "block" : "none" }} className="bg-orange-500 fixed w-[84.1%] z-50">
                <p className="my-auto p-2 text-center relative">{mesAlert}</p>
                <div onClick={onClickCloseAlert} className="absolute top-1.5 right-3 cursor-pointer">
                    &#10006;
                </div>
            </div>

            <div style={{ display: showAlertSuccess ? "block" : "none" }} className="bg-lime-500 fixed w-[84.1%] z-10">
                <p className="my-auto p-2 text-center relative">Sản phẩm được cập nhật thành công!</p>
                <div onClick={onClickCloseUpdateAlert} className="absolute top-1.5 right-3 cursor-pointer">
                    &#10006;
                </div>
            </div>



            <div className="bg-blue-300 w-100 absolute">
                <div className="mt-3 mb-2 mx-auto relative">
                    <h3 className="text-center">THÔNG TIN SẢN PHẨM</h3>
                    <i onClick={toggleProductForm} className="fa-regular fa-circle-xmark fa-2xl absolute top-3 right-5 hover:scale-105 cursor-pointer"></i>
                </div>
                <div className='flex justify-center mx-auto'>
                    <div className="flex flex-col gap-2 w-[100%] mx-auto">
                        <div className='flex'>
                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Tên sản phẩm:</h6>
                                <div className="w-[30rem] my-auto">
                                    <input ref={RefTenSanPham} defaultValue={productDetail.tenSanPham} className="form-control "></input>
                                </div>
                            </div>

                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Tên nhãn hiệu:</h6>
                                <div className="w-[30rem] relative">

                                    <select className='form-control' ref={RefNhanHieu} defaultValue={productDetail.nhanHieu}>
                                        {
                                            allBrand.map((item, index) => {
                                                return <option key={index}>{item.label}</option>
                                            })
                                        }
                                    </select>

                                </div>
                            </div>
                        </div>

                        <div className='flex gap-3  top-[8rem]'>
                            <div className="flex gap-2 w-fit ml-[5rem]">
                                <h6 className=" my-auto w-[15rem]">Thay đổi hình ảnh:</h6>
                                <div className='flex relative'>
                                    <div style={{ display: spinLoadAvt ? "block" : "none" }} className="absolute z-50 w-[50%]">
                                        <img className="w-20" src={spinner} alt="loading-avatar-change" />
                                    </div>

                                    {
                                        linkImgAvt ?

                                            <div className="border w-[5rem] h-[5rem] rounded relative">
                                                <img src={linkImgAvt} alt="anh-dai-dien-san-pham" />
                                            </div> :

                                            <div className="border w-[5rem] h-[5rem] rounded relative">
                                                <img src={productDetail.anhDaiDienSanPham} alt="anh-dai-dien-san-pham" />
                                            </div>
                                    }

                                    <div className="w-[8rem] absolute bottom-[-0.2rem]">
                                        {/* ref={RefAnhDaiDien} */}
                                        <input id="files" type="file" onChange={onChangeAvtPrd} className="hidden" />
                                        <label htmlFor="files" className="text-xs text-blue text-blue-950
                                            bg-white px-3 py-0.4 font-medium cursor-pointer">Change</label>
                                    </div>
                                </div>
                            </div>

                            {/* Img 01 */}
                            <div className='flex relative'>
                                <div style={{ display: spinImg01 ? "block" : "none" }} className="absolute z-50 w-[50%]">
                                    <img className="w-20" src={spinner} alt="loading-avatar-change" />
                                </div>

                                {
                                    linkImg01 ?

                                        <div className="border w-[5rem] h-[5rem] rounded relative">
                                            <img src={linkImg01} alt="anh-dai-dien-san-pham" />
                                        </div>
                                        :
                                        <div className="border w-[5rem] h-[5rem] rounded relative">
                                            <img src={productDetail.anhSanPham[0]} alt="anh-dai-dien-san-pham" />
                                        </div>
                                }

                                <div className="w-[8rem] absolute bottom-[-0.2rem]">
                                    <input id="filesImg01" type="file" onChange={onChangeImg01} className="hidden" />
                                    <label htmlFor="filesImg01" className="text-xs text-blue text-blue-950
                                    bg-white px-3 py-0.4 font-medium cursor-pointer">Change</label>
                                </div>
                            </div>

                            {/* Img 02 */}
                            <div className='flex relative'>
                                <div style={{ display: spinImg02 ? "block" : "none" }} className="absolute z-50 w-[50%]">
                                    <img className="w-20" src={spinner} alt="loading-avatar-change" />
                                </div>

                                {
                                    linkImg02 ?

                                        <div className="border w-[5rem] h-[5rem] rounded relative">
                                            <img src={linkImg02} alt="anh-dai-dien-san-pham" />
                                        </div>
                                        :
                                        <div className="border w-[5rem] h-[5rem] rounded relative">
                                            <img src={productDetail.anhSanPham[1]} alt="anh-dai-dien-san-pham" />
                                        </div>
                                }

                                <div className="w-[8rem] absolute bottom-[-0.2rem]">
                                    <input id="filesImg02" type="file" onChange={onChangeImg02} className="hidden" />
                                    <label htmlFor="filesImg02" className="text-xs text-blue text-blue-950
                                    bg-white px-3 py-0.4 font-medium cursor-pointer">Change</label>
                                </div>
                            </div>
                            {/* Img 03 */}
                            <div className='flex relative'>
                                <div style={{ display: spinImg03 ? "block" : "none" }} className="absolute z-50 w-[50%]">
                                    <img className="w-20" src={spinner} alt="loading-avatar-change" />
                                </div>

                                {
                                    linkImg03 ?

                                        <div className="border w-[5rem] h-[5rem] rounded relative">
                                            <img src={linkImg03} alt="anh-dai-dien-san-pham" />
                                        </div>
                                        :
                                        <div className="border w-[5rem] h-[5rem] rounded relative">
                                            <img src={productDetail.anhSanPham[2]} alt="anh-dai-dien-san-pham" />
                                        </div>
                                }

                                <div className="w-[8rem] absolute bottom-[-0.2rem]">
                                    <input id="filesImg03" type="file" onChange={onChangeImg03} className="hidden" />
                                    <label htmlFor="filesImg03" className="text-xs text-blue text-blue-950
                                    bg-white px-3 py-0.4 font-medium cursor-pointer">Change</label>
                                </div>
                            </div>
                        </div>

                        <div className='flex'>
                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Tên chủng loại:</h6>
                                <div className="w-[30rem] relative">
                                    <select className='form-control' ref={RefChungLoai} defaultValue={productDetail.chungLoai}>
                                        {
                                            allCategory.map((item, index) => {
                                                return <option key={index}>{item.label}</option>
                                            })
                                        }
                                    </select>

                                </div>
                            </div>

                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Tên bộ sưu tập:</h6>
                                <div className="w-[30rem] relative">
                                    <select className='form-control' ref={RefBoSuuTap} defaultValue={productDetail.boSuuTap}>
                                        {
                                            allCollection.map((item, index) => {
                                                return <option key={index}>{item.label}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='flex'>
                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Màu sắc:</h6>
                                <div className="w-[30rem] relative">
                                    <select className='form-control' ref={RefMauSac} defaultValue={productDetail.mauSac}>
                                        {
                                            allColor.map((item, index) => {
                                                return <option key={index}>{item.label}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Kích cỡ:</h6>
                                <div className="w-[30rem] relative">
                                    <select className='form-control' ref={RefKichCo} defaultValue={productDetail.kichCo}>
                                        {
                                            allSize.map((item, index) => {
                                                return <option key={index}>{item.label}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Tổng số lượng:</h6>
                                <div className="w-[30rem]">
                                    <input ref={RefTongSoLuong} type='number' className="form-control "
                                        defaultValue={productDetail.tongSoLuong}
                                    ></input>
                                </div>
                            </div>
                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Giá tiền:</h6>
                                <div className="w-[30rem]">
                                    <input ref={RefGiaTien} type='number' className="form-control "
                                        defaultValue={productDetail.giaTien}
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Giảm giá %:</h6>
                                <div className="w-[30rem]">
                                    <input ref={RefGiamGia} type='number' className="form-control "
                                        defaultValue={productDetail.giamGia}
                                    ></input>
                                </div>
                            </div>

                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Mô tả 1:</h6>
                                <div className="w-[30rem]">
                                    <input ref={RefMoTa1} className="form-control "
                                        defaultValue={productDetail.moTa1}
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Mô tả 2:</h6>
                                <div className="w-[30rem]">
                                    <input ref={RefMoTa2} className="form-control "
                                        defaultValue={productDetail.moTa2}
                                    ></input>
                                </div>
                            </div>

                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Mô tả 3:</h6>
                                <div className="w-[30rem]">
                                    <input ref={RefMoTa3} className="form-control "
                                        defaultValue={productDetail.moTa3}
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Mô tả 4:</h6>
                                <div className="w-[30rem]">
                                    <input ref={RefMoTa4} className="form-control"
                                        defaultValue={productDetail.moTa4}
                                    ></input>
                                </div>
                            </div>
                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Mô tả 5:</h6>
                                <div className="w-[30rem]">
                                    <input ref={RefMoTa5} className="form-control "
                                        defaultValue={productDetail.moTa5}
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-2 mx-auto">
                            <h6 className="whitespace-nowrap w-[10rem]">Chi tiết:</h6>
                            <div className="w-[81rem]">
                                <textarea ref={RefMoTaChiTiet} className="form-control"
                                    defaultValue={productDetail.moTaChiTiet}
                                    rows={13}></textarea>
                            </div>
                        </div>

                        <div className="flex gap-2 mt-2 my-auto relative ml-[5rem]">
                            <button onClick={onClickUpdateProduct} className="disabled:opacity-75 p-2 bg-cyan-950 text-white mb-4 mt-2">Cập nhật sản phẩm</button>
                            <div style={{ display: isProductUpdate ? "block" : "none" }} className="absolute w-10 top-2 left-[8rem]">
                                <img src={spinner} alt="" />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SuaSanPhamComponent