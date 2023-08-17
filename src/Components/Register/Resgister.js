import googleIcon from '../../Assets/LogoSocial/google.png'
import facebookIcon from '../../Assets/LogoSocial/facebook.svg'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { callApiToCreateNewUserFromRegister, callApiGetAllUser } from '../../Redux/actions'
import avtD from '../../Assets/AvatarDefaullt/AvtDefault.png'

const RegisterComponent = () => {
    const { allUser, newUserWasCreated, emailUserExisted } = useSelector((reduxData) => reduxData.SportyFiveReducer)
    const dispatch = useDispatch()
    const RefTenTaiKhoan = useRef(null)
    const RefEmail = useRef(null)
    const RefPassword = useRef(null)
    const RefPasswordConfirm = useRef(null)
    const RefAgreeChecked = useRef(null)
    const [textMessge, setTextMessage] = useState("")
    const [isAlert, setIsAlert] = useState(false)

    let userRegister = {
        tenTaiKhoan: "",
        uId: "",
        password: "",
        soDienThoai: "",
        email: "",
        imageUser: "",
        ngaySinh: "",
        gioiTinh: "",
        maSoThue: "",
        soNha: "",
        tenDuong: "",
        tenPhuongXa: "",
        tenQuanHuyen: "",
        tenTinh: "",
        maPostCode: "",
        donHang: [],
        maGiamGia: []
    }

    useEffect(() => {
        dispatch(callApiGetAllUser())
    }, [])


    const onClickRegister = () => {
        if (RefTenTaiKhoan.current.value.trim() == '') {
            setIsAlert(true)
            setTextMessage("Bạn chưa nhập tên người dùng")
            RefTenTaiKhoan.current.focus()
        }
        else if (RefEmail.current.value.trim() == '' || RefEmail.current.value.trim().includes("@") == false) {
            setIsAlert(true)
            setTextMessage("Bạn chưa nhập email hoặc email không đúng định dạng")
            RefEmail.current.focus()
        } else if (RefPassword.current.value.trim() == '') {
            setIsAlert(true)
            setTextMessage("Bạn chưa nhập password")
            RefPassword.current.focus()
        } else if (RefPasswordConfirm.current.value.trim() !== RefPassword.current.value.trim()) {
            setIsAlert(true)
            setTextMessage("Mật khẩu của bạn không trùng khớp")
            RefPasswordConfirm.current.focus()
        } else if (RefAgreeChecked.current.checked == false) {
            setIsAlert(true)
            setTextMessage("Bạn chưa đồng ý với điều khoản của chúng tôi")
            RefAgreeChecked.current.focus()
        }
        else {
            setIsAlert(false)
            if (allUser !== []) {
                userRegister = {
                    tenTaiKhoan: RefTenTaiKhoan.current.value.trim(),
                    uId: "user" + 1000 + (allUser.length + 1),
                    password: RefPassword.current.value.trim(),
                    soDienThoai: "",
                    email: RefEmail.current.value.trim(),
                    imageUser: "https://pbs.twimg.com/tweet_video_thumb/DBBAK32XkAA-VCz.jpg",
                    ngaySinh: "",
                    gioiTinh: "",
                    maSoThue: "",
                    soNha: "",
                    tenDuong: "",
                    tenPhuongXa: "",
                    tenQuanHuyen: "",
                    tenTinh: "",
                    maPostCode: "",
                    role: 1,
                    donHang: [],
                    maGiamGia: []
                }
                // console.log("userReg", userRegister);
            }
            dispatch(callApiToCreateNewUserFromRegister(userRegister))
            if (emailUserExisted) {
                RefEmail.current.focus()
            } else {
                RefTenTaiKhoan.current.value = "";
                RefEmail.current.value = "";
                RefPassword.current.value = "";
                RefPasswordConfirm.current.value = "";
                RefAgreeChecked.current.checked = false;
            }
        }
    }


    const onClickOffAlert = () => {
        setIsAlert(false);
    }

    return (

        <>
            <div style={{ display: emailUserExisted ? "block" : "none" }} className='absolute mx-auto w-[100vw] h-auto px-5 bg-black text-cyan-400'>
                <p className='my-auto py-2 text-center'>EMAIL NÀY ĐÃ TỒN TẠI 1 TÀI KHOẢN KHÁC</p>
            </div >

            <div style={{ display: newUserWasCreated ? "block" : "none" }} className='absolute mx-auto w-[100vw] h-auto px-5 bg-black text-cyan-400'>
                <p className='my-auto py-2 text-center'>TÀI KHOẢN CỦA BẠN ĐƯỢC TẠO THÀNH CÔNG</p>
            </div >

            <div style={{ display: isAlert ? "block" : "none" }} className='absolute mx-auto w-[100vw] h-auto px-5 bg-black text-cyan-400'>
                <p className='my-auto py-2 text-center'>{textMessge}</p>
                <div onClick={onClickOffAlert} className='w-fit absolute top-0.5 right-2 hover:scale-110 cursor-pointer'>
                    <i className="text-white fa-solid fa-xmark fa-xs"></i>
                </div>
            </div >

            <div className="w-screen h-screen  items-center flex bg-cyan-100">

                <div className="mx-auto w-[712px] max-w-[95%] items-center top-[50%] left-[50%] p-4 rounded-2xl bg-cyan-400">
                    <a href="/sportyFive-FE/" className='absolute left-[79rem] hover:scale-110 border p-1 rounded'>
                        <i className="fa-solid fa-xmark fa-2xl"></i>
                    </a>
                    <h3 className="flex justify-center whitespace-nowrap max-w-[80%] mx-auto font-semibold mb-3">
                        Tạo mới tài khoản
                    </h3>

                    <p className="my-auto font-semibold text-gray-600">Tên người dùng:</p>
                    <input ref={RefTenTaiKhoan} type="email" className="form-control my-2" placeholder="Nhập tên người dùng..." />

                    <p className="my-auto font-semibold text-gray-600">Email:</p>
                    <input ref={RefEmail} type="email" className="form-control my-2" placeholder="Nhập email.." />

                    <p className="my-auto font-semibold text-gray-600">Mật khẩu:</p>
                    <input ref={RefPassword} type="text" className="form-control my-2" placeholder="Nhập mật khẩu..." />

                    <p className="my-auto font-semibold text-gray-600">Xác nhận mật khẩu:</p>
                    <input ref={RefPasswordConfirm} type="text" className="form-control my-2" placeholder="Xác nhận mật khẩu..." />

                    <div className="flex gap-2 mt-3 justify-between max-w-[100%] mx-auto">
                        <div className="flex gap-2">
                            <input ref={RefAgreeChecked} type="checkbox" className="cursor-pointer my-auto w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" name="" id="" />
                            <p className="my-auto  text-white">Tôi đồng ý với các <a href="" className='hover:underline text-blue-700'>điều khoản</a></p>
                        </div>
                    </div>
                    <div className="max-w-[100%] items-center">
                        <button onClick={onClickRegister} className="w-100 rounded mt-2 p-1 bg-blue-800 text-white hover:bg-blue-600">
                            Đăng ký
                        </button>
                    </div>
                    <p className="text-white mt-3 mb-[-3px]">Bạn đã có tài khoản?&nbsp;<a href="/sportyFive-FE/login" className="text-blue-700 hover:underline">Đăng nhập ngay!</a></p>
                </div>
            </div>
        </>
    )
}

export default RegisterComponent 