import { useState } from "react";
import "./Footer.css";
import ncscIcon from '../../Assets/LogoSecure/NCSC.png'
import boCongThuongIcon from '../../Assets/LogoSecure/boCongThuong.png'
import dcmaIcon from '../../Assets/LogoSecure/DMCA.png'


const Footer = () => {

     const [veSporty5, setVesporty5] = useState(false)
     const [chinhSach, setChinhSach] = useState(false)
     const [hoTro, setHoTro] = useState(false)

     const openSporty5Menu = () => {
          setVesporty5(!veSporty5)
     }

     const openChinhSach = () => {
          setChinhSach(!chinhSach)
     }

     const openHoTroKhachHang = () => {
          setHoTro(!hoTro)
     }

     return (
          <footer className="mx-auto justify-center bg-black flex-col ">
               <div className="hidden lg:block">
                    <div className="flex w-[85%] mx-auto justify-between pt-3">
                         <div className="">
                              <h5 className="text-cyan-500 whitespace-nowrap">VỀ SPORTY5</h5>
                              <ul className="col-flex whitespace-nowrap pl-3 text-sm">
                                   <li className="py-1"><a href="" className="hover:text-cyan-500">Giới thiệu</a></li>
                                   <li className="py-1"><a href="" className="hover:text-cyan-500">Hệ thống cửa hàng</a></li>
                                   <li className="py-1"><a href="" className="hover:text-cyan-500">Sơ đồ website</a></li>
                                   <li className="py-1"><a href="" className="hover:text-cyan-500">Thông tin liên hệ</a></li>
                              </ul>
                         </div>

                         <div className="">
                              <h5 className="text-cyan-500 whitespace-nowrap">CHÍNH SÁCH</h5>
                              <ul className="col-flex whitespace-nowrap pl-3 text-sm">
                                   <li className="py-1"><a href="" className="hover:text-cyan-500">Chính sách giao hàng</a></li>
                                   <li className="py-1"><a href="" className="hover:text-cyan-500">Chính sách đổi trả hàng</a></li>
                                   <li className="py-1"><a href="" className="hover:text-cyan-500">Chính sách bảo hành</a></li>
                                   <li className="py-1"><a href="" className="hover:text-cyan-500">Chính sách bảo mật</a></li>
                              </ul>
                         </div>

                         <div className="">
                              <h5 className="text-cyan-500 whitespace-nowrap">HỖ TRỢ KHÁCH HÀNG</h5>
                              <ul className="col-flex whitespace-nowrap pl-3 text-sm">
                                   <li className="py-1"><a href="" className="hover:text-cyan-500">Kiểm tra tình trạng đơn hàng</a></li>
                                   <li className="py-1"><a href="" className="hover:text-cyan-500">Hướng dẫn thanh toán</a></li>
                                   <li className="py-1"><a href="" className="hover:text-cyan-500">FAQs & Help</a></li>
                                   <li className="py-1"><a href="" className="hover:text-cyan-500">Hỗ trợ trả góp</a></li>
                              </ul>
                         </div>

                         <div className="flex-col">
                              <h5 className="text-cyan-500 whitespace-nowrap">KẾT NỐI VỚI CHÚNG TÔI</h5>
                              <div className="flex justify-center gap-3 py-4 text-white">
                                   <i className="fab fa-facebook-f fa-2xl hover:scale-110 cursor-pointer"></i>
                                   <i className="fab fa-twitter fa-2xl hover:scale-110 cursor-pointer"></i>
                                   <i className="fab fa-instagram fa-2xl hover:scale-110 cursor-pointer"></i>
                                   <i className="fab fa-linkedin-in fa-2xl hover:scale-110 cursor-pointer"></i>
                              </div>
                              <div className="flex justify-center py-3">
                                   <button className="p-2 hover:scale-110 text-white border text-sm">Gửi ý kiến</button>
                              </div>
                         </div>
                    </div>

                    <hr />
                    <div className="flex w-[85%] mx-auto justify-between py-3 gap-3">
                         <div className="">
                              <p className="text-white whitespace-nowrap text-sm">Chấp nhận thanh toán qua:</p>
                              <div className="flex gap-2">
                                   <img className="w-8" src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png" alt="" />
                                   <img className="w-8" src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-ZaloPay-Square.png" alt="" />
                              </div>
                              <div className="flex gap-2 text-white py-4">
                                   <i className="fa-brands fa-cc-visa fa-2xl"></i>
                                   <i className="fa-brands fa-cc-mastercard fa-2xl"></i>
                                   <i className="fa-brands fa-cc-jcb fa-2xl"></i>
                                   <i className="fa-brands fa-cc-paypal fa-2xl"></i>
                                   <i className="fa-brands fa-cc-apple-pay fa-2xl"></i>
                              </div>
                         </div>

                         <div className="w-[40%]">
                              <p className="text-white text-sm">Đăng ký nhận ưu đãi</p>
                              <div className="flex relative">
                                   <input placeholder="Nhập email của bạn" className="form-control h-10 rounded-0"></input>
                                   <button className=" h-10 px-3 right-0 text-center text-white relative  bg-cyan-600 hover:scale-105 rounded-none">Gửi</button>
                              </div>
                         </div>

                         <div className="flex gap-2 items-center w-[40%] justify-between px-5">
                              <div className="w-40">
                                   <img src={ncscIcon} alt="ncsc-icon" />
                              </div>
                              <div className="w-40">
                                   <img src={boCongThuongIcon} alt="boCongThuong-icon" />
                              </div>
                              <div className="w-40">
                                   <img src={dcmaIcon} alt="dcma-icon" />
                              </div>
                         </div>
                    </div>
                    <hr />
                    <div className="flex justify-center">
                         <p className="text-cyan-600">© Bản quyền thuộc về Sporty5</p>
                    </div>
               </div>
               {/* Responsive */}
               <div className="block lg:hidden">
                    <div className='max-w-[100%] text-start py-3 flex-col px-2 mx-auto gap-2'>
                         <div className="py-1">
                              <button onClick={openSporty5Menu} className="text-white text-center py-2 bg-gray-800 rounded-t-lg w-100 hover:bg-cyan-600 text-sm"
                                   style={{ backgroundColor: veSporty5 ? "#0891B2" : "" }}
                              >VỀ SPORTY5</button>
                              <ul className="col-flex whitespace-nowrap pl-3 text-sm bg-gray-900 rounded-b-lg"
                                   style={{ display: veSporty5 ? "block" : "none" }}>
                                   <li className="py-1"><a href="" className="hover:text-cyan-500">Giới thiệu</a></li>
                                   <li className="py-1"><a href="" className="hover:text-cyan-500">Hệ thống cửa hàng</a></li>
                                   <li className="py-1"><a href="" className="hover:text-cyan-500">Sơ đồ website</a></li>
                                   <li className="py-1"><a href="" className="hover:text-cyan-500">Thông tin liên hệ</a></li>
                              </ul>
                         </div>

                         <div className="py-1">
                              <button onClick={openChinhSach} className="text-white text-center py-2 bg-gray-800  rounded-t-lg w-100 hover:bg-cyan-600 text-sm"
                                   style={{ backgroundColor: chinhSach ? "#0891B2" : "" }}
                              >CHÍNH SÁCH</button>
                              <ul className="col-flex whitespace-nowrap pl-3 text-sm  bg-gray-900 rounded-b-lg"
                                   style={{ display: chinhSach ? "block" : "none" }}>
                                   <li className="py-1"><a href="" className="hover:text-cyan-500">Chính sách giao hàng</a></li>
                                   <li className="py-1"><a href="" className="hover:text-cyan-500">Chính sách đổi trả hàng</a></li>
                                   <li className="py-1"><a href="" className="hover:text-cyan-500">Chính sách bảo hành</a></li>
                                   <li className="py-1"><a href="" className="hover:text-cyan-500">Chính sách bảo mật</a></li>
                              </ul>
                         </div>
                         <div className="py-1">
                              <button onClick={openHoTroKhachHang} className="text-white text-center py-2 bg-gray-800 rounded-t-lg w-100 hover:bg-cyan-600 text-sm"
                                   style={{ backgroundColor: hoTro ? "#0891B2" : "" }}
                              >HỖ TRỢ KHÁCH HÀNG</button>
                              <ul className="col-flex whitespace-nowrap pl-3 text-sm  bg-gray-900  rounded-b-lg"
                                   style={{ display: hoTro ? "block" : "none" }}>
                                   <li className="py-1"><a href="" className="hover:text-cyan-500">Kiểm tra tình trạng đơn hàng</a></li>
                                   <li className="py-1"><a href="" className="hover:text-cyan-500">Hướng dẫn thanh toán</a></li>
                                   <li className="py-1"><a href="" className="hover:text-cyan-500">FAQs & Help</a></li>
                                   <li className="py-1"><a href="" className="hover:text-cyan-500">Hỗ trợ trả góp</a></li>
                              </ul>
                         </div>
                         <div className="py-1">
                              <p className="text-white text-sm">Chấp nhận thanh toán qua:</p>
                              <div className="flex gap-2 mx-auto">
                                   <img className="w-8 h-8" src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png" alt="" />
                                   <img className="w-8 h-8" src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-ZaloPay-Square.png" alt="" />
                                   <div className="flex gap-2 text-white py-3">
                                        <i className="fa-brands fa-cc-visa fa-2xl"></i>
                                        <i className="fa-brands fa-cc-mastercard fa-2xl"></i>
                                        <i className="fa-brands fa-cc-jcb fa-2xl"></i>
                                        <i className="fa-brands fa-cc-paypal fa-2xl"></i>
                                        <i className="fa-brands fa-cc-apple-pay fa-2xl"></i>
                                   </div>
                              </div>
                         </div>
                         <div className="py-2">
                              <p className="text-white text-sm">Đăng ký nhận khuyến mãi</p>
                              <div className="w-[100%]">
                                   <div className="flex relative">
                                        <input placeholder="Nhập email của bạn" className="form-control h-10 rounded-0"></input>
                                        <button className=" h-10 px-3 right-0 text-center text-white relative  bg-cyan-600 hover:scale-105 rounded-none">Gửi</button>
                                   </div>
                              </div>
                         </div>

                         <div className="py-2">
                              <p className="text-white text-sm">Chứng chỉ bảo mật</p>
                              <div className="flex gap-2 items-center w-[100%] justify-between rounded bg-gray-500 p-2">
                                   <div className="w-40">
                                        <img src={ncscIcon} alt="ncsc-icon" />
                                   </div>
                                   <div className="w-40">
                                        <img src={boCongThuongIcon} alt="boCongThuong-icon" />
                                   </div>
                                   <div className="w-40">
                                        <img src={dcmaIcon} alt="dcma-icon" />
                                   </div>
                              </div>
                         </div>
                         <hr />
                         <p className="text-cyan-600 my-0 text-center">© Bản quyền thuộc về Sporty5</p>
                    </div>
               </div>

          </footer >
     )
}

export default Footer