import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../Components/Cart';
import CartItem from './../Components/CartItem';
import CartResult from '../Components/CartResult';
import * as Message from './../constants/Message';
import * as actions from './../actions/index';


class CartContainer extends Component {

    render() {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalPrice(cart)}
            </Cart>
        );
    }

    showCartItem = (cart) => {
    var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
    var { delCart, changeMessage, updateCart } = this.props;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return(
                    <CartItem 
                    key = {index} 
                    index = {index} 
                    item = {item} 
                    delCart = {delCart}
                    updateCart = {updateCart}
                    changeMessage = {changeMessage}
                    />
                );
            })
        }
        return result
    }

    showTotalPrice = (cart) => {
        var result = null;
        if(cart.length > 0) {
            var total = 0;
            for (let i = 0; i < cart.length; i++){
                total += cart[i].product.price * cart[i].quantity;
            }
            result = < CartResult total = {total}/>
        }
        return result;
    }
}

CartContainer.propTypes = {
    cart : PropTypes.arrayOf(PropTypes.shape({
        product : PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired
            }).isRequired,
        quantity : PropTypes.number.isRequired
    })).isRequired
}

const mapStateToProps = (state) => {
    return {
        cart : state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        delCart : (product) => {
            dispatch(actions.actDelCart(product))
        },
        updateCart : (product, quantity) => {
            dispatch(actions.updateCart(product, quantity))
        },
        changeMessage : message => {
            dispatch(actions.changeMessage(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
