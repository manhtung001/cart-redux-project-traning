import * as types from './../constants/ActionType';

export const actAddCart = (product, quantity) => {
    return {
        type : types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actDelCart = (product) => {
    return {
        type : types.DEL_CART,
        product
    }
}

export const changeMessage = (message) => {
    return {
        type : types.CHANGE_MESSAGE,
        message
    }
}

export const updateCart = (product, quantity) => {
    return {
        type : types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}