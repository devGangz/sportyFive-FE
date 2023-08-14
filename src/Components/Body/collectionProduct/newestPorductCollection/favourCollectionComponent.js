
import ProductCardCollectionComponent from "./productCardCollection"

import { SiNike, SiUnderarmour, SiNewbalance, SiPuma } from "react-icons/si"
import { CgAdidas } from "react-icons/cg"


const paramProduct = {
    brand: "Adidas",
    productName: "Giày chạy bộ nữ Nike Air Zoom",
    cost: 2000000,
    costSale: 1500000,
    percentSale: 20,
    quantity: 10
}

const listProduct = [
    {
        brand: "Adidas",
        productName: "Giày chạy bộ nữ Nike Air Zoom",
        cost: 2000000,
        costSale: 1500000,
        percentSale: 20,
        quantity: 10
    },
    {
        brand: "Nike",
        productName: "Giày chạy bộ nữ Nike Air Zoom",
        cost: 2000000,
        costSale: 1500000,
        percentSale: 20,
        quantity: 10
    },
    {
        brand: "Puma",
        productName: "Giày chạy bộ nữ Nike Air Zoom",
        cost: 2000000,
        costSale: 1500000,
        percentSale: 20,
        quantity: 10
    },
    {
        brand: "Hermer",
        productName: "Giày chạy bộ nữ Nike Air Zoom",
        cost: 2000000,
        costSale: 1500000,
        percentSale: 20,
        quantity: 10
    },
    {
        brand: "New Balance",
        productName: "Giày chạy bộ nữ Nike Air Zoom",
        cost: 2000000,
        costSale: 1500000,
        percentSale: 20,
        quantity: 10
    },
    {
        brand: "Under Armour",
        productName: "Giày chạy bộ nữ Nike Air Zoom",
        cost: 2000000,
        costSale: 1500000,
        percentSale: 20,
        quantity: 10
    },
    {
        brand: "Avanx",
        productName: "Giày chạy bộ nữ Nike Air Zoom",
        cost: 2000000,
        costSale: 1500000,
        percentSale: 20,
        quantity: 10
    },
    {
        brand: "Footer",
        productName: "Giày chạy bộ nữ Nike Air Zoom",
        cost: 2000000,
        costSale: 1500000,
        percentSale: 20,
        quantity: 10
    },
    {
        brand: "LongB",
        productName: "Giày chạy bộ nữ Nike Air Zoom",
        cost: 2000000,
        costSale: 1500000,
        percentSale: 20,
        quantity: 10
    },
    {
        brand: "Wang",
        productName: "Giày chạy bộ nữ Nike Air Zoom",
        cost: 2000000,
        costSale: 1500000,
        percentSale: 20,
        quantity: 10
    },
    {
        brand: "Adidas",
        productName: "Giày chạy bộ nữ Nike Air Zoom",
        cost: 2000000,
        costSale: 1500000,
        percentSale: 20,
        quantity: 10
    },
    {
        brand: "Adidas",
        productName: "Giày chạy bộ nữ Nike Air Zoom",
        cost: 2000000,
        costSale: 1500000,
        percentSale: 20,
        quantity: 10
    },
]




const FavourCollectionComponent = () => {
    return (
        <>
            <div className="flex justify-between max-w-[70%]  m-auto w-full rounded-lg">
                <h1 className="text-black  m-auto py-4">#Ưu đãi cuối mùa</h1>
            </div>

            <div className="flex flex-wrap justify-around max-w-[95%]  lg:max-w-[70%] m-auto w-full rounded-lg pb-3 gap-3 lg:flex">
                <button className="bg-blue-950 text-white items-center
                hover:bg-sky-700
                p-2 rounded-md w-48 flex justify-center">
                    <SiNike className="text-2xl" /> &nbsp;
                    <p className="text-white my-auto">NIKE</p>
                </button>

                <button className="bg-blue-950 text-white items-center
                 hover:bg-sky-700
                p-2 rounded-md w-48 flex justify-center">
                    <CgAdidas className="text-2xl" /> &nbsp;
                    <p className="text-white my-auto">ADIDAS</p>
                </button>

                <button className="bg-blue-950 text-white items-center
                 hover:bg-sky-700
                p-2 rounded-md w-48 flex justify-center">
                    <SiUnderarmour className="text-2xl" /> &nbsp;
                    <p className="text-white my-auto whitespace-nowrap">UNDER ARMOUR</p>
                </button>

                <button className="bg-blue-950 text-white items-center
                 hover:bg-sky-700
                p-2 rounded-md w-48 flex justify-center">
                    <SiNewbalance className="text-2xl" /> &nbsp;
                    <p className="text-white my-auto whitespace-nowrap">New Balance</p>
                </button>

                <button className="bg-blue-950 text-white items-center
                 hover:bg-sky-700
                p-2 rounded-md w-48 flex justify-center">
                    <SiPuma className="text-2xl" /> &nbsp;
                    <p className="text-white my-auto">Puma</p>
                </button>
            </div >

            <div className="lg:grid lg:grid-rows-3 lg:grid-cols-4 gap-4 lg:max-w-[75%] py-3 lg:px-0 mx-auto max-w-[90%] 
            grid grid-cols-2">
                {
                    listProduct.map((item, index) => {
                        return <ProductCardCollectionComponent {...item} key={index} />
                    })
                }
            </div>
        </>
    )
}

export default FavourCollectionComponent