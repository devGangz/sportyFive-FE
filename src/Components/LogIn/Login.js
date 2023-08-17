
import googleIcon from '../../Assets/LogoSocial/google.png'
import githubIcon from '../../Assets/LogoSocial/github.png'

import { auth, provider, providerGitHub } from '../../Firebase/Firebase'
import { signInWithPopup } from 'firebase/auth'
import { useEffect, useRef, useState } from 'react'
import { sendUserInforGetToken, getUserByAccount, callApiTaoMoiUserFromFirebase } from '../../Redux/actions'
import { useDispatch, useSelector } from 'react-redux'

import spinningIcon from '../../Assets/Spinning/Rolling-1s-200px.svg'

const LogInComponent = () => {
    const dispatch = useDispatch()
    const { tokenUser, pendingLogin, userFromToken, newUserWasCreated } = useSelector((reduxData) => reduxData.SportyFiveReducer)

    const [value, setValue] = useState(null)
    const loginWithGoogle = () => {
        return (
            signInWithPopup(auth, provider).then((data) => {


                localStorage.setItem("uId", data.user.uid)
                // localStorage.setItem("name", data.user.displayName)
                // localStorage.setItem("imagePerson", data.user.photoURL)

                // console.log("ten", data.user.displayName);
                // console.log("img", data.user.photoURL);
                // console.log("uid", data.user.uid);


                const newUser = {
                    tenTaiKhoan: data.user.displayName,
                    uId: data.user.uid,
                    soDienThoai: "",
                    email: "",
                    imageUser: data.user.photoURL,
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
                dispatch(callApiTaoMoiUserFromFirebase(newUser))
                console.log("newWas", newUserWasCreated);
                setValue(localStorage.getItem("uId"))
            })
        )
    }




    const loginWithGithub = () => {
        signInWithPopup(auth, providerGitHub).then(res => {
            console.log("inforGitHub", res);
            console.log(res._tokenResponse.localId);
            localStorage.setItem("uId", res._tokenResponse.localId)
            const newUser = {
                tenTaiKhoan: res._tokenResponse.screenName,
                uId: res._tokenResponse.localId,
                soDienThoai: "",
                email: "",
                imageUser: res.user.photoURL,
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
            dispatch(callApiTaoMoiUserFromFirebase(newUser))
            setValue(res._tokenResponse.localId)
        }).catch(error => {
            console.log("error login Github", error);
        })
    }

    const RefEmailInput = useRef(null)
    const RefPasswordInput = useRef(null)
    const RefRememberme = useRef(null)

    let accountUser = {
        email: "",
        password: ""
    }


    const setCookie = (cname, cvalue, exdays) => {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }



    const [alertInvalid, setAlertInvalid] = useState(false)
    const [alertText, setAlertText] = useState("")




    const loginWithAccout = () => {
        accountUser = {
            email: RefEmailInput.current.value.trim(),
            password: RefPasswordInput.current.value.trim()
        }
        if (accountUser.email == "") {
            RefEmailInput.current.focus()
            setAlertText("Bạn chưa nhập email")
            return setAlertInvalid(true)

        } else if (accountUser.email.includes("@") == false) {
            RefEmailInput.current.focus()
            setAlertText("Email không đúng định dạng")
            return setAlertInvalid(true)
        } else if (accountUser.password == "") {
            RefPasswordInput.current.focus()
            setAlertText("Bạn chưa nhập mật khẩu")
            return setAlertInvalid(true)
        }
        else {
            setAlertInvalid(false)
            setAlertText("")
            return dispatch(sendUserInforGetToken(accountUser))
        }
    }



    useEffect(() => {
        if (tokenUser.tokenExist !== undefined) {
            setCookie('token', tokenUser.tokenExist, 1)
            dispatch(getUserByAccount(tokenUser))
        }
    }, [tokenUser])


    useEffect(() => {
        if (userFromToken.user !== undefined) {
            const userFoundFromToken = userFromToken.user
            console.log("uIdUseEffect", userFoundFromToken);
            setValue(userFoundFromToken.uId)
            localStorage.setItem("uId", userFoundFromToken.uId)
        }
    }, [userFromToken.user])



    return (
        <>
            <div style={{ display: alertInvalid ? "block" : "none" }} className='absolute mx-auto w-[100vw] h-auto px-5 bg-black text-cyan-400'>
                <p className='my-auto py-2 text-center'>{alertText}</p>
            </div>

            {
                value !== null ? window.location.href = "/sportyFive-FE/" :
                    <div className="w-screen h-screen  items-center flex bg-cyan-100">
                        <div className="mx-auto max-w-[95%]  items-center top-[50%] left-[50%] p-4 rounded-2xl bg-cyan-400">
                            <a href="/" className='absolute left-[79rem] border p-1 rounded'>
                                <i className="fa-solid fa-xmark fa-2xl"></i>
                            </a>
                            <h3 className="flex justify-center whitespace-nowrap max-w-[80%] mx-auto font-semibold">
                                Đăng nhập tài khoản của bạn
                            </h3>

                            <div className="mx-auto justify-center flex pt-2 pb-2" action="#">
                                <div className="flex gap-4 max-w-[100%]">
                                    <button className="px-2 flex gap-2 p-2 rounded whitespace-nowrap bg-slate-600 hover:scale-105 w-[20rem]  justify-center duration-300"
                                        onClick={loginWithGoogle}
                                    >
                                        <div className="max-w-[1.3rem] my-auto">
                                            <img src={googleIcon} alt="" />
                                        </div>
                                        <p className="my-auto text-xs lg:text-sm text-white">Log in with Google</p>
                                    </button>
                                    <button className="px-2 flex gap-2 p-2 rounded whitespace-nowrap bg-slate-600 hover:scale-105 w-[20rem] justify-center duration-300"
                                        onClick={loginWithGithub}
                                    >
                                        <div className="max-w-[1.3rem] my-auto">
                                            <img src={githubIcon} alt="" />
                                        </div>
                                        <p className="my-auto text-xs lg:text-sm text-white">Log in with Github</p>
                                    </button>
                                </div>
                            </div>

                            <div className="flex mt-2 justify-center max-w-[100%]  gap-3">
                                <hr className="text-white w-50 bg-white h-[3px]"></hr>
                                <p className="my-auto font-semibold text-gray-600">Or</p>
                                <hr className="text-white w-50 bg-white h-[3px]"></hr>
                            </div>

                            <p className="my-auto font-semibold text-gray-600">Email:</p>
                            <input ref={RefEmailInput} type="email" className="form-control my-2" placeholder="Nhập email..." />

                            <p className="my-auto font-semibold text-gray-600">Mật khẩu:</p>
                            <input ref={RefPasswordInput} type="password" className="form-control py-auto" placeholder="Nhập mật khẩu" />

                            <div className="flex gap-2 mt-3 justify-between max-w-[100%] mx-auto">
                                <div className="flex gap-2">
                                    <input ref={RefRememberme} type="checkbox" className="cursor-pointer my-auto w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" name="" id="" />
                                    <p className="my-auto  text-white">Remember me</p>
                                </div>
                                <a href="/sportyFive-FE/forgotPassword" >Quên mật khẩu</a>
                            </div>
                            <div className="max-w-[100%] items-center relative">
                                <button disabled={pendingLogin} onClick={loginWithAccout} className="cursor-pointer w-100 rounded mt-2 p-1 bg-blue-800 text-white hover:bg-blue-600">
                                    Đăng nhập
                                </button>
                                <div style={{ display: pendingLogin ? "block" : "none" }} className='absolute w-8 h-8 top-2 right-1'>
                                    <img src={spinningIcon}></img>
                                </div>
                            </div>
                            <p className="text-white mt-3 mb-[-3px]">Bạn chưa có tài khoản?&nbsp;<a href="/registerAccount" className="text-blue-700 hover:underline">Đăng ký</a></p>
                        </div>
                    </div>
            }
        </>
    )
}

export default LogInComponent