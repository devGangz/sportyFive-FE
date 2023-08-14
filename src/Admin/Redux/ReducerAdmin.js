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
    RESET_CATEGORY_EXIST,
    WAITING_SERVER_CATEGORY,

    CREATE_COLLECTION_SUCCESS,
    COLLECTION_WAS_EXIST,
    RESET_COLLECTION_EXIST,
    WAITING_SERVER_COLLECTION,

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


const initState = {

    clickedXemTongQuan: null,
    clickedQuanLyDonHang: null,
    clickedQuanLyKhachHang: null,
    clickedQuanLySanPham: null,
    clickedQuanLyHoatDong: null,
    clickedQuanLyMedia: null,
    clickedQuanLyVoucher: null,

    waitingServer: false,
    createBrandOK: false,
    brandWasExist: false,

    waitingServerCategory: false,
    createCategoryOK: false,
    categoryWasExist: false,

    waitingServerCollection: false,
    createCollectionOK: false,
    collectionWasExist: false,

    waitingServerColor: false,
    createColorOK: false,
    colorWasExist: false,

    waitingServerSize: false,
    createSizeOK: false,
    sizeWasExist: false,

    allBrand: [],
    allCategory: [],
    allCollection: [],
    allColor: [],
    allSize: [],

    productLoading: false,
    productCreated: false,
    productExisted: false,

    allProduct: [],
    limit: 6,
    numberProductPerPage: 0,
    currentPage: 1,
    noPage: 0,

    openThemSpComponent: null,
    openThemThuocTinh: null,

    productDetail: undefined,
    openDetailPrdForm: false,

    productUpdated: false,
    confirmDelete: false,

    getProductDelete: undefined,
    productDeleted: false
}

const AdminReducer = (state = initState, action) => {

    switch (action.type) {

        case RESET_DELETE_STATE:
            state.productDeleted = false
            break

        case DELETE_PRODUCT_SUCCESS:
            state.productDeleted = true
            break

        case GET_PRODUCT_DETAIL_DELETE:
            state.getProductDelete = action.data
            break

        case CLOSE_CONFIRM_DELETE:
            state.confirmDelete = false
            break
        case OPEN_CONFIRM_DELETE:
            state.confirmDelete = true
            break

        case RESET_UPDATE_STATE:
            state.productUpdated = false
            break
        case UPDATE_PRODUCT_SUCCESS:
            state.productUpdated = true
            break

        case OFF_PRODUCT_DETAIL_UPDATE:
            state.openDetailPrdForm = false
            break

        case GET_PRODUCT_DETAIL:
            state.productDetail = action.data
            state.openDetailPrdForm = true
            break
        //---------//
        case CLOSE_VARIANTS_FORM:
            state.openThemThuocTinh = false
            state.openThemSpComponent = false
            break

        case CLOSE_PRODUCT_FORM:
            state.openThemSpComponent = false
            state.openThemThuocTinh = false
            state.productLoading = false
            break
        case OPEN_PRODUCT_FORM:
            state.openThemSpComponent = true;
            state.openThemThuocTinh = false;
            state.productLoading = false;
            break
        case OPEN_VARIANTS_FORM:
            state.openThemSpComponent = false;
            state.openThemThuocTinh = true;
            break
        //---------//
        case PRODUCT_PAGE_CHANGE:
            state.currentPage = action.page
            break
        case GET_ALL_PRODUCTS:
            state.allProduct = action.data.reverse()
            state.noPage = Math.ceil(state.allProduct.length / state.limit)
            break
        //---------//
        case RESET_PRODUCT_EXIST:
            state.productCreated = false
            state.productExisted = false
            break
        case WAITING_SERVER_PRODUCT:
            state.productLoading = true
            break
        case ADD_NEW_PRODUCT_SUCCESS:
            state.productCreated = true;
            state.productLoading = false
            break
        case PRODUCT_WAS_EXIST:
            state.productExisted = true;
            state.productLoading = false
            break
        //---------//
        case GET_VARIANTS_SUCCESS:
            state.allBrand = action.allBrand;
            state.allCategory = action.allCategory;
            state.allCollection = action.allCollection;
            state.allColor = action.allColor;
            state.allSize = action.allSize;
            break
        //---------//
        case SIZE_WAS_EXIST:
            state.sizeWasExist = true
            state.waitingServerSize = false
            break

        case CREATE_SIZE_SUCCESS:
            state.waitingServerSize = false
            state.createSizeOK = true
            break

        case WAITING_SERVER_SIZE:
            state.waitingServerSize = true
            break

        case RESET_SIZE_EXIST:
            state.sizeWasExist = false
            state.createSizeOK = false
            break

        //---------//
        case COLOR_WAS_EXIST:
            state.colorWasExist = true
            state.waitingServerColor = false
            break

        case CREATE_COLOR_SUCCESS:
            state.waitingServerColor = false
            state.createColorOK = true
            break

        case WAITING_SERVER_COLOR:
            state.waitingServerColor = true
            break

        case RESET_COLOR_EXIST:
            state.colorWasExist = false
            state.createColorOK = false
            break
        //---------//
        case COLLECTION_WAS_EXIST:
            state.collectionWasExist = true
            state.waitingServerCollection = false
            break

        case CREATE_COLLECTION_SUCCESS:
            state.waitingServerCollection = false
            state.createCollectionOK = true
            break

        case WAITING_SERVER_COLLECTION:
            state.waitingServerCollection = true
            break

        case RESET_COLLECTION_EXIST:
            state.collectionWasExist = false
            state.createCollectionOK = false
            break
        //---------//
        case CATEGORY_WAS_EXIST:
            state.categoryWasExist = true
            state.waitingServerCategory = false
            break

        case CREATE_CATEGORY_SUCCESS:
            state.waitingServerCategory = false
            state.createCategoryOK = true
            break

        case WAITING_SERVER_CATEGORY:
            state.waitingServerCategory = true
            break

        case RESET_CATEGORY_EXIST:
            state.categoryWasExist = false
            state.createCategoryOK = false
            break
        //---------//
        case RESET_BRAND_EXIST:
            state.brandWasExist = false
            break
        case BRAND_WAS_EXIST:
            state.brandWasExist = true
            state.waitingServer = false
            break

        case WAITING_SERVER:
            state.waitingServer = true
            state.createBrandOK = false
            break

        case CREATE_NHAN_HANG_SUCCESS:
            state.waitingServer = false
            state.createBrandOK = true
            break
        //---------//
        case CLICKED_XEM_TONG_QUAN:
            state.clickedXemTongQuan = true;
            state.clickedQuanLyDonHang = false;
            state.clickedQuanLyKhachHang = false;
            state.clickedQuanLySanPham = false;
            state.clickedQuanLyHoatDong = false;
            state.clickedQuanLyMedia = false;
            state.clickedQuanLyVoucher = false;
            break

        case CLICKED_QUAN_LY_DON_HANG:
            state.clickedXemTongQuan = false;
            state.clickedQuanLyDonHang = true;
            state.clickedQuanLyKhachHang = false;
            state.clickedQuanLySanPham = false;
            state.clickedQuanLyHoatDong = false;
            state.clickedQuanLyMedia = false;
            state.clickedQuanLyVoucher = false;

            break

        case CLICKED_QUAN_LY_KHACH_HANG:
            state.clickedXemTongQuan = false;
            state.clickedQuanLyDonHang = false;
            state.clickedQuanLyKhachHang = true;
            state.clickedQuanLySanPham = false;
            state.clickedQuanLyHoatDong = false;
            state.clickedQuanLyMedia = false;
            state.clickedQuanLyVoucher = false;
            break

        case CLICKED_QUAN_LY_SAN_PHAM:
            state.clickedXemTongQuan = false;
            state.clickedQuanLyDonHang = false;
            state.clickedQuanLyKhachHang = false;
            state.clickedQuanLySanPham = true;
            state.clickedQuanLyHoatDong = false;
            state.clickedQuanLyMedia = false;
            state.clickedQuanLyVoucher = false;
            break

        case CLICKED_QUAN_LY_HOAT_DONG:
            state.clickedXemTongQuan = false;
            state.clickedQuanLyDonHang = false;
            state.clickedQuanLyKhachHang = false;
            state.clickedQuanLySanPham = false;
            state.clickedQuanLyHoatDong = true;
            state.clickedQuanLyMedia = false;
            state.clickedQuanLyVoucher = false;
            break

        case CLICKED_QUAN_LY_MEDIA:
            state.clickedXemTongQuan = false;
            state.clickedQuanLyDonHang = false;
            state.clickedQuanLyKhachHang = false;
            state.clickedQuanLySanPham = false;
            state.clickedQuanLyHoatDong = false;
            state.clickedQuanLyMedia = true;
            state.clickedQuanLyVoucher = false;
            break

        case CLICKED_QUAN_LY_VOUCHER:
            state.clickedXemTongQuan = false;
            state.clickedQuanLyDonHang = false;
            state.clickedQuanLyKhachHang = false;
            state.clickedQuanLySanPham = false;
            state.clickedQuanLyHoatDong = false;
            state.clickedQuanLyMedia = false;
            state.clickedQuanLyVoucher = true;
            break
        default: break
    }
    return { ...state }
}

export default AdminReducer