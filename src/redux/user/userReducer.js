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

const initialState = {
    userID: '',
    accessToken: '',
    tokenID: '',
    orderWay: { type: '', value: '' },
    takeTime: '',
    isAtOrderAgain: false,
    needInvoice: false,
    payway: '',
    phone: '',
    comment: ''
}


export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDER_WAY:
            return {
                ...state,
                orderWay: action.payload.orderWay
            }

        case SET_IS_AT_ORDER_AGAIN:
            return {
                ...state,
                isAtOrderAgain: action.payload.isAtOrderAgain
            }

        case CHANGE_IS_NEED_INVOICE:
            return {
                ...state,
                needInvoice: !state.needInvoice
            }
        case SET_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.payload.accessToken
            }
        case SET_TOKEN_ID:
            return {
                ...state,
                tokenID: action.payload.tokenID
            }
        case SET_USER_ID: {
            return {
                ...state,
                userID: action.payload.userID
            }
        }
        case SET_PAY_WAY: {
            return {
                ...state,
                payway: action.payload.payway
            }
        }
        case SET_TAKE_TIME: {
            return {
                ...state,
                takeTime: action.payload.takeTime
            }
        }
        case SET_PHONE: {
            return {
                ...state,
                phone: action.payload.phone
            }
        }
        default:
            return state;
    }
}