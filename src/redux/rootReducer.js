import { combineReducers } from "redux";
import { foodsReducer } from "./food/foodReducer";
import { categoriesReducer } from "./category/categoryReducer";
import { filterReducer } from "./filter/filterReducer";
import { userReducer } from "./user/userReducer";
import { shoppingCarReducer } from "./shoppingCar/shoppingCarReducer";
const rootReducer = combineReducers({
    foodsStore: foodsReducer,
    categoriesStore: categoriesReducer,
    filterStore: filterReducer,
    userStore: userReducer,
    shoppingCarStore: shoppingCarReducer
})

export default rootReducer