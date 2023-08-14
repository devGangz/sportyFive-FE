import CardSummerCollection from "./cardSummerCollection"

const collectionList = [
    {
        sportName: "Bơi lội",
        sportImage: "https://cdn.shopify.com/s/files/1/0456/5070/6581/files/swimming_460x.png?v=1684146947",
        altImage: "boi-loi"
    },
    {
        sportName: "Bóng đá",
        sportImage: "https://cdn.shopify.com/s/files/1/0456/5070/6581/files/swimming_460x.png?v=1684146947",
        altImage: "boi-loi"
    },
    {
        sportName: "Bóng chuyền",
        sportImage: "https://cdn.shopify.com/s/files/1/0456/5070/6581/files/swimming_460x.png?v=1684146947",
        altImage: "boi-loi"
    },
    {
        sportName: "Bóng rổ",
        sportImage: "https://cdn.shopify.com/s/files/1/0456/5070/6581/files/swimming_460x.png?v=1684146947",
        altImage: "boi-loi"
    },
    {
        sportName: "Bơi lội",
        sportImage: "https://cdn.shopify.com/s/files/1/0456/5070/6581/files/swimming_460x.png?v=1684146947",
        altImage: "boi-loi"
    },
    {
        sportName: "Bóng đá",
        sportImage: "https://cdn.shopify.com/s/files/1/0456/5070/6581/files/swimming_460x.png?v=1684146947",
        altImage: "boi-loi"
    },
    {
        sportName: "Bóng chuyền",
        sportImage: "https://cdn.shopify.com/s/files/1/0456/5070/6581/files/swimming_460x.png?v=1684146947",
        altImage: "boi-loi"
    },
    {
        sportName: "Bóng rổ",
        sportImage: "https://cdn.shopify.com/s/files/1/0456/5070/6581/files/swimming_460x.png?v=1684146947",
        altImage: "boi-loi"
    },
]

const SummerCollectionComponent = () => {
    return (
        <>
            <div className="flex justify-between max-w-[80%]  m-auto w-full rounded-lg">
                <h1 className="text-black  m-auto py-4">#Bộ sưu tập mùa hè</h1>
            </div>
            <div className="grid lg:grid-rows-2 grid-flow-col gap-3 m-auto max-w-[95%] justify-between mb-3 grid-rows-4">
                {
                    collectionList.map((item, index) => {
                        return <CardSummerCollection {...item} key={index} />
                    })
                }

            </div>
        </>
    )
}

export default SummerCollectionComponent