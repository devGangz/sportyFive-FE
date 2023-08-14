

const ForgotPasswordComponent = () => {
    return (
        <>
            <div className="w-screen h-screen  items-center flex bg-cyan-100">
                <div className="mx-auto w-[712px] max-w-[95%] items-center top-[50%] left-[50%] p-4 rounded-2xl bg-cyan-400">
                    <h3 className="flex justify-center whitespace-nowrap max-w-[80%] mx-auto font-semibold mb-3">
                        Quên mật khẩu?
                    </h3>
                    <p>
                        Nhập email gắn liền với tài khoản để chúng tôi có thể gửi lại đường link khôi phục cho bạn.
                    </p>
                    <p className="my-auto font-semibold text-gray-600">Email:</p>
                    <input type="email" className="form-control my-2" />


                    <div className="max-w-[100%] items-center">
                        <button className="w-100 rounded mt-2 p-1 bg-blue-800 text-white hover:bg-blue-600">
                            Tiếp tục
                        </button>
                    </div>
                    <div className="mt-2 flex justify-center">
                        <a href="/login">Quay lại trang đăng nhập</a>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ForgotPasswordComponent