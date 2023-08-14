import { useEffect, useRef } from "react"


// const paramProduct = {
//     brand: "Adidas",
//     productName: "Giày chạy bộ nữ Nike Air Zoom",
//     cost: 2000000,
//     costSale: 1500000,
//     percentSale: 20,
//     quantity: 10
// }




const ProductCardCollectionComponent = (paramProduct) => {
    const DiscountShowRef = useRef(null)
    useEffect(() => {
        if (paramProduct.percentSale > 0) {
            DiscountShowRef.current.style.display = "block"
        } else {
            DiscountShowRef.current.style.display = "none"
        }
    }, [])

    return (
        <div className="card max-w-[100%] lg:max-w-[100%] bg-base-100 shadow-xl hover:scale-105 duration-300 cursor-pointer lg:gap-4 px-0">
            <figure className="px-0 pt-0 mb-0 relative">
                <img src="https://cdn.shopify.com/s/files/1/0456/5070/6581/t/122/assets/VIET_FRAME1_png?v=1685641294" alt="Shoes" className="absolute top-1 left-1" />
                <img src="https://cdn.shopify.com/s/files/1/0456/5070/6581/products/DA7698-009-1_1080x.jpg?v=1668594352" alt="Shoes" className="rounded" />
                <p ref={DiscountShowRef} className="absolute bottom-[-1rem] right-0 max-w-fit p-1 bg-red-600 text-white text-xs">Discount {paramProduct.percentSale}%</p>
            </figure>

            <div className="card-body items-center text-center  lg:mt-[-2rem]">
                <h6 className="text-black mb-1 max-w-fit px-1 bg-lime-500 text-sm">{paramProduct.brand}</h6>
                <div>
                    <p className="text-black text-start mb-1 text-xs lg:text-sm">{paramProduct.productName}</p>
                </div>

                <div className="flex h-5 lg:h-8 max-w-[60%]">
                    <p>
                        <del className="text-black text-xs lg:text-md">{paramProduct.cost.toLocaleString("vi")}₫</del>
                        &nbsp;  &nbsp;
                    </p>
                    <p className="lg:text-md text-sm pt-0.5 lg:pt-0">
                        <strong className="text-rose-900">{paramProduct.costSale.toLocaleString("vi")}₫</strong>
                    </p>
                </div>
            </div>
        </div >
    )
}

export default ProductCardCollectionComponent