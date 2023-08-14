import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import spinning from "../../../../../Assets/Spinning/Spinner-1s-200px.svg"
import {
    addNewSize,
    resetSizeExist
} from "../../../../Redux/ActionsAdmin"

const KichCoComponent = () => {
    const dispatch = useDispatch()
    const {
        waitingServerSize,
        createSizeOK,
        sizeWasExist
    } = useSelector((reduxData) => reduxData.AdminReducer)

    const RefInput = useRef(null)
    const [sizeCreated, setSizeCreated] = useState(false)
    const [alertEmptyInput, setAlertEmptyInput] = useState(false)
    const [alertSizeExist, setAlertSizeExist] = useState(false)

    const onClickThemSize = () => {
        if (RefInput.current.value.trim() == "") {
            RefInput.current.focus()
            setAlertEmptyInput(true)
            setTimeout(() => {
                setAlertEmptyInput(false)
            }, 2000);
        } else {
            let newSize = {
                label: RefInput.current.value.trim(),
                value: RefInput.current.value.trim(),
            }
            setAlertSizeExist(false)
            setAlertEmptyInput(false)
            dispatch(addNewSize(newSize))
            RefInput.current.value = ""
        }
    }

    useEffect(() => {
        if (sizeWasExist) {
            setAlertSizeExist(true)
            setTimeout(() => {
                setAlertSizeExist(false)
                dispatch(resetSizeExist())
            }, 3000);
        } else { }
    }, [sizeWasExist])

    useEffect(() => {
        if (createSizeOK) {
            setSizeCreated(true)
            setTimeout(() => {
                setSizeCreated(false)
                dispatch(resetSizeExist())
            }, 3000);
        } else { }
    }, [createSizeOK])

    const closeMissInput = () => {
        setAlertEmptyInput(false)
    }
    const closeSizeExistAlert = () => {
        setAlertSizeExist(false)
    }
    const closeSizeCreatedAlert = () => {
        setSizeCreated(false)
    }



    return (
        <>
            <div style={{ display: alertSizeExist ? "block" : "none" }} className="bg-orange-500 absolute w-[100%] left-0 top-0">
                <p className="my-auto p-2 text-center">Kích cỡ này đã tồn tại!</p>
                <div onClick={closeSizeExistAlert} className="absolute top-1.5 right-3 cursor-pointer">
                    &#10006;
                </div>
            </div>

            <div style={{ display: alertEmptyInput ? "block" : "none" }} className="bg-orange-500 absolute w-[100%] left-0 top-0">
                <p className="my-auto p-2 text-center relative">Bạn chưa nhập kích cỡ!</p>
                <div onClick={closeMissInput} className="absolute top-1.5 right-3 cursor-pointer">
                    &#10006;
                </div>
            </div>

            <div style={{ display: sizeCreated ? "block" : "none" }} className="bg-lime-500 absolute w-[100%] left-0 top-0">
                <p className="my-auto p-2 text-center">Kích cỡ được tạo thành công!</p>
                <div onClick={closeSizeCreatedAlert} className="absolute top-1.5 right-3 cursor-pointer">
                    &#10006;
                </div>
            </div>

            <div className="w-[70rem] my-auto rounded mt-3 flex items-center">
                <div className="flex h-10 gap-3 px-1 my-auto relative">
                    <div className="my-auto w-[10rem]">
                        <h6 className="whitespace-nowrap my-auto">Thêm kích cỡ:</h6>
                    </div>
                    <div className="w-[20rem] relative">
                        <input ref={RefInput} type="text" className="form-control" />
                    </div>

                    <button onClick={onClickThemSize} className="px-3 bg-cyan-900 text-white hover:scale-105 duration-150">Thêm</button>
                    <div style={{ display: waitingServerSize ? "block" : "none" }} className="absolute w-10 right-0">
                        <img src={spinning} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default KichCoComponent
