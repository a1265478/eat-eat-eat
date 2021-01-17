import axios from "axios";
import {
    SET_ORDER_WAY,
    SET_IS_AT_ORDER_AGAIN,
    CHANGE_IS_NEED_INVOICE,
    SET_ACCESS_TOKEN,
    SET_TOKEN_ID,
    SET_USER_ID,
    SET_PAY_WAY,
    SET_TAKE_TIME,
    SET_PHONE
} from "./userType";
import '../../const'
import { CLIENT_ID } from "../../const";

export const setOrderWay = (orderWay) => {
    return {
        type: SET_ORDER_WAY,
        payload: {
            orderWay: orderWay
        }
    }
}

export const setIsAtOrderAgain = (isAtOrderAgain) => {
    return {
        type: SET_IS_AT_ORDER_AGAIN,
        payload: {
            isAtOrderAgain: isAtOrderAgain
        }
    }
}

export const changeIsNeedInvoice = () => {
    return {
        type: CHANGE_IS_NEED_INVOICE,
    }
}

export const setAccessToken = (accessToken) => {
    return {
        type: SET_ACCESS_TOKEN,
        payload: { accessToken: accessToken }
    }
}

export const setTokenID = (tokenID) => {
    return {
        type: SET_TOKEN_ID,
        payload: { tokenID: tokenID }
    }
}

export const setUserID = (userID) => {
    return {
        type: SET_USER_ID,
        payload: { userID: userID }
    }
}

export const setPayway = (payway) => {
    return {
        type: SET_PAY_WAY,
        payload: { payway: payway }
    }
}

export const setTakeTime = (time) => {
    return {
        type: SET_TAKE_TIME,
        payload: { takeTime: time }
    }
}

export const setPhone = (phone) => {
    return {
        type: SET_PHONE,
        payload: { phone: phone }
    }
}

export const getUserIDByToken = (token) => {
    return (dispatch) => {
        const params = new URLSearchParams()
        params.append('client_id', CLIENT_ID)
        params.append('id_token', token)
        console.log(CLIENT_ID)
        console.log(token)
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        axios.post(`https://api.line.me/oauth2/v2.1/verify`, params, config)
            .then((result) => {
                dispatch(setUserID(result.data.name))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}