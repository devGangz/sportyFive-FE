
import {
    CLICKED_XEM_TONG_QUAN,
    CLICKED_QUAN_LY_DON_HANG,
    CLICKED_QUAN_LY_KHACH_HANG,
    CLICKED_QUAN_LY_SAN_PHAM,

    CLICKED_QUAN_LY_MEDIA,
    CLICKED_QUAN_LY_VOUCHER,
    CLICKED_QUAN_LY_HOAT_DONG,

    WAITING_SERVER,
    CREATE_NHAN_HANG_SUCCESS,
    BRAND_WAS_EXIST,
    RESET_BRAND_EXIST,

    CREATE_CATEGORY_SUCCESS,
    CATEGORY_WAS_EXIST,
    WAITING_SERVER_CATEGORY,
    RESET_CATEGORY_EXIST,

    WAITING_SERVER_COLLECTION,
    CREATE_COLLECTION_SUCCESS,
    COLLECTION_WAS_EXIST,
    RESET_COLLECTION_EXIST,

    CREATE_COLOR_SUCCESS,
    COLOR_WAS_EXIST,
    RESET_COLOR_EXIST,
    WAITING_SERVER_COLOR,

    CREATE_SIZE_SUCCESS,
    SIZE_WAS_EXIST,
    RESET_SIZE_EXIST,
    WAITING_SERVER_SIZE,

    GET_VARIANTS_SUCCESS,

    ADD_NEW_PRODUCT_SUCCESS,
    PRODUCT_WAS_EXIST,
    RESET_PRODUCT_EXIST,
    WAITING_SERVER_PRODUCT,
    GET_ALL_PRODUCTS,

    PRODUCT_PAGE_CHANGE,

    OPEN_PRODUCT_FORM,
    OPEN_VARIANTS_FORM,
    CLOSE_PRODUCT_FORM,
    CLOSE_VARIANTS_FORM,

    GET_PRODUCT_DETAIL,
    OFF_PRODUCT_DETAIL_UPDATE,

    UPDATE_PRODUCT_SUCCESS,
    RESET_UPDATE_STATE,

    OPEN_CONFIRM_DELETE,
    CLOSE_CONFIRM_DELETE,
    GET_PRODUCT_DETAIL_DELETE,
    DELETE_PRODUCT_SUCCESS,
    RESET_DELETE_STATE
} from './ConstantsAdmin'


const API_THEM_NHAN_HANG = "https://enthusiastic-tan-caridea.cyclic.cloud/addNewBrandProduct"
const API_THEM_CHUNG_LOAI = "https://enthusiastic-tan-caridea.cyclic.cloud/addNewCategoryProduct"
const API_THEM_BO_SUU_TAP = "https://enthusiastic-tan-caridea.cyclic.cloud/addNewCollectionProduct"
const API_THEM_MAU_SAC = "https://enthusiastic-tan-caridea.cyclic.cloud/addNewColorProduct"
const API_THEM_KICH_CO = "https://enthusiastic-tan-caridea.cyclic.cloud/addNewSizeProduct"
const API_CREATE_NEW_PRODUCT = "https://enthusiastic-tan-caridea.cyclic.cloud/createNewProduct"

const API_GET_ALL_NHAN_HANG = "https://enthusiastic-tan-caridea.cyclic.cloud/getAllBrand"
const API_GET_ALL_CHUNG_LOAI = "https://enthusiastic-tan-caridea.cyclic.cloud/getAllCategory"
const API_GET_ALL_BO_SUU_TAP = "https://enthusiastic-tan-caridea.cyclic.cloud/getAllCollection"
const API_GET_ALL_MAU_SAC = "https://enthusiastic-tan-caridea.cyclic.cloud/getAllColor"
const API_GET_ALL_KICH_CO = "https://enthusiastic-tan-caridea.cyclic.cloud/getAllSize"
const API_GET_ALL_PRODUCT = "https://enthusiastic-tan-caridea.cyclic.cloud/getAllProduct"

const API_PRODUCT_DETAIL = "https://enthusiastic-tan-caridea.cyclic.cloud/product"

export const handleTongQuan = () => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: CLICKED_XEM_TONG_QUAN,
            })
        } catch (error) {
            return dispatch({
                error: error
            })
        }
    }
}
export const handleQuanLyDonHang = () => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: CLICKED_QUAN_LY_DON_HANG,
            })
        } catch (error) {
            return dispatch({
                error: error
            })
        }
    }
}
export const handleQuanLyKhachHang = () => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: CLICKED_QUAN_LY_KHACH_HANG,
            })
        } catch (error) {
            return dispatch({
                error: error
            })
        }
    }
}
export const handleQuanLySanPham = () => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: CLICKED_QUAN_LY_SAN_PHAM,
            })
        } catch (error) {
            return dispatch({
                error: error
            })
        }
    }
}
export const handleQuanLyMedia = () => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: CLICKED_QUAN_LY_MEDIA,
            })
        } catch (error) {
            return dispatch({
                error: error
            })
        }
    }
}
export const handleQuanLyVoucher = () => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: CLICKED_QUAN_LY_VOUCHER,
            })
        } catch (error) {
            return dispatch({
                error: error
            })
        }
    }
}
export const handleQuanLyHoatDong = () => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: CLICKED_QUAN_LY_HOAT_DONG,
            })
        } catch (error) {
            return dispatch({
                error: error
            })
        }
    }
}
export const addNewNhanHang = (paramNhanHang) => {
    console.log("objectGot", paramNhanHang);
    return async (dispatch) => {
        try {
            await dispatch({
                type: WAITING_SERVER
            })
            var myHeader = new Headers()
            myHeader.append("Content-Type", "application/json")
            var paramNhanHangJSON = JSON.stringify(paramNhanHang)
            var requestOption = {
                method: "POST",
                headers: myHeader,
                body: paramNhanHangJSON,
                redirect: "follow"
            }

            var requestOptionGet = {
                method: "GET",
                redirect: "follow",
            };
            const allBrandPromise = await fetch(API_GET_ALL_NHAN_HANG, requestOptionGet)
            const allBrandObject = await allBrandPromise.json()
            let allBrandArray = []
            allBrandObject.map((item) => {
                return allBrandArray.push(item.label)
            })

            const isExistBrand = allBrandArray.includes(paramNhanHang.label)

            if (isExistBrand == false) {
                const nhanHangPromise = await fetch(API_THEM_NHAN_HANG, requestOption)

                return dispatch({
                    type: CREATE_NHAN_HANG_SUCCESS
                })
            } else {
                return dispatch({
                    type: BRAND_WAS_EXIST
                })
            }

        } catch (error) {
            return dispatch({
                error: error
            })
        }
    }
}
export const resetBrandExist = () => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: RESET_BRAND_EXIST,
            })
        } catch (error) {
            return dispatch({
                error: error
            })
        }
    }
}
export const addNewCategory = (paramCategory) => {

    return async (dispatch) => {
        try {
            await dispatch({
                type: WAITING_SERVER_CATEGORY
            })
            var myHeader = new Headers()
            myHeader.append("Content-Type", "application/json")
            var paramCategoryJSON = JSON.stringify(paramCategory)
            var requestOption = {
                method: "POST",
                headers: myHeader,
                body: paramCategoryJSON,
                redirect: "follow"
            }
            console.log("objectGot", paramCategory);
            var requestOptionGet = {
                method: "GET",
                redirect: "follow",
            };
            const allCategoyPromise = await fetch(API_GET_ALL_CHUNG_LOAI, requestOptionGet)
            const allCategoryObject = await allCategoyPromise.json()
            let allCategoryArray = []
            allCategoryObject.map((item) => {
                return allCategoryArray.push(item.label)
            })

            const isExistCategory = allCategoryArray.includes(paramCategory.label)
            if (isExistCategory == false) {
                const categoryPromise = await fetch(API_THEM_CHUNG_LOAI, requestOption)

                return dispatch({
                    type: CREATE_CATEGORY_SUCCESS
                })
            } else {
                return dispatch({
                    type: CATEGORY_WAS_EXIST
                })
            }

        } catch (error) {
            return dispatch({
                error: error
            })
        }
    }
}
export const resetCategoryExist = () => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: RESET_CATEGORY_EXIST,
            })
        } catch (error) {
            return dispatch({
                error: error
            })
        }
    }
}
export const addNewCollection = (paramCollection) => {
    return async (dispatch) => {
        try {
            await dispatch({
                type: WAITING_SERVER_COLLECTION
            })
            var myHeader = new Headers()
            myHeader.append("Content-Type", "application/json")
            var paramCollectionJSON = JSON.stringify(paramCollection)
            var requestOption = {
                method: "POST",
                headers: myHeader,
                body: paramCollectionJSON,
                redirect: "follow"
            }

            var requestOptionGet = {
                method: "GET",
                redirect: "follow",
            };
            const allCollectionPromise = await fetch(API_GET_ALL_BO_SUU_TAP, requestOptionGet)
            const allCollectionObject = await allCollectionPromise.json()
            let allCollectionArray = []
            allCollectionObject.map((item) => {
                return allCollectionArray.push(item.label)
            })

            const isExistCollection = allCollectionArray.includes(paramCollection.label)
            if (isExistCollection == false) {
                const collectionPromise = await fetch(API_THEM_BO_SUU_TAP, requestOption)

                return dispatch({
                    type: CREATE_COLLECTION_SUCCESS
                })
            } else {
                return dispatch({
                    type: COLLECTION_WAS_EXIST
                })
            }

        } catch (error) {
            return dispatch({
                error: error
            })
        }
    }
}
export const resetCollectionExist = () => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: RESET_COLLECTION_EXIST,
            })
        } catch (error) {
            return dispatch({
                error: error
            })
        }
    }
}
export const addNewColor = (paramColor) => {
    return async (dispatch) => {
        try {
            await dispatch({
                type: WAITING_SERVER_COLOR
            })
            var myHeader = new Headers()
            myHeader.append("Content-Type", "application/json")
            var paramColorJSON = JSON.stringify(paramColor)
            var requestOption = {
                method: "POST",
                headers: myHeader,
                body: paramColorJSON,
                redirect: "follow"
            }

            var requestOptionGet = {
                method: "GET",
                redirect: "follow",
            };
            const allColorPromise = await fetch(API_GET_ALL_MAU_SAC, requestOptionGet)
            const allColorObject = await allColorPromise.json()
            let allColorArray = []
            allColorObject.map((item) => {
                return allColorArray.push(item.label)
            })

            const isExistColor = allColorArray.includes(paramColor.label)
            if (isExistColor == false) {
                const colorPromise = await fetch(API_THEM_MAU_SAC, requestOption)

                return dispatch({
                    type: CREATE_COLOR_SUCCESS
                })
            } else {
                return dispatch({
                    type: COLOR_WAS_EXIST
                })
            }

        } catch (error) {
            return dispatch({
                error: error
            })
        }
    }
}
export const resetColorExist = () => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: RESET_COLOR_EXIST,
            })
        } catch (error) {
            return dispatch({
                error: error
            })
        }
    }
}
export const addNewSize = (paramSize) => {
    return async (dispatch) => {
        try {
            await dispatch({
                type: WAITING_SERVER_SIZE
            })
            var myHeader = new Headers()
            myHeader.append("Content-Type", "application/json")
            var paramSizeJSON = JSON.stringify(paramSize)
            var requestOption = {
                method: "POST",
                headers: myHeader,
                body: paramSizeJSON,
                redirect: "follow"
            }

            var requestOptionGet = {
                method: "GET",
                redirect: "follow",
            };
            const allSizePromise = await fetch(API_GET_ALL_KICH_CO, requestOptionGet)
            const allSizeObject = await allSizePromise.json()
            let allSizeArray = []
            allSizeObject.map((item) => {
                return allSizeArray.push(item.label)
            })

            const isExistSize = allSizeArray.includes(paramSize.label)
            if (isExistSize == false) {
                const sizePromise = await fetch(API_THEM_KICH_CO, requestOption)

                return dispatch({
                    type: CREATE_SIZE_SUCCESS
                })
            } else {
                return dispatch({
                    type: SIZE_WAS_EXIST
                })
            }

        } catch (error) {
            return dispatch({
                error: error
            })
        }
    }
}
export const resetSizeExist = () => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: RESET_SIZE_EXIST,
            })
        } catch (error) {
            return dispatch({
                error: error
            })
        }
    }
}
export const getVariantProduct = () => {
    return async (dispatch) => {
        try {
            var requestOptionGet = {
                method: "GET",
                redirect: "follow",
            };

            const allBrandPromise = await fetch(API_GET_ALL_NHAN_HANG, requestOptionGet)
            const allBrandObject = await allBrandPromise.json()

            allBrandObject.map((item) => {
                delete item._id
                delete item.image
                return delete item.__v
            })

            const allCategoryPromise = await fetch(API_GET_ALL_CHUNG_LOAI, requestOptionGet)
            const allCategoryObject = await allCategoryPromise.json()
            allCategoryObject.map((item) => {
                delete item._id
                return delete item.__v
            })

            const allCollectionPromise = await fetch(API_GET_ALL_BO_SUU_TAP, requestOptionGet)
            const allCollectionObject = await allCollectionPromise.json()
            allCollectionObject.map((item) => {
                delete item._id
                return delete item.__v
            })

            const allColorPromise = await fetch(API_GET_ALL_MAU_SAC, requestOptionGet)
            const allColorObject = await allColorPromise.json()
            allColorObject.map((item) => {
                delete item._id
                return delete item.__v
            })

            const allSizePromise = await fetch(API_GET_ALL_KICH_CO, requestOptionGet)
            const allSizeObject = await allSizePromise.json()
            allSizeObject.map((item) => {
                delete item._id
                return delete item.__v
            })

            return dispatch({
                type: GET_VARIANTS_SUCCESS,
                allBrand: allBrandObject,
                allCategory: allCategoryObject,
                allCollection: allCollectionObject,
                allColor: allColorObject,
                allSize: allSizeObject
            })

        } catch (error) {
            return dispatch({
                error: error
            })
        }
    }
}
export const addNewProduct = (paramPrd) => {
    return async (dispatch) => {
        try {
            await dispatch({
                type: WAITING_SERVER_PRODUCT
            })
            var myHeader = new Headers()
            myHeader.append("Content-Type", "application/json")
            var paramPrdJSON = JSON.stringify(paramPrd)
            var requestOption = {
                method: "POST",
                headers: myHeader,
                body: paramPrdJSON,
                redirect: "follow"
            }

            var requestOptionGet = {
                method: "GET",
                redirect: "follow",
            };
            const allPrdPromise = await fetch(API_GET_ALL_PRODUCT, requestOptionGet)
            const allPrdObject = await allPrdPromise.json()
            // console.log("allPrd", allPrdObject);
            let allPrdArray = []
            allPrdObject.map((item) => {
                return allPrdArray.push(item.tenSanPham)
            })

            const isExistPrd = allPrdArray.includes(paramPrd.tenSanPham)
            // console.log("isExistPrd", isExistPrd);
            if (isExistPrd == false) {
                const prdPromise = await fetch(API_CREATE_NEW_PRODUCT, requestOption)
                // console.log("prdPromise", prdPromise);
                return dispatch({
                    type: ADD_NEW_PRODUCT_SUCCESS
                })
            } else {
                return dispatch({
                    type: PRODUCT_WAS_EXIST
                })
            }

        } catch (error) {
            return dispatch({
                error: error
            })
        }
    }
}
export const resetProductExist = () => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: RESET_PRODUCT_EXIST,
            })
        } catch (error) {
            return dispatch({
                error: error
            })
        }
    }
}
export const getProductPagination = () => {
    return async (dispatch) => {
        try {

            var requestOptionGet = {
                method: "GET",
                redirect: "follow",
            };
            const allPrdPromise = await fetch(API_GET_ALL_PRODUCT, requestOptionGet)
            const allPrdObject = await allPrdPromise.json()
            // console.log("allPrd", allPrdObject);


            return dispatch({
                type: GET_ALL_PRODUCTS,
                data: allPrdObject
            })

        } catch (error) {
            return dispatch({
                error: error
            })
        }
    }
}
export const pageChangePagination = (page) => {
    return {
        type: PRODUCT_PAGE_CHANGE,
        page: page
    }
}
export const openAddNewProductForm = () => {
    return {
        type: OPEN_PRODUCT_FORM
    }
}
export const openAddNewVariantsForm = () => {
    return {
        type: OPEN_VARIANTS_FORM
    }
}
export const closeAddNewProductForm = () => {
    return {
        type: CLOSE_PRODUCT_FORM
    }
}
export const closeAddNewVariantsForm = () => {
    return {
        type: CLOSE_VARIANTS_FORM
    }
}

export const getProductDetail = (param) => {
    return {
        type: GET_PRODUCT_DETAIL,
        data: param
    }
}

export const offProductDetail = () => {
    return {
        type: OFF_PRODUCT_DETAIL_UPDATE
    }
}

export const handleUpdateProduct = (objectUpdate) => {
    return async (dispatch) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var objectRequest = JSON.stringify(objectUpdate)

            var requestOptions = {
                method: 'PUT',
                headers: myHeaders,
                body: objectRequest,
                redirect: 'follow'
            };

            const productUpdatePromise = await fetch(API_PRODUCT_DETAIL, requestOptions)
            return dispatch({
                type: UPDATE_PRODUCT_SUCCESS
            })

        } catch (error) {
            return dispatch({
                error: error
            })
        }
    }
}

export const resetUpdateState = () => {
    return {
        type: RESET_UPDATE_STATE
    }
}

export const openConfirmDelete = () => {
    return {
        type: OPEN_CONFIRM_DELETE
    }
}

export const closeConfirmDelete = () => {
    return {
        type: CLOSE_CONFIRM_DELETE
    }
}

export const getProductDetailDelete = (param) => {
    return {
        type: GET_PRODUCT_DETAIL_DELETE,
        data: param
    }
}




export const handleDeleteProduct = (objectDelete) => {
    return async (dispatch) => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var objectRequest = JSON.stringify(objectDelete)

            var requestOptions = {
                method: 'DELETE',
                headers: myHeaders,
                body: objectRequest,
                redirect: 'follow'
            };

            const productUpdatePromise = await fetch(API_PRODUCT_DETAIL, requestOptions)
            return dispatch({
                type: DELETE_PRODUCT_SUCCESS
            })

        } catch (error) {
            return dispatch({
                error: error
            })
        }
    }
}

export const resetDeleteProductState = () => {
    return {
        type: RESET_DELETE_STATE
    }
}