import { useEffect, useState, useRef } from "react"
// import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { callApiToUpdateUser, updateAvatarLink } from '../../Redux/actions'
import axios from 'axios';
import loadingAvt from '../../Assets/Spinning/Spinner-1s-200px.svg'

const UserDetail = () => {
    const { userFound } = useSelector((reduxData) => reduxData.SportyFiveReducer)
    const dispatch = useDispatch()
    // const paramUserName = useParams()
    // useEffect(() => {
    //     dispatch(callApiGetUserByUid(paramUserName.paramUserName))
    // }, [])


    const [isActive, setIsActive] = useState(true);
    const RefTenTaiKhoan = useRef(null);
    const RefEmail = useRef(null);
    const RefSoDienThoai = useRef(null);
    const RefNgaySinh = useRef(null);
    const RefGioiTinh = useRef(null);
    const RefMaSoThue = useRef(null);
    const RefSoNha = useRef(null);
    const RefTenDuong = useRef(null);
    const RefTenPhuongXa = useRef(null);
    const RefQuanHuyen = useRef(null);
    const RefTenTinh = useRef(null);
    const RefPostCode = useRef(null);
    const RefAvatar = useRef(null)

    const onChangeButton = (event) => {
        if (event.target.value.trim() !== event.target.defaultValue.trim()) {
            setIsActive(false)
        } else {
            setIsActive(true)
        }
    }




    const [newAvatarObject, setNewAvatarObject] = useState(null)
    const [showSpin, setShowSpin] = useState(false)

    const handleChangeAvatar = (e) => {
        const newAvatar = e.target.files[0]
        if (newAvatar !== undefined) {
            newAvatar.preview = URL.createObjectURL(newAvatar)
            setNewAvatarObject(newAvatar)
        } else { }
    }


    useEffect(() => {
        if (newAvatarObject !== null) {
            const formData = new FormData();
            // const CLOUD_NAME = "dsl0rmusy";
            const apiLink = process.env.REACT_APP_API_LINK;
            const PRESET_NAME = process.env.REACT_APP_PRESET_NAME
            formData.append('upload_preset', PRESET_NAME);
            formData.append('folder', "AVATAR")
            formData.append('file', newAvatarObject);
            setShowSpin(true)
            axios.post(apiLink, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            }).then(response => {
                if (response.data.url) {
                    const avatUser = {
                        idUser: userFound._id,
                        linkAvtNew: response.data.url
                    }
                    dispatch(updateAvatarLink(avatUser))
                    setShowSpin(false)
                }
            })
        }
    }, [newAvatarObject])


    const handlerClickSave = () => {
        let newUser = {
            id: userFound._id,
            tenTaiKhoan: RefTenTaiKhoan.current.value,
            soDienThoai: RefSoDienThoai.current.value,
            email: RefEmail.current.value,
            ngaySinh: RefNgaySinh.current.value,
            gioiTinh: RefGioiTinh.current.value,
            maSoThue: RefMaSoThue.current.value,
            soNha: RefSoNha.current.value,
            tenDuong: RefTenDuong.current.value,
            tenPhuongXa: RefTenPhuongXa.current.value,
            tenQuanHuyen: RefQuanHuyen.current.value,
            tenTinh: RefTenTinh.current.value,
            maPostCode: RefPostCode.current.value,
        }

        dispatch(callApiToUpdateUser(newUser))
        setIsActive(true)
    }

    const handlerClickCancel = () => {
        setIsActive(true)
        RefTenTaiKhoan.current.value = RefTenTaiKhoan.current.defaultValue.trim();
        RefEmail.current.value = RefEmail.current.defaultValue.trim();
        RefSoDienThoai.current.value = RefSoDienThoai.current.defaultValue.trim();
        RefNgaySinh.current.value = RefNgaySinh.current.defaultValue;
        RefGioiTinh.current.value = RefGioiTinh.current.defaultValue.trim();
        RefMaSoThue.current.value = RefMaSoThue.current.defaultValue.trim();
        RefSoNha.current.value = RefSoNha.current.defaultValue.trim();
        RefTenDuong.current.value = RefTenDuong.current.defaultValue.trim();
        RefTenPhuongXa.current.value = RefTenPhuongXa.current.defaultValue.trim();
        RefQuanHuyen.current.value = RefQuanHuyen.current.defaultValue.trim();
        RefTenTinh.current.value = RefTenTinh.current.defaultValue.trim();
        RefPostCode.current.value = RefPostCode.current.defaultValue.trim();
    }

    return (
        <>
            <div className="max-w-[90%] mx-auto relative mt-[4.4rem] flex flex-col border mb-5">
                <h3 className="text-black mx-auto mt-2 ">Quản lý tài khoản của bạn</h3>
                <hr className="mt-1 w-[95%] mx-auto"></hr>
                <div className="flex gap-4  justify-center px-3">

                    <div className="w-50 h-50  justify-center flex my-auto flex-col ">
                        <h6 className="my-auto ml-[1.5rem]">Thông tin tài khoản</h6>
                        <div className="mt-3 px-5">

                            <div className="flex gap-3 items-center max-w-[100%] mb-3">
                                <p className="whitespace-nowrap my-auto w-[40%]">Hình đại diện</p>

                                <div className="flex w-[100%] relative">
                                    <div style={{ display: showSpin ? "block" : "none" }} className="absolute w-[50%]">
                                        <img className="w-20" src={loadingAvt} alt="loading-avatar-change" />
                                    </div>
                                    {
                                        newAvatarObject ?
                                            <div className="border w-[5rem] h-[5rem] rounded">
                                                <img src={newAvatarObject.preview} alt="" />
                                            </div> :

                                            <div className="border w-[5rem] h-[5rem] rounded">
                                                <img src={userFound.imageUser} alt="" />
                                            </div>
                                    }
                                    <div className="flex flex-col my-auto">
                                        <div className="my-auto mx-3 hover:scale-105 duration-100 ">
                                            <input ref={RefAvatar} id="files" type="file" onChange={handleChangeAvatar} className="hidden" />
                                            <label htmlFor="files" className="border text-xs py-1 px-3 bg-slate-300 rounded cursor-pointer">Select file</label>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="flex gap-3 items-center max-w-[100%] mb-3">
                                <p className="whitespace-nowrap my-auto w-[40%]">Tên tài khoản:</p>
                                <input onChange={onChangeButton} ref={RefTenTaiKhoan} type="text" className="form-control border my-auto  w-[60%]" defaultValue={userFound.tenTaiKhoan} />
                            </div>

                            <div className="flex gap-3 items-center max-w-[100%] mb-3">
                                <p className="whitespace-nowrap my-auto w-[40%]">Email:</p>
                                <input onChange={onChangeButton} ref={RefEmail} type="email" className="form-control border my-auto  w-[60%]" defaultValue={userFound.email} />
                            </div>


                            <div className="flex gap-3 items-center max-w-[100%] mb-3">
                                <p className="whitespace-nowrap my-auto w-[40%]">Số điện thoại:</p>
                                <input onChange={onChangeButton} ref={RefSoDienThoai} type="text" className="form-control border my-auto  w-[60%]" defaultValue={userFound.soDienThoai} />
                            </div>

                            <div className="flex gap-3 items-center max-w-[100%] mb-3">
                                <p className="whitespace-nowrap my-auto w-[40%]">Ngày sinh:</p>
                                <input onChange={onChangeButton} ref={RefNgaySinh} type="text" className="form-control border my-auto  w-[60%]" defaultValue={userFound.ngaySinh} />
                            </div>

                            <div className="flex gap-3 items-center max-w-[100%] mb-3">
                                <p className="whitespace-nowrap my-auto w-[40%]">Giới tính:</p>
                                <input onChange={onChangeButton} ref={RefGioiTinh} type="select" className="form-control border my-auto  w-[60%]" defaultValue={userFound.gioiTinh} />
                            </div>

                            <div className="flex gap-3 items-center max-w-[100%] mb-3">
                                <p className="whitespace-nowrap my-auto w-[40%]">Mã số thuế:</p>
                                <input onChange={onChangeButton} ref={RefMaSoThue} type="text" className="form-control border my-auto  w-[60%]" defaultValue={userFound.maSoThue} />
                            </div>
                        </div>
                    </div>

                    <div className="w-50 h-50 mt-0 justify-center flex my-auto flex-col ">
                        <h6 className="my-auto">Thông tin địa chỉ </h6>
                        <div className="mt-3 px-4">

                            <div className="flex gap-3 items-center max-w-[100%] mb-3">
                                <p className="whitespace-nowrap my-auto w-[40%]">Số nhà:</p>
                                <input onChange={onChangeButton} ref={RefSoNha} type="text" className="form-control border my-auto  w-[60%]" defaultValue={userFound.soNha} />
                            </div>

                            <div className="flex gap-3 items-center max-w-[100%] mb-3">
                                <p className="whitespace-nowrap my-auto w-[40%]">Tên đường:</p>
                                <input onChange={onChangeButton} ref={RefTenDuong} type="text" className="form-control border my-auto  w-[60%]" defaultValue={userFound.tenDuongPho} />
                            </div>

                            <div className="flex gap-3 items-center max-w-[100%] mb-3">
                                <p className="whitespace-nowrap my-auto w-[40%]">Tên phường/ xã:</p>
                                <input onChange={onChangeButton} ref={RefTenPhuongXa} type="text" className="form-control border my-auto  w-[60%]" defaultValue={userFound.tenPhuongXa} />
                            </div>

                            <div className="flex gap-3 items-center max-w-[100%] mb-3">
                                <p className="whitespace-nowrap my-auto w-[40%]">Tên quận/ huyện:</p>
                                <input onChange={onChangeButton} ref={RefQuanHuyen} type="text" className="form-control border my-auto  w-[60%]" defaultValue={userFound.tenQuanHuyen} />
                            </div>

                            <div className="flex gap-3 items-center max-w-[100%] mb-3">
                                <p className="whitespace-nowrap my-auto w-[40%]">Tên tỉnh/ thành phố:</p>
                                <input onChange={onChangeButton} ref={RefTenTinh} type="text" className="form-control border my-auto  w-[60%]" defaultValue={userFound.tenTinh} />
                            </div>

                            <div className="flex gap-3 items-center max-w-[100%] mb-3">
                                <p className="whitespace-nowrap my-auto w-[40%]">Mã Postcode:</p>
                                <input onChange={onChangeButton} ref={RefPostCode} type="text" className="form-control border my-auto  w-[60%]" defaultValue={userFound.postCode} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="gap-5 flex relative justify-end mb-3 mr-[2.5rem]">
                    <button onClick={handlerClickSave} disabled={isActive} className="disabled:bg-green-300 border px-5 py-2 w-[10%] text-center bg-green-600 text-white rounded">Save</button>
                    <button onClick={handlerClickCancel} className="border px-4 py-2 w-[10%] text-center bg-orange-500  text-white rounded">Cancel</button>
                </div>

                <hr className="mt-1 w-[95%] mx-auto"></hr>
                <div className="my-auto ml-[1.5rem] border">
                    <h6 className="px-3">Thông tin đơn hàng của bạn:</h6>

                </div>
            </div >
        </>

    )
}

export default UserDetail
