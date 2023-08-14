

const CardBrandSaleSummer = (pramBrand) => {
    return (
        <>
            <div className=" hover:drop-shadow-xl hover:scale-105 duration-300 bg-white border rounded flex-col lg:max-w-[80%] w-[100%] lg:mx-[50px] lg:my-3">
                <div className="max-w-[90%] my-3 mx-auto">
                    <img src={pramBrand.image} alt="Shoes" />
                </div>

                <div className="card-body">
                    <h3 className="px-3 card-title text-yellow-600 whitespace-nowrap text-lg">{pramBrand.brand}</h3>
                    <p className="px-3 text-sm">{pramBrand.description}</p>
                    <div className=" px-3 card-actions justify-end pb-3">
                        <button className="btn btn-dark btn-sm">Xem ngay!</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardBrandSaleSummer