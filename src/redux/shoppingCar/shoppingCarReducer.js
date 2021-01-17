import { ADD_TO_SHOPPING_CAR, ADD_QUANTITY, UPDATE_QUANTITY, UPDATE_TOTAL_PRICE, SET_QUANTITY } from "./shoppingCarType";

const initialState = {
    totalPrice: 0,
    totalCount: 0,
    shopList: []
}

export const shoppingCarItem = (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_SHOPPING_CAR:
            return {
                ...state,
                shopID: action.id,
                item: action.payload.item,
                quantity: action.payload.quantity
            };
        case UPDATE_QUANTITY:
            if (state.shopID !== action.payload.shopID) {
                return state
            }
            return Object.assign({}, state, {
                quantity: state.quantity + action.payload.addQuantity
            })
        case ADD_QUANTITY:
            if (state.item.FoodID !== action.payload.food.FoodID) {
                return state
            }

            return Object.assign({}, state, {
                quantity: state.quantity + action.payload.addQuantity
            })

        default:
            return state;
    }
}

export const shoppingCarReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_SHOPPING_CAR:
            return {
                ...state,
                totalCount: state.totalCount + action.payload.quantity,
                totalPrice: state.totalPrice + action.payload.quantity * action.payload.item.Price,
                shopList: [...state.shopList, shoppingCarItem(undefined, action)]
            }
        case ADD_QUANTITY:
            return {
                ...state,
                shopList: state.shopList.map(item =>
                    shoppingCarItem(item, action)
                )
            }
        case UPDATE_QUANTITY:
            return {
                ...state,
                totalCount: state.totalCount + action.payload.addQuantity,
                shopList: state.shopList.map(item =>
                    shoppingCarItem(item, action)
                )
            }
        case UPDATE_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: state.totalPrice + action.payload.addPrice
            }
        default:
            return state;
    }
}