import React, { Component } from 'react';
import Products from './../Components/Products';
import Product from './../Components/Product';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './../actions/index';

class ProductsContainer extends Component {

    render() {
        var { products } = this.props;
        return (
            <Products> 
                {this.showProducts(products)}
            </Products>
        );
    }

    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return < Product 
                key = {index} 
                product = {product}
                onAddToCart = {this.props.onAddToCart} 
                changeMessage = {this.props.changeMessage}
                />
            });
        }
        return result;
    }

}

ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = (state) => {
    return {
        products : state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart : product => {
            dispatch(actions.actAddCart(product, 1))
        },
        changeMessage : message => {
            dispatch(actions.changeMessage(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);

