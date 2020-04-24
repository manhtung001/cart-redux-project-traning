import React, { Component } from 'react';
import * as message from './../constants/Message';

class CartItem extends Component {

    render() {
        var {item} = this.props
        return (
            <tr>
                <th scope="row">
                    <img src= {item.product.image}
                        alt={item.product.name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{item.quantity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label 
                        className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        onClick = {() => this.updateCart(item.product, item.quantity - 1)}
                        >
                            <a>—</a>
                        </label>
                        <label 
                        className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        onClick = {() => this.updateCart(item.product, item.quantity + 1)}
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.onSum(item.product.price, item.quantity)}$</td>
                <td>
                    <button 
                    type="button" 
                    className="btn btn-sm btn-primary waves-effect waves-light" 
                    data-toggle="tooltip" 
                    data-placement="top"
                    data-original-title="Remove item"
                    onClick={() => this.onDel(item.product)}
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    };

    onDel = (product) => {
        this.props.delCart(product);
        this.props.changeMessage(message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    };

    updateCart = (product, quantity) => {
        if (quantity > 0) {
            this.props.updateCart(product, quantity);
        }
        this.props.changeMessage(message.MSG_UPDATE_CART_SUCCESS);
    }

    onSum = (price, quantity) => {
        return price * quantity
    };
}

export default CartItem;

