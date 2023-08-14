import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import spinning from "../../../../../Assets/Spinning/Spinner-1s-200px.svg"
import {
    addNewCollection,
    resetCollectionExist
} from "../../../../Redux/ActionsAdmin"

const BoSuuTapComponent = () => {
    const dispatch = useDispatch()
    const {
        waitingServerCollection,
        createCollectionOK,
        collectionWasExist
    } = useSelector((reduxData) => reduxData.AdminReducer)

    const RefInput = useRef(null)
    const [collectionCreated, setCollectionCreated] = useState(false)
    const [alertEmptyInput, setAlertEmptyInput] = useState(false)
    const [alertCollectionExist, setAlertCollectionExist] = useState(false)

    const onClickThemCollection = () => {
        if (RefInput.current.value.trim() == "") {
            RefInput.current.focus()
            setAlertEmptyInput(true)
            setTimeout(() => {
                setAlertEmptyInput(false)
            }, 2000);
        } else {
            let newCollection = {
                label: RefInput.current.value.trim(),
                value: RefInput.current.value.trim()
            }
            setAlertCollectionExist(false)
            setAlertEmptyInput(false)
            dispatch(addNewCollection(newCollection))
            RefInput.current.value = ""
        }
    }

    useEffect(() => {
        if (collectionWasExist) {
            setAlertCollectionExist(true)
            setTimeout(() => {
                setAlertCollectionExist(false)
                dispatch(resetCollectionExist())
            }, 3000);
        } else { }
    }, [collectionWasExist])

    useEffect(() => {
        if (createCollectionOK) {
            setCollectionCreated(true)
            setTimeout(() => {
                setCollectionCreated(false)
                dispatch(resetCollectionExist())
            }, 3000);
        } else { }
    }, [createCollectionOK])

    const closeMissInput = () => {
        setAlertEmptyInput(false)
    }
    const closeCollectionExistAlert = () => {
        setAlertCollectionExist(false)
    }
    const closeCollectionCreatedAlert = () => {
        setCollectionCreated(false)
    }



    return (
        <>
            <div style={{ display: alertCollectionExist ? "block" : "none" }} className="bg-orange-500 absolute w-[100%] left-0 top-0">
                <p className="my-auto p-2 text-center">Bộ sưu tập này đã tồn tại!</p>
                <div onClick={closeCollectionExistAlert} className="absolute top-1.5 right-3 cursor-pointer">
                    &#10006;
                </div>
            </div>

            <div style={{ display: alertEmptyInput ? "block" : "none" }} className="bg-orange-500 absolute w-[100%] left-0 top-0">
                <p className="my-auto p-2 text-center relative">Bạn chưa nhập bộ sưu tập!</p>
                <div onClick={closeMissInput} className="absolute top-1.5 right-3 cursor-pointer">
                    &#10006;
                </div>
            </div>

            <div style={{ display: collectionCreated ? "block" : "none" }} className="bg-lime-500 absolute w-[100%] left-0 top-0">
                <p className="my-auto p-2 text-center">Bộ sưu tập được tạo thành công!</p>
                <div onClick={closeCollectionCreatedAlert} className="absolute top-1.5 right-3 cursor-pointer">
                    &#10006;
                </div>
            </div>

            <div className="w-[70rem] my-auto rounded mt-3 flex items-center">
                <div className="flex h-10 gap-3 px-1 my-auto relative">
                    <div className="my-auto w-[10rem]">
                        <h6 className="whitespace-nowrap my-auto">Thêm bộ sưu tập:</h6>
                    </div>
                    <div className="w-[20rem] relative">
                        <input ref={RefInput} type="text" className="form-control" />
                    </div>

                    <button onClick={onClickThemCollection} className="px-3 bg-cyan-900 text-white hover:scale-105 duration-150">Thêm</button>
                    <div style={{ display: waitingServerCollection ? "block" : "none" }} className="absolute w-10 right-0">
                        <img src={spinning} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoSuuTapComponent
