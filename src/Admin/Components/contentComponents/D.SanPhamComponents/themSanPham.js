import { useEffect, useRef, useState } from 'react'
import {
    getVariantProduct, addNewProduct, resetProductExist,
    closeAddNewProductForm, getProductPagination
} from '../../../Redux/ActionsAdmin'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import spinner from '../../../../Assets/Spinning/spinner_black.svg'
import Select from 'react-select';

const ThemSanPhamComponent = () => {
    const dispatch = useDispatch()
    const {
        clickedQuanLySanPham,
        allBrand,
        allCategory,
        allCollection,
        allColor,
        allSize,
        productLoading,
        productCreated,
        productExisted,
        allProduct,

        openThemSpComponent,

    } = useSelector((reduxData) => reduxData.AdminReducer)
    // Load brand, category, collection, color, size

    useEffect(() => {
        if (clickedQuanLySanPham) {
            dispatch(getVariantProduct())
        }
    }, [])



    const RefTenSanPham = useRef(null)
    const RefAnhDaiDien = useRef(null)
    const RefThemHinhAnh = useRef(null)
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



    // GET_LINK_AVT_PRODUCT
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
    // GET_LINKS_IMAGE_PRODUCT
    const [ImagesFile, setImagesFile] = useState([])
    const [linksImage, setLinksImage] = useState([])
    const [spinLinkImages, setSpinLinkImages] = useState(false)
    const onChangeLinkImages = (e) => {
        const images = e.target.files
        if (images !== []) {

            setImagesFile(Object.values(images))
        } else { }
    }

    useEffect(() => {
        if (ImagesFile !== []) {

            const formData = new FormData();
            const apiLink = process.env.REACT_APP_API_LINK
            const PRESET_NAME = process.env.REACT_APP_PRESET_NAME
            const urlImages = []
            formData.append('upload_preset', PRESET_NAME)
            formData.append('folder', "PRODUCT_IMAGES")

            ImagesFile.map((item) => {
                setSpinLinkImages(true)
                formData.append('file', item)
                axios.post(apiLink, formData, {
                    headers: { "Content-Type": "multipart/form-data" }
                }).then(response => {
                    if (response.data.url) {
                        urlImages.push(response.data.url)
                        setSpinLinkImages(false)
                    }
                })
            })
            setLinksImage(urlImages)
        } else { }
    }, [ImagesFile])

    const [selectNhanHieu, setSelectNhanHieu] = useState()
    const handleSelectNhanHieu = (data) => {
        setSelectNhanHieu(data)
    }

    const [selectChungLoai, setSelectChungLoai] = useState()
    const handleSelectChungLoai = (data) => {
        setSelectChungLoai(data)
    }


    const [selectBoSuuTap, setSelectBoSuuTap] = useState()
    const handleSelectBoSuuTap = (data) => {
        setSelectBoSuuTap(data)
    }
    const [selectMauSac, setSelectMauSac] = useState()
    const handleSelectMauSac = (data) => {
        setSelectMauSac(data)
    }
    const [selectKichCo, setSelectKichCo] = useState()
    const handleSelectKichCo = (data) => {
        setSelectKichCo(data)
    }

    const [showAlert, setShowAlert] = useState(false)
    const [mesAlert, setMesAlert] = useState("")
    const onClickCloseAlert = () => {
        setShowAlert(false)
    }

    const onClickAddNewProduct = () => {
        if (RefTenSanPham.current.value.trim() == "") {
            setShowAlert(true)
            setMesAlert("tên sản phẩm")
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
            return RefTenSanPham.current.focus()

        } else if (RefAnhDaiDien.current.value == "") {
            setShowAlert(true)
            setMesAlert("ảnh đại diện")
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
            return RefAnhDaiDien.current.focus()
            // RefThemHinhAnh.current.value == "" || 
        } else if (linksImage.length < 3) {
            setShowAlert(true)
            setMesAlert("3 ảnh sản phẩm")
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
            return RefThemHinhAnh.current.focus()
        } else if (selectNhanHieu == undefined || selectNhanHieu.length == 0) {
            setShowAlert(true)
            setMesAlert("tên nhãn hiệu")
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
            return RefNhanHieu.current.focus()
        } else if (selectChungLoai == undefined || selectChungLoai.length == 0) {
            setShowAlert(true)
            setMesAlert("tên chủng loại")
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
            return RefChungLoai.current.focus()
        } else if (selectBoSuuTap == undefined || selectBoSuuTap.length == 0) {
            setShowAlert(true)
            setMesAlert("tên bộ sưu tập")
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
            return RefBoSuuTap.current.focus()
        } else if (selectMauSac == undefined || selectMauSac.length == 0) {
            setShowAlert(true)
            setMesAlert("tên màu sắc")
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
            return RefMauSac.current.focus()
        } else if (selectKichCo == undefined || selectKichCo.length == 0) {
            setShowAlert(true)
            setMesAlert("kích cỡ")
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
            return RefKichCo.current.focus()
        } else if (RefTongSoLuong.current.value == "") {
            setShowAlert(true)
            setMesAlert("số lượng")
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
            return RefTongSoLuong.current.focus()
        } else if (RefGiaTien.current.value == "") {
            setShowAlert(true)
            setMesAlert("giá tiền")
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
            return RefGiaTien.current.focus()
        } else if (RefGiamGia.current.value == "") {
            setShowAlert(true)
            setMesAlert("giảm giá")
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
            return RefGiamGia.current.focus()
        } else if (RefMoTa1.current.value == "") {
            setShowAlert(true)
            setMesAlert("mô tả 1")
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
            return RefMoTa1.current.focus()
        } else if (RefMoTa2.current.value == "") {
            setShowAlert(true)
            setMesAlert("mô tả 2")
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
            return RefMoTa2.current.focus()
        } else if (RefMoTa3.current.value == "") {
            setShowAlert(true)
            setMesAlert("mô tả 3")
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
            return RefMoTa3.current.focus()
        } else if (RefMoTa4.current.value == "") {
            setShowAlert(true)
            setMesAlert("mô tả 4")
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
            return RefMoTa4.current.focus()
        } else if (RefMoTa5.current.value == "") {
            setShowAlert(true)
            setMesAlert("mô tả 5")
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
            return RefMoTa5.current.focus()
        } else if (RefMoTaChiTiet.current.value == "") {
            setShowAlert(true)
            setMesAlert("mô tả chi tiết")
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
            return RefMoTaChiTiet.current.focus()
        } else {

            let newProduct = {
                tenSanPham: RefTenSanPham.current.value,
                anhDaiDienSanPham: linkImgAvt,
                anhSanPham: linksImage,
                nhanHieu: selectNhanHieu.label,
                chungLoai: selectChungLoai.label,
                boSuuTap: selectBoSuuTap.label,
                mauSac: selectMauSac.label,
                kichCo: selectKichCo.label,
                tongSoLuong: Number(RefTongSoLuong.current.value),
                giaTien: Number(RefGiaTien.current.value),
                giamGia: Number(RefGiamGia.current.value),
                moTa1: RefMoTa1.current.value,
                moTa2: RefMoTa2.current.value,
                moTa3: RefMoTa3.current.value,
                moTa4: RefMoTa4.current.value,
                moTa5: RefMoTa5.current.value,
                moTaChiTiet: RefMoTaChiTiet.current.value
            }
            dispatch(addNewProduct(newProduct))
        }
    }

    const [showAlertPrdCreated, setShowAlertPrdCreated] = useState(false)
    const [showAlertPrdExisted, setShowAlertPrdExisted] = useState(false)


    useEffect(() => {
        if (productCreated) {
            setShowAlertPrdCreated(true)
            setTimeout(() => {
                setShowAlertPrdCreated(false)
            }, 3000);

        } else { }
    }, [productCreated])

    useEffect(() => {
        if (productCreated) {
            dispatch(getProductPagination())
        } else { }
    })



    useEffect(() => {
        if (productExisted) {
            setShowAlertPrdExisted(true)
            setTimeout(() => {
                setShowAlertPrdExisted(false)
                dispatch(resetProductExist())
            }, 3000);
        } else { }
    }, [productExisted])


    // Close product form
    const toggleProductForm = () => {
        dispatch(closeAddNewProductForm())
    }

    return (
        <>
            <div style={{ display: showAlert ? "block" : "none" }} className="bg-orange-500 fixed w-[84.1%] z-10">
                <p className="my-auto p-2 text-center relative">Vui lòng kiểm tra {mesAlert}</p>
                <div onClick={onClickCloseAlert} className="absolute top-1.5 right-3 cursor-pointer">
                    &#10006;
                </div>
            </div>

            <div style={{ display: showAlertPrdCreated ? "block" : "none" }} className="bg-lime-500 fixed w-[84.1%] z-10">
                <p className="my-auto p-2 text-center relative">Sản phẩm được tạo thành công!</p>
                <div onClick={onClickCloseAlert} className="absolute top-1.5 right-3 cursor-pointer">
                    &#10006;
                </div>
            </div>

            <div style={{ display: showAlertPrdExisted ? "block" : "none" }} className="bg-orange-500 fixed w-[84.1%] z-10">
                <p className="my-auto p-2 text-center relative">Sản phẩm đã tồn tại!</p>
                <div onClick={onClickCloseAlert} className="absolute top-1.5 right-3 cursor-pointer">
                    &#10006;
                </div>
            </div>

            <div style={{ display: openThemSpComponent ? "block" : "none" }} className="bg-blue-300 w-100 absolute">
                <div className="mt-3 mb-2 mx-auto relative">
                    <h3 className="text-center">THÊM SẢN PHẨM MỚI</h3>
                    <i onClick={toggleProductForm} className="fa-regular fa-circle-xmark fa-2xl absolute top-3 right-5 hover:scale-105 cursor-pointer"></i>
                </div>
                <div className='flex justify-center mx-auto'>
                    <div className="flex flex-col gap-2 w-[100%] mx-auto">
                        <div className='flex'>
                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Tên sản phẩm:</h6>
                                <div className="w-[30rem]">
                                    <input ref={RefTenSanPham} className="form-control "></input>
                                </div>
                            </div>

                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Ảnh đại diện:</h6>
                                <div className="w-[30rem] relative">
                                    <img style={{ display: spinLoadAvt ? "block" : "none" }} src={spinner} className='absolute w-10 right-0' />
                                    <input onChange={onChangeAvtPrd} ref={RefAnhDaiDien} type='file' className="form-control "></input>
                                </div>
                            </div>
                        </div>

                        <div className='flex'>
                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Thêm hình ảnh:</h6>
                                <div className="w-[30rem] relative">
                                    <img style={{ display: spinLinkImages ? "block" : "none" }} src={spinner} className='absolute w-10 right-0' />
                                    <input onChange={onChangeLinkImages} type="file" multiple ref={RefThemHinhAnh} className="form-control "></input>
                                </div>
                            </div>

                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Tên nhãn hiệu:</h6>
                                <div className="w-[30rem] relative">
                                    <Select
                                        ref={RefNhanHieu}
                                        options={allBrand}
                                        placeholder="Chọn nhãn hiệu"
                                        value={selectNhanHieu}
                                        onChange={handleSelectNhanHieu}
                                    />

                                </div>
                            </div>
                        </div>



                        <div className='flex'>
                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Tên chủng loại:</h6>
                                <div className="w-[30rem] relative">
                                    <Select
                                        ref={RefChungLoai}
                                        options={allCategory}
                                        placeholder="Chọn chủng loại"
                                        value={selectChungLoai}
                                        onChange={handleSelectChungLoai}
                                    />
                                </div>
                            </div>

                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Tên bộ sưu tập:</h6>
                                <div className="w-[30rem] relative">
                                    <Select
                                        ref={RefBoSuuTap}
                                        options={allCollection}
                                        placeholder="Chọn bộ sưu tập"
                                        value={selectBoSuuTap}
                                        onChange={handleSelectBoSuuTap}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='flex'>
                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Màu sắc:</h6>
                                <div className="w-[30rem] relative">

                                    <Select
                                        ref={RefMauSac}
                                        options={allColor}
                                        placeholder="Chọn màu sắc"
                                        value={selectMauSac}
                                        onChange={handleSelectMauSac}
                                    />
                                </div>
                            </div>
                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Kích cỡ:</h6>
                                <div className="w-[30rem] relative">
                                    <Select
                                        ref={RefKichCo}
                                        options={allSize}
                                        placeholder="Chọn kích cỡ"
                                        value={selectKichCo}
                                        onChange={handleSelectKichCo}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Tổng số lượng:</h6>
                                <div className="w-[30rem]">
                                    <input ref={RefTongSoLuong} type='number' className="form-control "></input>
                                </div>
                            </div>
                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Giá tiền:</h6>
                                <div className="w-[30rem]">
                                    <input ref={RefGiaTien} type='number' className="form-control "></input>
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Giảm giá %:</h6>
                                <div className="w-[30rem]">
                                    <input ref={RefGiamGia} type='number' className="form-control "></input>
                                </div>
                            </div>

                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Mô tả 1:</h6>
                                <div className="w-[30rem]">
                                    <input ref={RefMoTa1} className="form-control "></input>
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Mô tả 2:</h6>
                                <div className="w-[30rem]">
                                    <input ref={RefMoTa2} className="form-control "></input>
                                </div>
                            </div>

                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Mô tả 3:</h6>
                                <div className="w-[30rem]">
                                    <input ref={RefMoTa3} className="form-control "></input>
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Mô tả 4:</h6>
                                <div className="w-[30rem]">
                                    <input ref={RefMoTa4} className="form-control "></input>
                                </div>
                            </div>
                            <div className="flex gap-2 mx-auto">
                                <h6 className="whitespace-nowrap my-auto w-[10rem]">Mô tả 5:</h6>
                                <div className="w-[30rem]">
                                    <input ref={RefMoTa5} className="form-control "></input>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-2 mx-auto">
                            <h6 className="whitespace-nowrap w-[10rem]">Chi tiết:</h6>
                            <div className="w-[81rem]">
                                <textarea ref={RefMoTaChiTiet} className="form-control" rows={15}></textarea>
                            </div>
                        </div>

                        <div className="flex gap-2 mt-2 my-auto relative ml-[5rem]">
                            <button onClick={onClickAddNewProduct} className="p-2 bg-cyan-950 text-white mb-5 mt-2">Thêm sản phẩm</button>
                            <div style={{ display: productLoading ? "block" : "none" }} className="absolute w-10 top-2 left-[10rem]">
                                <img src={spinner} alt="" />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ThemSanPhamComponent