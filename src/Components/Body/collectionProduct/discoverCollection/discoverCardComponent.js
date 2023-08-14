import { BiSwim } from 'react-icons/bi'

const paramDiscover = {
    sportName: "Bơi lội",
    sportImageFullScreen: "https://cdn.shopify.com/s/files/1/0456/5070/6581/files/swimming_460x.png?v=1684146947",
    sportImageResponsive: "https://cdn.shopify.com/s/files/1/0456/5070/6581/files/Pr7_1.jpg?v=1612501877",
    altImage: "boi-loi"
}


const DiscoverCard = () => {
    return (
        <>
            <div
                className="flex flex-col bg-black lg:max-w-[100%] m-1 rounded">
                <div className='flex-cols lg:flex min-[1352px]:flex'>
                    {/* <img
                        className="lg:max-w-[30%] max-w-[100%] object-cover lg:rounded-l block"
                        src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                    /> */}

                    <img
                        className="lg:max-w-[30%] max-w-[100%] object-cover rounded-t"
                        src="https://cdn.shopify.com/s/files/1/0456/5070/6581/files/Pr7_1.jpg?v=1612501877"
                    />

                    <div>
                        <h6
                            className="font-medium pl-5 mx-auto lg:pl-5 pt-3  text-sm whitespace-nowrap text-cyan-600">
                            <strong>Ván trượt giá bao nhiêu?</strong>
                        </h6>
                        <div className="flex flex-col justify-start pt-2 pl-5 pr-5">
                            <p className="mb-2 text-white dark:text-neutral-200 text-xs">
                                Ván trượt là bộ môn được giới trẻ đặc biệt yêu thích trong những năm trở lại đây bởi vì niềm vui và sự thách thức mà bộ môn này mang lại.
                                <span><a href="" className='hover:text-cyan-600'> Xem thêm...</a></span>
                            </p>
                            <p className="text-xs text-neutral-400 dark:text-neutral-300">
                                Last updated 3 mins ago
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default DiscoverCard