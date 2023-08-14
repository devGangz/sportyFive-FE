import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import spinning from "../../../../../Assets/Spinning/Spinner-1s-200px.svg"
import {
    addNewNhanHang,
    resetBrandExist,
} from "../../../../Redux/ActionsAdmin"
import axios from 'axios';

const NhanHangComponent = () => {
    const dispatch = useDispatch()
    const {
        waitingServer,
        createBrandOK,
        brandWasExist,
    } = useSelector((reduxData) => reduxData.AdminReducer)
    // Get link logo
    const [logoFileIs, setLogoFile] = useState(null)
    const onChangeLogo = (e) => {
        const Logo = e.target.files[0]
        if (Logo !== undefined) {
            setLogoFile(Logo)
            console.log("Logo is ok", Logo);
        } else { }
    }
    const [linkImg, setLinkImg] = useState("")
    useEffect(() => {
        if (logoFileIs !== null) {
            const formData = new FormData();
            const apiLink = process.env.REACT_APP_API_LINK;
            const PRESET_NAME = process.env.REACT_APP_PRESET_NAME;
            formData.append('upload_preset', PRESET_NAME);
            formData.append('folder', "LOGO")
            formData.append('file', logoFileIs);
            axios.post(apiLink, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            }).then(response => {
                if (response.data.url) {
                    setLinkImg(response.data.url)
                }
            })
        }
    }, [logoFileIs])
    const RefInput = useRef(null)
    const RefInputChooseFile = useRef(null)
    const [brandCreated, setBrandCreated] = useState(false)
    const [alertEmptyInput, setAlertEmptyInput] = useState(false)
    const [alertBrandExist, setAlertBrandExist] = useState(false)

    const onClickThemBrand = () => {
        if (RefInput.current.value.trim() == "") {
            RefInput.current.focus()
            setAlertEmptyInput(true)
            setTimeout(() => {
                setAlertEmptyInput(false)
            }, 2000);
        } else {
            let newBrand = {
                label: RefInput.current.value.trim(),
                value: RefInput.current.value.trim(),
                image: linkImg
            }
            setAlertBrandExist(false)
            setAlertEmptyInput(false)
            dispatch(addNewNhanHang(newBrand))
            RefInput.current.value = ""
            RefInputChooseFile.current.value = ""
        }
    }

    useEffect(() => {
        if (brandWasExist) {
            setAlertBrandExist(true)
            setTimeout(() => {
                setAlertBrandExist(false)
                dispatch(resetBrandExist())
            }, 3000);
        } else { }
    }, [brandWasExist])

    useEffect(() => {
        if (createBrandOK) {
            setBrandCreated(true)
            setTimeout(() => {
                setBrandCreated(false)
            }, 3000);
        } else { }
    }, [createBrandOK])

    const closeMissInput = () => {
        setAlertEmptyInput(false)
    }
    const closeBrandExistAlert = () => {
        setAlertBrandExist(false)
    }
    const closeBrandCreatedAlert = () => {
        setBrandCreated(false)
    }


    // style={{ display: alertBrandExist ? "block" : "none" }}
    return (
        <>
            <div style={{ display: alertBrandExist ? "block" : "none" }} className="bg-orange-500 absolute w-[100%] left-0 top-0" >
                <p className="my-auto p-2 text-center">Nhãn hiệu đã tồn tại!</p>
                <div onClick={closeBrandExistAlert} className="absolute  top-1.5 right-3 cursor-pointer">
                    &#10006;
                </div>
            </div>
            <div style={{ display: alertEmptyInput ? "block" : "none" }} className="bg-orange-500 absolute w-[100%] left-0 top-0">
                <p className="my-auto p-2 text-center relative">Bạn chưa nhập nhãn hiệu!</p>
                <div onClick={closeMissInput} className="absolute top-1.5 right-3 cursor-pointer">
                    &#10006;
                </div>
            </div>

            <div style={{ display: brandCreated ? "block" : "none" }} className="bg-lime-500 absolute w-[100%] left-0 top-0">
                <p className="my-auto p-2 text-center">Nhãn hiệu được tạo thành công!</p>
                <div onClick={closeBrandCreatedAlert} className="absolute top-1.5 right-3 cursor-pointer">
                    &#10006;
                </div>
            </div>

            <div className="w-[70rem] my-auto rounded flex items-center">
                <div className="flex h-10 gap-3 px-1 my-auto relative mt-3 mb-5">
                    <div className="my-auto w-[10rem]">
                        <h6 className="whitespace-nowrap my-auto ">Thêm nhãn hiệu:</h6>
                    </div>

                    <div className="">
                        <div className="w-[20rem] relative">
                            <input ref={RefInput} type="text" className="form-control" />
                        </div>
                        <div className="w-[20rem] relative pt-2">
                            <input onChange={onChangeLogo} ref={RefInputChooseFile} type='file' className="form-control "></input>
                        </div>

                    </div>


                    <button onClick={onClickThemBrand} className="px-3 bg-cyan-900 text-white hover:scale-105 duration-150">Thêm</button>
                    <div style={{ display: waitingServer ? "block" : "none" }} className="absolute w-10 right-0">
                        <img src={spinning} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NhanHangComponent
