import * as types from './../constants/ActionType'

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    var index = -1;
    var {product, quantity} = action;
    switch(action.type){
        
        case types.ADD_TO_CART :
            index = -1;
            index = findIndexOfProductInCart(state, product);
            if (index === -1){
                state.push({
                    product,
                    quantity
                });
            } else {
                state[index].quantity += quantity;
            } 
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state]

        case types.DEL_CART : 
            index = -1;
            index = findIndexOfProductInCart(state, product);
            if (index !== -1){
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state)); 
            return [...state]

        case types.UPDATE_PRODUCT_IN_CART :
            index = -1;
            index = findIndexOfProductInCart(state, product);
            if (index !== -1){
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state)); 
            return [...state]

        default : return [...state];
    }
}

var findIndexOfProductInCart = (cart, product) =>{
    var index = -1;
    if(cart.length > 0) {
        for(let i = 0; i < cart.length; i++) {
            if(cart[i].product.id === product.id){
                index = i;
                break;
            }
        }
    }
    return index
}

export default cart;