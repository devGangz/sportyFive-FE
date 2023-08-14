

const WarrantyIconComponent = () => {
    return (
        <>
            <div className="justify-between w-full border rounded-lg bg-white pointer-events-none max-w-[90%] mx-auto hidden lg:flex gap-3">
                <div className="flex-col">
                    <div className="m-3">
                        <div className="flex justify-center">
                            <i className="fa-solid fa-arrow-right-arrow-left fa-xl text-indigo-900 mt-3"></i>
                        </div>
                        <div className="mt-4">
                            <h6 className="text-indigo-900 mx-auto whitespace-nowrap text-md">Đổi mẫu, đổi size miễn phí</h6>
                        </div>
                    </div>
                </div>

                <div className="flex-col">
                    <div className="m-3">
                        <div className="flex justify-center">
                            <i className="fa-solid fa-money-bill-transfer fa-xl text-indigo-900 mt-3"></i>
                        </div>
                        <div className="mt-4">
                            <h6 className="text-indigo-900 mx-auto whitespace-nowrap text-md">Mua trước, trả sau miễn lãi</h6>
                        </div>
                    </div>
                </div>

                <div className="flex-col">
                    <div className="m-3">
                        <div className="flex justify-center">
                            <i className="fa-solid fa-truck-fast fa-xl text-indigo-900 mt-3"></i>
                        </div>
                        <div className="mt-4">
                            <h6 className="text-indigo-900 mx-auto whitespace-nowrap text-md">Giao hàng, đổi trả tận nhà</h6>
                        </div>
                    </div>
                </div>

                <div className="flex-col">
                    <div className="m-3">
                        <div className="flex justify-center">
                            <i className="fa-solid fa-hand-holding-dollar fa-xl text-indigo-900 mt-3"></i>
                        </div>
                        <div className="mt-4">
                            <h6 className="text-indigo-900 mx-auto whitespace-nowrap text-md">Hàng giả, đền tiền gấp đôi</h6>
                        </div>
                    </div>
                </div>
            </div>

            {/* Responsive */}
            <div className="flex-col lg:hidden border mx-auto rounded px-3 max-w-[98%] bg-slate-200 p-2">
                <div className="flex gap-3 justify-center p-2">
                    <div className="flex justify-center items-center gap-3">
                        <i className="fa-solid fa-arrow-right-arrow-left fa-sm text-indigo-900"></i>
                        <h6 className="text-indigo-900 mx-auto whitespace-nowrap text-sm my-auto">Đổi mẫu, đổi size miễn phí</h6>
                    </div>

                    <div className="flex justify-center items-center gap-3">
                        <i className="fa-solid fa-money-bill-transfer fa-sm text-indigo-900"></i>
                        <h6 className="text-indigo-900 mx-auto whitespace-nowrap text-sm my-auto">Mua trước, trả sau miễn lãi</h6>
                    </div>
                </div>

                <div className="flex  gap-3 justify-center p-2">
                    <div className="flex justify-center items-center gap-3">
                        <i className="fa-solid fa-truck-fast fa-sm text-indigo-900"></i>
                        <h6 className="text-indigo-900 mx-auto whitespace-nowrap text-sm my-auto text-left">Giao hàng, đổi trả tận nhà</h6>
                    </div>

                    <div className="flex justify-center items-center gap-3">
                        <i className="fa-solid fa-hand-holding-dollar fa-sm text-indigo-900"></i>
                        <h6 className="text-indigo-900 mx-auto whitespace-nowrap text-sm my-auto">Hàng giả, đền tiền gấp đôi</h6>
                    </div>
                </div>


            </div>
        </>
    )
}

export default WarrantyIconComponent