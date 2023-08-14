import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import spinning from "../../../../../Assets/Spinning/Spinner-1s-200px.svg"
import {
    addNewCategory,
    resetCategoryExist,

} from "../../../../Redux/ActionsAdmin"

const ChungLoaiComponent = () => {
    const dispatch = useDispatch()
    const {
        waitingServerCategory,
        createCategoryOK,
        categoryWasExist,
    } = useSelector((reduxData) => reduxData.AdminReducer)

    const RefInput = useRef(null)
    const [categoryCreated, setCategoryCreated] = useState(false)
    const [alertEmptyInput, setAlertEmptyInput] = useState(false)
    const [alertCategoryExist, setAlertCategoryExist] = useState(false)

    const onClickThemCategory = () => {
        if (RefInput.current.value.trim() == "") {
            RefInput.current.focus()
            setAlertEmptyInput(true)
            setTimeout(() => {
                setAlertEmptyInput(false)
            }, 2000);
        } else {
            let newCategory = {
                label: RefInput.current.value.trim(),
                value: RefInput.current.value.trim()
            }
            setAlertCategoryExist(false)
            setAlertEmptyInput(false)
            dispatch(addNewCategory(newCategory))
            RefInput.current.value = ""
        }
    }

    useEffect(() => {
        if (categoryWasExist) {
            setAlertCategoryExist(true)
            setTimeout(() => {
                setAlertCategoryExist(false)
                dispatch(resetCategoryExist())
            }, 3000);
        } else { }
    }, [categoryWasExist])

    useEffect(() => {
        if (createCategoryOK) {
            setCategoryCreated(true)
            setTimeout(() => {
                setCategoryCreated(false)
                dispatch(resetCategoryExist())
            }, 3000);
        } else { }
    }, [createCategoryOK])

    const closeMissInput = () => {
        setAlertEmptyInput(false)
    }
    const closeCategoryExistAlert = () => {
        setAlertCategoryExist(false)
    }
    const closeCategoryCreatedAlert = () => {
        setCategoryCreated(false)
    }



    return (
        <>
            <div style={{ display: alertCategoryExist ? "block" : "none" }} className="bg-orange-500 absolute w-[100%] left-0 top-0">
                <p className="my-auto p-2 text-center">Chủng loại này đã tồn tại!</p>
                <div onClick={closeCategoryExistAlert} className="absolute top-1.5 right-3 cursor-pointer">
                    &#10006;
                </div>
            </div>

            <div style={{ display: alertEmptyInput ? "block" : "none" }} className="bg-orange-500 absolute w-[100%] left-0 top-0">
                <p className="my-auto p-2 text-center relative">Bạn chưa nhập chủng loại!</p>
                <div onClick={closeMissInput} className="absolute top-1.5 right-3 cursor-pointer">
                    &#10006;
                </div>
            </div>

            <div style={{ display: categoryCreated ? "block" : "none" }} className="bg-lime-500 absolute w-[100%] left-0 top-0">
                <p className="my-auto p-2 text-center">Chủng loại được tạo thành công!</p>
                <div onClick={closeCategoryCreatedAlert} className="absolute top-1.5 right-3 cursor-pointer">
                    &#10006;
                </div>
            </div>

            <div className="w-[70rem] my-auto rounded mt-3 flex items-center">
                <div className="flex h-10 gap-3 px-1 my-auto relative">
                    <div className="my-auto w-[10rem]">
                        <h6 className="whitespace-nowrap my-auto">Thêm chủng loại:</h6>
                    </div>
                    <div className="w-[20rem] relative">
                        <input ref={RefInput} type="text" className="form-control" />
                    </div>

                    <button onClick={onClickThemCategory} className="px-3 bg-cyan-900 text-white hover:scale-105 duration-150">Thêm</button>
                    <div style={{ display: waitingServerCategory ? "block" : "none" }} className="absolute w-10 right-0">
                        <img src={spinning} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChungLoaiComponent
