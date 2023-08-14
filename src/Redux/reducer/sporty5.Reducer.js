import {
    TAO_MOI_USER,
    GET_USER_ERROR,
    GET_USER_SUCCESS,
    GET_ALL_USER,
    USER_WAS_EXIST,
    GET_USER_TOKEN,
    PENDING_LOGIN,
    GET_USER_FROM_TOKEN,
    UPDATE_AVATAR_IS_OK,

} from '../constants'

const initState = {
    newUserIs: {},
    isErrorCreateUser: false,
    userFound: {},
    allUser: [],
    newUserWasCreated: false,
    emailUserExisted: false,
    tokenUser: "",
    pendingLogin: false,
    userFromToken: {},
    updateAvatarOK: false
}

const SportyFiveReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_AVATAR_IS_OK:
            state.updateAvatarOK = true
            break;
        case TAO_MOI_USER:
            state.newUserIs = action.user
            state.newUserWasCreated = true
            break;

        case GET_USER_ERROR:
            state.isErrorCreateUser = false
            break;
        case GET_USER_SUCCESS:
            state.userFound = action.data
            break;
        case GET_ALL_USER:
            state.allUser = action.data
            break;
        case USER_WAS_EXIST:
            state.emailUserExisted = true
            break;
        case GET_USER_TOKEN:
            state.tokenUser = action.token
            state.pendingLogin = false
            break;
        case PENDING_LOGIN:
            state.pendingLogin = true
            break
        case GET_USER_FROM_TOKEN:
            state.userFromToken = action.user
            break
        default: break;
    }
    return { ...state }
}

export default SportyFiveReducer
