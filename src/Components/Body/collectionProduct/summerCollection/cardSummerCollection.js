import { BiSwim } from 'react-icons/bi'

// const paramProductSummer = {
//     sportName: "Bơi lội",
//     sportImage: "https://cdn.shopify.com/s/files/1/0456/5070/6581/files/swimming_460x.png?v=1684146947",
//     altImage: "boi-loi"
// }



const CardSummerCollection = (paramProductSummer) => {
    return (
        <>
            <div className="container relative w-full">
                <div className='relative max-w-lx overflow-hidden bg-cover bg-no-repeat'>
                    <div className="overlay absolute bottom-0 gap-2 flex">
                        <div className="px-2 hover:z-[1]">
                            <h6 className="font-['Proxima Nova'] z-[1] relative text-white">{paramProductSummer.sportName}</h6>
                        </div>
                    </div>
                    <img
                        className='max-w-lx transition duration-300 ease-in-out hover:scale-110'
                        src={paramProductSummer.sportImage} alt={paramProductSummer.altImage} />
                </div>
            </div>
        </>
    )
}

export default CardSummerCollection