import { useEffect } from 'react'
import {
    closeConfirmDelete,
    handleDeleteProduct,
    getProductPagination,
    resetDeleteProductState
} from '../../../Redux/ActionsAdmin'
import { useDispatch, useSelector } from "react-redux"



const XoaSanPham = () => {
    const dispatch = useDispatch()
    const { getProductDelete, productDeleted } = useSelector((reduxData) => reduxData.AdminReducer)


    const onClickDelete = () => {
        dispatch(handleDeleteProduct(getProductDelete))
    }

    const onClickX = () => {
        dispatch(closeConfirmDelete())
    }

    useEffect(() => {
        console.log(productDeleted);
        if (productDeleted) {
            dispatch(closeConfirmDelete())
            dispatch(resetDeleteProductState())
        } else { }
        dispatch(getProductPagination())
    }, [productDeleted])




    return (
        <div className="w-[25rem] h-[8rem] bg-slate-300 items-center z-50 rounded border absolute top-[40%]">
            <h5 className='text-center pt-4 relative'>Bạn muốn xoá sản phẩm này?</h5>
            <div className="flex justify-center gap-3 mt-3">
                <button onClick={onClickDelete} className="border-2 px-5 font-medium hover:bg-red-400">Xoá!</button>
                <button onClick={onClickX} className="border-2 px-5 font-medium hover:bg-red-400">Huỷ bỏ</button>
            </div>
        </div>
    )
}
export default XoaSanPham

