import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import spinning from "../../../../../Assets/Spinning/Spinner-1s-200px.svg"
import {
    addNewColor,
    resetColorExist
} from "../../../../Redux/ActionsAdmin"

const MauSacComponent = () => {
    const dispatch = useDispatch()
    const {
        waitingServerColor,
        createColorOK,
        colorWasExist
    } = useSelector((reduxData) => reduxData.AdminReducer)

    const RefInput = useRef(null)
    const [colorCreated, setColorCreated] = useState(false)
    const [alertEmptyInput, setAlertEmptyInput] = useState(false)
    const [alertColorExist, setAlertColorExist] = useState(false)

    const onClickThemColor = () => {
        if (RefInput.current.value.trim() == "") {
            RefInput.current.focus()
            setAlertEmptyInput(true)
            setTimeout(() => {
                setAlertEmptyInput(false)
            }, 2000);
        } else {
            let newColor = {
                label: RefInput.current.value.trim(),
                value: RefInput.current.value.trim(),
            }
            setAlertColorExist(false)
            setAlertEmptyInput(false)
            dispatch(addNewColor(newColor))
            RefInput.current.value = ""
        }
    }

    useEffect(() => {
        if (colorWasExist) {
            setAlertColorExist(true)
            setTimeout(() => {
                setAlertColorExist(false)
                dispatch(resetColorExist())
            }, 3000);
        } else { }
    }, [colorWasExist])

    useEffect(() => {
        if (createColorOK) {
            setColorCreated(true)
            setTimeout(() => {
                setColorCreated(false)
                dispatch(resetColorExist())
            }, 3000);
        } else { }
    }, [createColorOK])

    const closeMissInput = () => {
        setAlertEmptyInput(false)
    }
    const closeColorExistAlert = () => {
        setAlertColorExist(false)
    }
    const closeColorCreatedAlert = () => {
        setColorCreated(false)
    }



    return (
        <>
            <div style={{ display: alertColorExist ? "block" : "none" }} className="bg-orange-500 absolute w-[100%] left-0 top-0">
                <p className="my-auto p-2 text-center">Màu sắc này đã tồn tại!</p>
                <div onClick={closeColorExistAlert} className="absolute top-1.5 right-3 cursor-pointer">
                    &#10006;
                </div>
            </div>

            <div style={{ display: alertEmptyInput ? "block" : "none" }} className="bg-orange-500 absolute w-[100%] left-0 top-0">
                <p className="my-auto p-2 text-center relative">Bạn chưa nhập màu sắc!</p>
                <div onClick={closeMissInput} className="absolute top-1.5 right-3 cursor-pointer">
                    &#10006;
                </div>
            </div>

            <div style={{ display: colorCreated ? "block" : "none" }} className="bg-lime-500 absolute w-[100%] left-0 top-0">
                <p className="my-auto p-2 text-center">Màu sắc được tạo thành công!</p>
                <div onClick={closeColorCreatedAlert} className="absolute top-1.5 right-3 cursor-pointer">
                    &#10006;
                </div>
            </div>

            <div className="w-[70rem] my-auto rounded mt-3 flex items-center">
                <div className="flex h-10 gap-3 px-1 my-auto relative">
                    <div className="my-auto w-[10rem]">
                        <h6 className="whitespace-nowrap my-auto">Thêm màu sắc:</h6>
                    </div>
                    <div className="w-[20rem] relative">
                        <input ref={RefInput} type="text" className="form-control" />
                    </div>

                    <button onClick={onClickThemColor} className="px-3 bg-cyan-900 text-white hover:scale-105 duration-150">Thêm</button>
                    <div style={{ display: waitingServerColor ? "block" : "none" }} className="absolute w-10 right-0">
                        <img src={spinning} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MauSacComponent
