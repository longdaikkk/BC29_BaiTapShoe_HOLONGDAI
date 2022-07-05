import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    renderProductList() {
        return this.props.productsData.map((product) => {
            return <ProductItem item = {product} setStateModal={this.props.setStateModal}></ProductItem>
        })
    }
    render() {
        return (
            <div className='row'>
                {this.renderProductList()}
            </div>
        )
    }
}
