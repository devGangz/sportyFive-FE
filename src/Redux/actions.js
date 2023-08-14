import {
    TAO_MOI_USER,
    GET_USER_ERROR,
    PENDING_USER,
    GET_USER_SUCCESS,
    GET_ALL_USER,
    USER_WAS_EXIST,
    GET_USER_TOKEN,
    PENDING_LOGIN,
    GET_USER_FROM_TOKEN,
    UPDATE_AVATAR_IS_OK

} from './constants'

export const updateAvatarLink = (linkAvtObject) => {

    return async (dispatch) => {
        try {
            var myHeader = new Headers()
            myHeader.append("Content-Type", "application/json")
            var vNewLinkAvatar = JSON.stringify(linkAvtObject)
            var requestOptionPut = {
                method: "PUT",
                headers: myHeader,
                body: vNewLinkAvatar,
            }
            console.log("objectAVT_JSON", vNewLinkAvatar);
            const avatarLinkPromise = await fetch("http://localhost:8000/updateTheAvatar", requestOptionPut)
            // const newLinkAvatarJson = await avatarLinkPromise.json()
            // console.log("newLinkAvatarJson", newLinkAvatarJson);

            return dispatch({
                type: UPDATE_AVATAR_IS_OK,
            })

        } catch (error) {
            return dispatch({
                error: error
            })
        }
    }
}





export const getUserByAccount = (tokenBackFromClient) => {
    return async (dispatch) => {
        console.log("tokenSendToBE", tokenBackFromClient);
        try {
            var myHeader = new Headers()
            myHeader.append("Content-Type", "application/json")
            var tokenBackFromClientJson = JSON.stringify(tokenBackFromClient)
            var requestOptionGet = {
                method: "POST",
                headers: myHeader,
                redirect: "follow",
                body: tokenBackFromClientJson,
            };

            const userByAccountPromise = await fetch("http://localhost:8000/sendCookie", requestOptionGet)
            const userByAccountIs = await userByAccountPromise.json()
            // console.log("userByAccount", userByAccountIs);
            return dispatch({
                type: GET_USER_FROM_TOKEN,
                user: userByAccountIs
            })

        } catch (error) {
            return dispatch({
                error: error
            })
        }
    }
}



export const sendUserInforGetToken = (inforUser) => {
    return async (dispatch) => {
        try {
            var myHeader = new Headers()
            myHeader.append("Content-Type", "application/json")
            var vUserInforJson = JSON.stringify(inforUser)
            var requestOption = {
                method: "POST",
                headers: myHeader,
                body: vUserInforJson,
                redirect: "follow",
            }

            await dispatch({
                type: PENDING_LOGIN
            })

            const userLoginByEmailPromise = await fetch("http://localhost:8000/login", requestOption)
            const tokenUserIs = await userLoginByEmailPromise.json()
            // console.log("tokenUserIs", tokenUserIs);
            return dispatch({
                type: GET_USER_TOKEN,
                token: tokenUserIs
            })

        } catch (error) {
            return dispatch({
                error: error
            })
        }
    }
}


export const callApiToUpdateUser = (objectUpdate) => {
    return async (dispatch) => {
        try {
            var myHeader = new Headers()
            myHeader.append("Content-Type", "application/json")
            var vUserNeedUpdate = JSON.stringify(objectUpdate)

            var requestOptionPut = {
                method: "PUT",
                headers: myHeader,
                body: vUserNeedUpdate
            }

            const updateUserPromise = await fetch("http://localhost:8000/updateUserById", requestOptionPut)
            // const updatedUser = await updateUserPromise.json()


        } catch (error) {
            return dispatch({
                error: error
            })
        }
    }
}


export const callApiTaoMoiUserFromFirebase = (objectUser) => {
    return async (dispatch) => {
        try {
            var myHeader = new Headers()
            myHeader.append("Content-Type", "application/json")

            var vUserReq = JSON.stringify(objectUser)
            // console.log("userSendToDataBase", vUserReq);

            var requestOption = {
                method: "POST",
                headers: myHeader,
                body: vUserReq,
                redirect: "follow"
            }

            var requestOptionGet = {
                method: "GET",
                redirect: "follow",
            };

            const allUserPromise = await fetch("http://localhost:8000/getAllUser", requestOptionGet)
            const allUserList = await allUserPromise.json()
            let uIdList = []
            allUserList.map((item) => {
                return uIdList.push(item.uId)
            })


            const isExistUid = uIdList.includes(objectUser.uId)


            if (isExistUid == false) {
                const responseUser = await fetch("http://localhost:8000/createNewUser", requestOption)
                const userReceived = await responseUser.json()

                return dispatch({
                    type: TAO_MOI_USER,
                    user: userReceived
                })
            }

        } catch (error) {
            return dispatch({
                type: GET_USER_ERROR,
                error: error
            })

        }
    }
}

export const callApiToCreateNewUserFromRegister = (objectUser) => {
    return async (dispatch) => {
        try {
            var myHeader = new Headers()
            myHeader.append("Content-Type", "application/json")

            var vUserReq = JSON.stringify(objectUser)
            // console.log("userSendToDataBase", vUserReq);

            var requestOption = {
                method: "POST",
                headers: myHeader,
                body: vUserReq,
                redirect: "follow"
            }

            var requestOptionGet = {
                method: "GET",
                redirect: "follow",
            };

            const allUserPromise = await fetch("http://localhost:8000/getAllUser", requestOptionGet)
            const allUserList = await allUserPromise.json()
            let emailList = []
            allUserList.map((item) => {
                return emailList.push(item.email)
            })


            const isExistEmail = emailList.includes(objectUser.email)

            if (isExistEmail == false) {
                const responseUser = await fetch("http://localhost:8000/createNewUser", requestOption)
                const userReceived = await responseUser.json()

                return dispatch({
                    type: TAO_MOI_USER,
                    user: userReceived
                })
            }
            if (isExistEmail == true) {
                return dispatch({
                    type: USER_WAS_EXIST
                })
            }

        } catch (error) {
            return dispatch({
                type: GET_USER_ERROR,
                error: error
            })

        }
    }
}



export const callApiGetUserByUid = (uIdUser) => {
    return async (dispatch) => {
        try {
            var requestOption = {
                method: "GET",
                redirect: "follow",
            };

            // await dispatch({
            //     type: PENDING_USER
            // })

            const responseUserByUid = await fetch("http://localhost:8000/getUserByUid/" + uIdUser, requestOption)
            const userReceivedByUid = await responseUserByUid.json()
            // console.log("action-userReceived:", userReceivedByName);
            if (userReceivedByUid.userIs == []) {
                return dispatch({
                    type: GET_USER_ERROR
                })
            } else return dispatch({

                type: GET_USER_SUCCESS,
                data: userReceivedByUid.userIs[0]
            })

        } catch (error) {
            return dispatch({
                type: GET_USER_ERROR,
                error: error
            })
        }
    }
}

export const callApiGetAllUser = () => {
    return async (dispatch) => {
        try {
            var requestOptionGet = {
                method: "GET",
                redirect: "follow"
            };

            const responseAllUserPromise = await fetch("http://localhost:8000/getAllUser", requestOptionGet)
            const allUserReceived = await responseAllUserPromise.json()
            // console.log("allUser", allUserReceived);
            return dispatch({
                type: GET_ALL_USER,
                data: allUserReceived
            })
        } catch (error) {
            return dispatch({
                type: GET_USER_ERROR,
                error: error
            })
        }
    }
}



