import { ADD_TO_SHOPPING_CAR, UPDATE_QUANTITY, ADD_QUANTITY, UPDATE_TOTAL_PRICE } from "./shoppingCarType";
let nextShopID = 0;
export const addToShoppingCar = (item, quantity) => {
    return {
        type: ADD_TO_SHOPPING_CAR,
        id: nextShopID++,
        payload: { item: item, quantity: quantity }
    }
}

export const addQuantity = (food, addQuantity) => {
    return {
        type: ADD_QUANTITY,
        payload: { food: food, addQuantity: addQuantity }
    }
}

export const updateQuantity = (shopID, addQuantity) => {
    return {
        type: UPDATE_QUANTITY,
        payload: { shopID: shopID, addQuantity: addQuantity }
    }
}

export const updateTotalPrice = (addPrice) => {
    return {
        type: UPDATE_TOTAL_PRICE,
        payload: { addPrice: addPrice }
    }
}