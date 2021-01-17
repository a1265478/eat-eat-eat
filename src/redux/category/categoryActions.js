import { LIST_ALL_CATEGORY_SUCCESS, LIST_CATEGORIES_FAILURE } from './categoryType'
import axios from 'axios';
import { DEFAULT_API_URI } from '../../const'

export const listAllCategoriesSuccess = (categories) => {
    return {
        type: LIST_ALL_CATEGORY_SUCCESS,
        payload: categories
    }
}

export const listCategoriesFailure = (error) => {
    return {
        type: LIST_CATEGORIES_FAILURE,
        payload: error
    }
}

export const listAllCategories = () => {
    return (dispatch) => {
        axios.get(`${DEFAULT_API_URI}categories`)
            .then((response) => {
                const categories = response.data.map(category => (
                    {
                        CategoryID: category._id,
                        CategoryName: category.categoryName
                    }
                ));
                dispatch(listAllCategoriesSuccess(categories))
            })
            .catch((error) => {
                dispatch(listCategoriesFailure(error.message))
            })
    }
}