// import jwt from 'jsonwebtoken';
import jwt_decode from "jwt-decode";
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useRef, useEffect, useState } from "react";
import "./Header.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import logoSporty5 from '../../Assets/LogoSporty5/logoS5.png'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth'
import { auth } from '../../Firebase/Firebase'

import { useDispatch, useSelector } from 'react-redux'
import { callApiTaoMoiUserFromFirebase, callApiGetUserByUid } from '../../Redux/actions'
import Cookies from 'js-cookie'


const Header = () => {

    const dispatch = useDispatch()
    const { userFound, updateAvatarOK, newUserWasCreated } = useSelector((reduxData) => reduxData.SportyFiveReducer)
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const openMenu = () => {
        setIsOpenMenu(!isOpenMenu)
    }
    const [isLogin, setLogin] = useState(localStorage.getItem('uId'))
    const [isName, setName] = useState(null)
    const [isAvatar, setAvatar] = useState(null)
    const [isEmail, setEmail] = useState("")
    const [isLogout, setLogout] = useState(false)
    const [isOpenAvatar, setOpenAvatar] = useState(false)
    const [isOpenIcon, setOpenIcon] = useState(false)
    const [avtUserFound, setAvtUserFound] = useState(null)

    useEffect(() => {
        dispatch(callApiGetUserByUid(isLogin))
    }, [])

    useEffect(() => {
        if (userFound !== undefined) {
            setName(userFound.tenTaiKhoan)
            setAvatar(userFound.imageUser)
        }
    }, [userFound])


    const openConfirmLogOut = () => {
        setLogout(true)
    }

    const closeConfirmLogOut = () => {
        setLogout(false)
    }

    const handleClickAvatar = () => {
        setOpenAvatar(!isOpenAvatar)
    }

    const handleClickIcon = () => {
        setOpenIcon(!isOpenIcon)
    }


    const navigate = useNavigate()

    const clickQuanLyTaiKhoan = () => {
        window.location.href = "/sportyFive-FE//userDetail/" + isLogin
    }

    const adminDashboard = () => {
        window.location.href = "/sportyFive-FE/admin"
    }



    const getCookie = (cname) => {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    const [tokenFromCookie, getTokenFromCookie] = useState(null)
    useEffect(() => {
        let CookieReceived = getCookie('token')
        if (CookieReceived !== "") {
            getTokenFromCookie(CookieReceived)
        } else { }
    })


    useEffect(() => {
        if (tokenFromCookie !== null) {
            const userGetFromTokenIs = jwt_decode(tokenFromCookie)
            const userFoundFromToken = userGetFromTokenIs.userFinding
            console.log(userGetFromTokenIs.userFinding);
            setLogin(userFoundFromToken.uId)
            setName(userFoundFromToken.tenTaiKhoan)
            setAvatar(userFoundFromToken.imageUser)
        }
    })

    const logOut = () => {
        signOut(auth).then(() => {
            setLogin(null)
            localStorage.clear()
            window.location.href = "/sportyFive-FE/"
            console.log("isLogin", isLogin);
        }).catch((error) => {
            setLogin("")
            Cookies.remove('token')
            window.location.reload()
        })
        console.log("const", isLogin);
        const uIdString = isLogin.slice(0, 4)
        console.log(uIdString);
        if (uIdString == 'user') {
            setLogin(null)
            setAvatar(null)
            Cookies.remove('token')
            localStorage.clear()
            window.location.href = "/sportyFive-FE"
        }
    }

    return (
        <header className='fixed top-0 w-100 z-30 h-[70px]'>
            <nav className='bg-black lg:flex justify-content-around items-center w-100 fixed top-0 hidden'>
                <div className='flex '>
                    <span className='flex cursor-pointer '>
                        <img className='h-10' src={logoSporty5} alt="sporty5-logo" />
                    </span>
                </div>

                <div className='flex items-center'>
                    <button type='button' onClick={() => navigate("/sportyFive-FE")} className='text-white hover:bg-cyan-600 px-3 h-[70px]'>Home</button>
                    <div className='group'>
                        <button className='text-white peer  hover:bg-cyan-600 px-3 h-[70px] z-10 group-hover:bg-cyan-600 whitespace-nowrap'>Quần áo &nbsp;
                            <i className="fa fa-caret-down hover:text-white"></i>
                        </button>
                        <div className="hidden peer-hover:flex hover:flex flex-col absolute bg-gray-900 w-[150px] text-black">
                            <a className='text-white py-2 px-3 hover:bg-cyan-600 ' href="#">Áo khoác</a>
                            <a className='text-white py-2 px-3 hover:bg-cyan-600 ' href="#">Áo tập</a>
                            <a className='text-white py-2 px-3 hover:bg-cyan-600 ' href="#">Áo Polo</a>
                        </div>
                    </div>

                    <div className='group'>
                        <button className='text-white peer  hover:bg-cyan-600 px-3 h-[70px] z-10  group-hover:bg-cyan-600 whitespace-nowrap'>Giày dép &nbsp;
                            <i className="fa fa-caret-down hover:text-white"></i>
                        </button>
                        <div className="hidden peer-hover:flex hover:flex flex-col absolute bg-gray-900 w-[150px] text-black">
                            <a className='text-white py-2 px-3 hover:bg-cyan-600 ' href="#">Áo khoác</a>
                            <a className='text-white py-2 px-3 hover:bg-cyan-600 ' href="#">Áo tập</a>
                            <a className='text-white py-2 px-3 hover:bg-cyan-600 ' href="#">Áo Polo</a>
                        </div>
                    </div>

                    <div className='group'>
                        <button className='text-white peer  hover:bg-cyan-600 px-3 h-[70px] z-10  group-hover:bg-cyan-600 whitespace-nowrap'>Dụng cụ &nbsp;
                            <i className="fa fa-caret-down hover:text-white"></i>
                        </button>
                        <div className="hidden peer-hover:flex hover:flex flex-col absolute bg-gray-900 w-[150px] text-black">
                            <a className='text-white py-2 px-3 hover:bg-cyan-600 ' href="#">Áo khoác</a>
                            <a className='text-white py-2 px-3 hover:bg-cyan-600 ' href="#">Áo tập</a>
                            <a className='text-white py-2 px-3 hover:bg-cyan-600 ' href="#">Áo Polo</a>
                        </div>
                    </div>
                </div>

                <ul className='flex my-auto'>
                    <li className='w-96 flex items-center relative'>
                        <input className=' form-control' placeholder='Tìm kiếm sản phẩm, danh mục ...' type="text" />
                        <i className="fas fa-search absolute z-100 right-3 text-black cursor-pointer hover:scale-105"></i>
                    </li>
                    <ul className='flex gap-3 items-center'>
                        <li><i className="fas fa-cart-plus fa-lg cursor-pointer text-white hover:scale-110"></i></li>
                        <li>
                            {
                                isLogin ?
                                    <div>
                                        <img onClick={handleClickAvatar} className='cursor-pointer w-8 h-8 rounded-full justify-center flex items-center my-auto hover:scale-110' src={isAvatar} alt="" />

                                        <div style={{ display: isOpenAvatar ? "flex" : "none" }} className='flex flex-col absolute  bg-gray-900 w-[18rem] p-2 right-2 top-[4.4rem] rounded-b'>
                                            <p className='mx-auto font-medium text-white'>Thông tin tài khoản</p>
                                            <div className='py-1 flex gap-2 items-center'>
                                                {
                                                    newUserWasCreated ?
                                                        <img src={avtUserFound} className='w-10 h-10 rounded-sm' alt="" />
                                                        :
                                                        <img src={isAvatar} className='w-10 h-10 rounded-sm' alt="" />
                                                }

                                                <div>
                                                    <p className='my-auto font-medium text-white whitespace-nowrap'>{isName}</p>
                                                </div>
                                            </div>
                                            <a onClick={clickQuanLyTaiKhoan} className='py-1 my-2 px-3  hover:bg-cyan-600 text-white text-center text-sm cursor-pointer border rounded'>Quản lý tài khoản</a>
                                            <a onClick={adminDashboard} className='py-1 my-2 px-3  hover:bg-cyan-600 text-white text-center text-sm cursor-pointer border rounded'>Admin Dashboard</a>

                                            <a href='userDetail' className='py-1 my-1 px-3  hover:bg-cyan-600 text-white text-center text-sm cursor-pointer border rounded'>Đổi mật khẩu</a>
                                            <div className='flex justify-center mt-1 flex-col'>
                                                <a style={{ display: isLogout ? "none" : "block" }} onClick={openConfirmLogOut} className='text-sm text-white hover:underline w-fit cursor-pointer mx-auto'>Đăng xuất</a>
                                                <div style={{ display: isLogout ? "block" : "none" }} className='flex mt-2 flex-col border text-white p-2 text-sm'>
                                                    <p>Bạn có muốn đăng xuất?</p>
                                                    <div className='flex justify-around gap-3'>
                                                        <button onClick={logOut} className=' hover:bg-cyan-600 border p-1 w-32 rounded'>Đăng xuất</button>
                                                        <button onClick={closeConfirmLogOut} className=' hover:bg-cyan-600 border p-1 w-32 rounded'>Huỷ</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <i onClick={handleClickIcon} className="fa-regular fa-circle-user fa-lg peer text-white cursor-pointer hover:scale-110 absolute"></i>
                            }

                            <div style={{ display: isOpenIcon ? "flex" : "none" }} className='flex flex-col bg-gray-900 w-[130px] absolute top-[4.4rem] right-1 peer-hover:flex hover:flex'>
                                <a className='py-2 px-3  hover:bg-cyan-600 text-white' href="/sportyFive-FE/registerAccount">Đăng ký</a>
                                <a className='py-2 px-3  hover:bg-cyan-600 text-white' href="/sportyFive-FE/login">Đăng nhập</a>
                            </div>

                        </li>
                    </ul>
                </ul>

            </nav>
            {/* Responsive */}

            <nav className='bg-black lg:hidden w-100 fixed top-0'>
                <div className='max-w-[95%] text-start py-3 flex px-2 mx-auto gap-2'>
                    {
                        isOpenMenu ?

                            <i onClick={openMenu} className="fa-solid fa-xmark fa-2xl my-auto cursor-pointer  hover:scale-110 text-white w-7"></i> :
                            <i onClick={openMenu} className="fa-solid fa-bars fa-2xl my-auto cursor-pointer  hover:scale-110 text-white"></i>
                    }

                    <div className='w-[95%] relative flex mx-auto'>
                        <input className=' form-control max-w-[100%] mx-auto' placeholder='Tìm kiếm sản phẩm, danh mục ...' type="text" />
                        <i className="fas fa-search absolute z-100 right-3 text-black cursor-pointer hover:scale-110 items-center top-3"></i>
                    </div>
                </div>
                <div style={{ display: isOpenMenu ? "block" : "none" }} className='flex-col bg-gray-900 w-[50%] absolute h-[100vh]'>
                    <button className='text-white hover:bg-cyan-600 px-3 h-[50px] w-[100%] text-start text-sm'>Home</button>
                    <div className='flex justify-around items-center relative hover:bg-cyan-600 '>
                        <button className='text-white px-3 h-[50px] z-10 w-[100%] text-start peer text-sm'>Quần áo &nbsp;</button>
                        <i className="fa-solid fa-chevron-right fa-2xs text-white mr-3 absolute right-0"></i>
                        <div className='bg-gray-800 w-[60%] absolute z-12 left-[100%] top-0 peer-hover:block hover:block flex-col hidden '>
                            <button className='text-white px-3 h-[50px]  w-[100%] text-start hover:bg-cyan-600 whitespace-nowrap text-sm'>Đồ tập gym &nbsp;</button>
                            <button className='text-white px-3 h-[50px]  w-[100%] text-start hover:bg-cyan-600 whitespace-nowrap text-sm'>Đồ tập gym &nbsp;</button>
                            <button className='text-white px-3 h-[50px]  w-[100%] text-start hover:bg-cyan-600 whitespace-nowrap text-sm'>Đồ tập gym &nbsp;</button>
                        </div>
                    </div>

                    <div className='flex justify-around items-center relative hover:bg-cyan-600 '>
                        <button className='text-white px-3 h-[50px] z-10 w-[100%] text-start peer text-sm '>Giày dép &nbsp;</button>
                        <i className="fa-solid fa-chevron-right fa-2xs text-white mr-3 absolute right-0"></i>
                        <div className='bg-gray-800 w-[60%] absolute z-12 left-[100%] top-0 peer-hover:block hover:block flex-col hidden'>
                            <button className='text-white px-3 h-[50px]  w-[100%] text-start hover:bg-cyan-600 whitespace-nowrap text-sm'>Đồ tập gym &nbsp;</button>
                            <button className='text-white px-3 h-[50px]  w-[100%] text-start hover:bg-cyan-600 whitespace-nowrap text-sm'>Đồ tập gym &nbsp;</button>
                            <button className='text-white px-3 h-[50px]  w-[100%] text-start hover:bg-cyan-600 whitespace-nowrap text-sm'>Đồ tập gym &nbsp;</button>
                        </div>
                    </div>

                    <div className='flex justify-around items-center relative hover:bg-cyan-600 '>
                        <button className='text-white px-3 h-[50px] z-10 w-[100%] text-start peer text-sm'>Dụng cụ &nbsp;</button>
                        <i className="fa-solid fa-chevron-right fa-2xs text-white mr-3 absolute right-0"></i>
                        <div className='bg-gray-800 w-[60%] absolute z-12 left-[100%] top-0 peer-hover:block hover:block flex-col hidden'>
                            <button className='text-white px-3 h-[50px]  w-[100%] text-start hover:bg-cyan-600 whitespace-nowrap text-sm'>Đồ tập gym &nbsp;</button>
                            <button className='text-white px-3 h-[50px]  w-[100%] text-start hover:bg-cyan-600 whitespace-nowrap text-sm'>Đồ tập gym &nbsp;</button>
                            <button className='text-white px-3 h-[50px]  w-[100%] text-start hover:bg-cyan-600 whitespace-nowrap text-sm'>Đồ tập gym &nbsp;</button>
                        </div>
                    </div>
                    <button className='text-white hover:bg-cyan-600 px-3 h-[50px] w-[100%] text-start text-sm'>Đăng nhập &nbsp;</button>
                    <button className='text-white hover:bg-cyan-600 px-3 h-[50px] w-[100%] text-start text-sm'>Đăng ký &nbsp;</button>
                    <button className='text-white hover:bg-cyan-600 px-3 h-[50px] w-[100%] text-start text-sm'>Giỏ hàng của bạn &nbsp;</button>
                </div>
            </nav>
        </header >
    );
};

export default Header;
