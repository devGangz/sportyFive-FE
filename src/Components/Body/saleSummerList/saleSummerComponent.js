import CardBrandSaleSummer from "./cardProductSaleSummer/cardBrandSaleSumner"
import saleSummer from '../../../Assets/BannerSaleSummer/saleSummer.jpg'
import saleSummerFull from '../../../Assets/BannerSaleSummer/saleSummerFull.png'





const ListBrand = [
    {
        brand: "Nike Air Jordan",
        image: "https://sneakerdaily.vn/wp-content/uploads/2023/07/mua-jordan.jpg.webp",
        description: "Giày Jordan 1 chính hãng giá bao nhiêu"
    },
    {
        brand: "Nike Air Force",
        image: "https://sneakerdaily.vn/wp-content/uploads/2023/07/mua-air-force-1.jpg.webp",
        description: "Giày Jordan 1 chính hãng giá bao nhiêu"
    },
    {
        brand: "Nike Air Dunk",
        image: "https://sneakerdaily.vn/wp-content/uploads/2023/07/mua-nike-dunk.jpg.webp",
        description: "Giày Jordan 1 chính hãng giá bao nhiêu"
    },
    {
        brand: "Adidas T-shirt",
        image: "https://sneakerdaily.vn/wp-content/uploads/2023/07/mua-jordan.jpg.webp",
        description: "Giày Jordan 1 chính hãng giá bao nhiêu"
    },
    {
        brand: "Adidas MLB",
        image: "https://sneakerdaily.vn/wp-content/uploads/2023/07/mua-jordan.jpg.webp",
        description: "Giày Jordan 1 chính hãng giá bao nhiêu"
    },
    {
        brand: "Adidas FORUM",
        image: "https://sneakerdaily.vn/wp-content/uploads/2023/07/mua-jordan.jpg.webp",
        description: "Giày Jordan 1 chính hãng giá bao nhiêu"
    },
]



const SaleSummerComponent = () => {
    return (
        <>
            <div className=" justify-center lg:max-w-[100%] max-w-[100%] mx-auto h-[fit] my-3 text-center 
            relative"style={{ backgroundImage: `url(${saleSummerFull})` }}
            >
                <div className="hidden lg:block max-w-[80%] mx-auto">
                    <div className="grid grid-cols-3 gap-2 pt-2 pb-2">
                        {
                            ListBrand.map((item, index) => {
                                return <CardBrandSaleSummer {...item} key={index} />
                            })
                        }
                    </div>
                </div>

                <div className="block lg:hidden mx-auto max-w-[90%] pt-3 pb-3">
                    <div className="grid grid-cols-2 gap-4 pt-2 pb-2">
                        {
                            ListBrand.map((item, index) => {
                                return <CardBrandSaleSummer {...item} key={index} />
                            })
                        }
                    </div>
                </div>
            </div >
        </>
    )
}

export default SaleSummerComponent